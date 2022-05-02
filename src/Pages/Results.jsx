import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Results = () => {
  const dispatch = useDispatch();
  const { Characters } = useSelector((state) => state);
  console.log('character state in results', Characters);

  return <div></div>;
};

export default Results;
