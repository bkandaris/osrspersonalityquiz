import React from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Description of quiz</p>
      <button
        onClick={() => {
          navigate('/quiz');
        }}>
        Link to quiz
      </button>
    </div>
  );
};

export default HomePage;
