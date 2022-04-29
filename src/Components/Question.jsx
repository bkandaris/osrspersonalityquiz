import React from 'react';

const Question = ({ id, question, answerA, answerB, answerC, answerD }) => {
  return (
    <div id={id}>
      <h3>{question}</h3>
      <p>{answerA}</p>
      <p>{answerB}</p>
      <p>{answerC}</p>
      <p>{answerD}</p>
    </div>
  );
};

export default Question;
