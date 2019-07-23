import React from 'react';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepoCard = ({ name, full_name, html_url }) => {
    return (
        <div className="card repoCard">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <FontAwesomeIcon icon={faDatabase} className='repoIcon' />
                <p className="card-text">{full_name}</p>
                <a href={html_url} target='_blank' className="btn btn-primary">Visit Repo</a>
            </div>
        </div>
    )
};

export default RepoCard;