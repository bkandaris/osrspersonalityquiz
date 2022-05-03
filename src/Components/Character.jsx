import React from 'react';

const Character = ({
  id,
  charName,
  picture,
  alt,
  description
}) => {
  return (
    <div id={id}>
      <h3>{charName}</h3>
      <img src={picture} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

export default Character;
