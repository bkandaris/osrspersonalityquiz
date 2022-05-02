import React from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const { Characters } = useSelector((state) => state);
  console.log('character state in results', Characters);

  return (
    <div>
      <h1>Results</h1>
      <button
        onClick={() => {
          navigate('/');
        }}></button>
    </div>
  );
};

export default Results;
