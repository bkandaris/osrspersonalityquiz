import React from 'react';

const Character = ({ id, charName, picture, alt, description }) => {
  return (
    <div className='char-wrapper' id={id}>
      <h3>{charName}</h3>
      <img src={picture} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

export default Character;
