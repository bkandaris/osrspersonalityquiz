import React, { useState } from 'react';

const Question = ({
  id,
  question,
  answerA,
  answerAtraits,
  answerB,
  answerBtraits,
  answerC,
  answerCtraits,
  answerD,
  answerDtraits,
  setSelectedTraits,
  setSelectedAnswer,
}) => {
  return (
    <div id={id}>
      <h3 className='question'>{question}</h3>
      <div className='answers'>
        <p
          onClick={() => {
            setSelectedAnswer(answerA);
            setSelectedTraits(answerAtraits);
          }}>
          A: {answerA}
        </p>
        <p
          onClick={() => {
            setSelectedAnswer(answerB);
            setSelectedTraits(answerBtraits);
          }}>
          B: {answerB}
        </p>
        <p
          onClick={() => {
            setSelectedAnswer(answerC);
            setSelectedTraits(answerCtraits);
          }}>
          C: {answerC}
        </p>
        <p
          onClick={() => {
            setSelectedAnswer(answerD);
            setSelectedTraits(answerDtraits);
          }}>
          D: {answerD}
        </p>
      </div>
    </div>
  );
};

export default Question;
