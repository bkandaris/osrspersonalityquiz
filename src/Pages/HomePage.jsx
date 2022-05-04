import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Characters from '../Characters';
import { useSelector, useDispatch } from 'react-redux';
import { resetState } from '../redux/actions';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    dispatch(resetState());
  }, []);

  return (
    <div className='home-wrapper'>
      <div className='home-text-wrapper'>
        <h1 className='home-header'>RuneScape Personality Quiz</h1>
        <button
          className='home-button'
          onClick={() => {
            navigate('/quiz');
          }}>
          Start
        </button>
      </div>
    </div>
  );
};

export default HomePage;
