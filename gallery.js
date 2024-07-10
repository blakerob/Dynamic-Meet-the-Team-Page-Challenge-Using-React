// U92725213

import React from 'react';
import Profile from './Profile';

const Gallery = (props) => {
  const { teamData } = props;

  return (
    <section className="gallery">
      {teamData.map((member) => (
        <Profile
          key={member.id} // Assuming each member has a unique id
          name={member.name}
          role={member.role}
          photo={member.photo}
        />
      ))}
    </section>
  );
};

export default Gallery;
