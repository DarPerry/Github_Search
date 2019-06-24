import React, {useEffect} from 'react';
import  { faSearch }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const SearchBar = () => {

    let btnRepo, btnUser;
    useEffect(() => {
        btnRepo = document.getElementById('btn-repo');
        btnUser = document.getElementById('btn-user');
    });


    let fetchUserInfo = () => {
        fetch("https://api.github.com/users/darperry")
            .then((response) => console.log(response.json()))
    };

    let fetchRepoInfo = () => {
        fetch('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
    };

    let setButtonActive = (event) => {
        event.target.classList.toggle('active');
        if(event.target.value === 'user' && btnRepo.classList.contains('active'))
            btnRepo.classList.remove('active');
        if(event.target.value === 'repo' && btnUser.classList.contains('active'))
            btnUser.classList.remove('active');    } 

    return(
        <section className='row search'>
            <div className='input-group col-6 offset-2'>
                <input type='text' className='form-control' placeholder='Username or Repo...'/>
                <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' id='btn-user' value='user'onClick={setButtonActive}>
                        User
                    </button>
                    <button className='btn btn-outline-secondary' id ='btn-repo' value='repo' onClick={setButtonActive}>
                        Repo
                    </button>
                </div>
            </div>
                <button
                    className='btn btn-outline-primary offset-1'
                    onClick={fetchUserInfo}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
        </section>      
    );
};

export default SearchBar;