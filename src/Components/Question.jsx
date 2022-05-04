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
            setSelectedTraits(answerAtraits);
            setSelectedAnswer(answerA);
          }}>
          A: {answerA}
        </p>
        <p
          onClick={() => {
            setSelectedTraits(answerBtraits);
            setSelectedAnswer(answerB);
          }}>
          B: {answerB}
        </p>
        <p
          onClick={() => {
            setSelectedTraits(answerCtraits);
            setSelectedAnswer(answerC);
          }}>
          C: {answerC}
        </p>
        <p
          onClick={() => {
            setSelectedTraits(answerDtraits);
            setSelectedAnswer(answerD);
          }}>
          D: {answerD}
        </p>
      </div>
    </div>
  );
};

export default Question;
