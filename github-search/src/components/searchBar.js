import React, { useEffect, useRef } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ setSearchState }) => {

    let btnRepo, btnUser;
    useEffect(() => {
        btnRepo = document.getElementById('btn-repo');
        btnUser = document.getElementById('btn-user');
    });

    const searchBar = useRef();

    let fetchGithubData = () => {
        if (btnUser.classList.contains('active'))
            fetchUserInfo();
        if (btnRepo.classList.contains('active'))
            fetchRepoInfo();
    }

    let fetchUserInfo = () => {
        fetch(`https://api.github.com/users/${searchBar.current.value}`)
            .then(response => {
                if (!response.ok) { throw Error(response.statusText) }
                return response.json()
            })
            .then(({ login, avatar_url, name, url }) => setSearchState({ login, avatar_url, name, url }))
            .catch((err) => setSearchState({}));
    };

    let fetchRepoInfo = () => {
        fetch('https://api.github.com/search/repositories?q=create%20create%20app')
            .then((result) => result.json())
            .then((data) => console.log(data.items[0]))
    };

    let setButtonActive = (event) => {
        event.target.classList.toggle('active');
        if (event.target.value === 'user' && btnRepo.classList.contains('active'))
            btnRepo.classList.remove('active');
        if (event.target.value === 'repo' && btnUser.classList.contains('active'))
            btnUser.classList.remove('active');
    }

    return (
        <section className='row search'>
            <div className='input-group col-6 offset-2'>
                <input type='text' className='form-control' placeholder='Username or Repo...' ref={searchBar} />
                <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' id='btn-user' value='user' onClick={setButtonActive}>
                        User
                    </button>
                    <button className='btn btn-outline-secondary' id='btn-repo' value='repo' onClick={setButtonActive}>
                        Repo
                    </button>
                </div>
            </div>
            <button
                className='btn btn-outline-primary offset-1'
                onClick={() => fetchGithubData()}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </section>
    );
};

export default SearchBar;