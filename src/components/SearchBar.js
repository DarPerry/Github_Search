import React, { useEffect, useRef } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ setSearchState, addToSearchHistory, currentSearch, currentHistory }) => {

    let btnRepo, btnUser;
    useEffect(() => {
        btnRepo = document.getElementById('btn-repo');
        btnUser = document.getElementById('btn-user');
    });

    const searchBar = useRef();

    let fetchGithubData = () => {

        if (!searchBar.current.value
            || searchBar.current.value == ''
            || (!btnRepo.classList.contains('active') && !btnUser.classList.contains('active'))
        ) {
            searchBar.current.classList.add('inputError');
            btnRepo.classList.add('inputError');
            btnUser.classList.add('inputError');

            setTimeout(() => {
                searchBar.current.classList.remove('inputError');
                btnRepo.classList.remove('inputError');
                btnUser.classList.remove('inputError');
            }, 500)
        }
        else {
            if (btnUser.classList.contains('active'))
                fetchUserInfo(currentSearch);
            if (btnRepo.classList.contains('active'))
                fetchRepoInfo(currentSearch);
        }
    }

    let fetchUserInfo = (currentSearch) => {
        if (currentSearch && Object.keys(currentSearch).length != 0)
            addToSearchHistory([{ ...currentSearch }, ...currentHistory]);

        fetch(`https://api.github.com/users/${searchBar.current.value}`)
            .then(response => {
                if (!response.ok) { throw Error(response.statusText) }
                return response.json()
            })
            .then(({ login, avatar_url, name, html_url }) => {
                setSearchState({ login, avatar_url, name, html_url, type: 'user' });
                searchBar.current.value = '';
            })
            .catch((err) => {
                setSearchState({});
            });
    };

    let fetchRepoInfo = (currentSearch) => {
        if (currentSearch && Object.keys(currentSearch).length != 0)
            addToSearchHistory([{ ...currentSearch }, ...currentHistory]);

        fetch(`https://api.github.com/search/repositories?q=${searchBar.current.value.replace(' ', '%20')}`)
            .then(response => {
                if (!response.ok) { throw Error(response.statusText) }
                return response.json()
            })
            .then(rawData => rawData.items[0])
            .then(({ name, full_name, html_url }) => {
                setSearchState({ name, full_name, html_url, type: 'repo' })
                searchBar.current.value = '';
            })
            .catch((err) => setSearchState({}));
    };

    let setButtonActive = (event) => {
        event.target.classList.toggle('active');
        if (event.target.value === 'user' && btnRepo.classList.contains('active'))
            btnRepo.classList.remove('active');
        if (event.target.value === 'repo' && btnUser.classList.contains('active'))
            btnUser.classList.remove('active');
    }

    return (
        <>
            <h2>Search</h2>
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
        </>
    );
};

export default SearchBar;