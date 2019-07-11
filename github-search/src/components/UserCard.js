import React from 'react';

const UserCard = ({ login, avatar_url, name, html_url }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={avatar_url} alt="Github User Avatar" />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text">{`AKA ${name}`}</p>
        <a href={html_url} target='_blank' className="btn btn-primary">Visit Profile</a>
      </div>
    </div >
  )
};

export default UserCard;
