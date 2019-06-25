import React from 'react';

const UserCard = ({ login, avatar_url, name, url }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={avatar_url} alt="Github User Avatar" />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text">{`AKA ${name}`}</p>
        <a href="#" className="btn btn-primary">Visit Profile</a>
      </div>
    </div>
  )
};

export default UserCard;
