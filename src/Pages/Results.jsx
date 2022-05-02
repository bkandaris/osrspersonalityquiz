import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const { Characters } = useSelector((state) => state);
  const [result, setResult] = useState();

  function compareScores(a, b) {
    return a.score - b.score;
  }

  Characters.sort(compareScores);

  console.log('result', Characters);

  return (
    <div>
      <h1>Results</h1>
      <h3>{Characters[0].charName}</h3>
      <button
        onClick={() => {
          navigate('/');
        }}></button>
    </div>
  );
};

export default Results;
