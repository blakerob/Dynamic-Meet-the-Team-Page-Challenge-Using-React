// U92725213

import React from 'react';

const Profile = (props) => {
  const { name, role, photo } = props;

  return (
    <div className="profile">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <h3>{role}</h3>
    </div>
  );
};

export default Profile;
