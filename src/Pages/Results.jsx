import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const { Characters } = useSelector((state) => state);

  function compareScores(a, b) {
    return a.score - b.score;
  }
  // sorting all the characters from lowest -> highest score
  Characters.sort(compareScores);
  // destructure the last indexed object in the array
  let { charName, picture, alt, description, traits, score } =
    Characters[Characters.length - 1];
  console.log('charName', charName);
  console.log('picture', picture);

  return (
    <div>
      <h1>Results</h1>
      <h3>{charName}</h3>
      <img src={picture} alt={alt} />
      <p>{description}</p>
      <p>{score}</p>
      <button
        onClick={() => {
          navigate('/');
        }}>
        Restart
      </button>
    </div>
  );
};

export default Results;
