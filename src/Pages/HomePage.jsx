import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Characters from '../Characters';
import { useSelector, useDispatch } from 'react-redux';
import { resetState } from '../redux/actions';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);

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
