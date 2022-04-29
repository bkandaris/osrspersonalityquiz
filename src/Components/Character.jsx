import React from 'react';

const Character = ({ id, charName, picture, description, traits, score }) => {
  return (
    <div id={id}>
      <h3>{charName}</h3>
      <img src='' />
      <p>{description}</p>
    </div>
  );
};

export default Character;
