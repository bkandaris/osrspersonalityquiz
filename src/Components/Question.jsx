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
}) => {
  return (
    <div id={id}>
      <h3 className='question'>{question}</h3>
      <div className='answers'>
        <p
          onClick={() => {
  
            setSelectedTraits(answerAtraits);
          }}>
          A: {answerA}
        </p>
        <p
          onClick={() => {

            setSelectedTraits(answerBtraits);
          }}>
          B: {answerB}
        </p>
        <p
          onClick={() => {
    
            setSelectedTraits(answerCtraits);
          }}>
          C: {answerC}
        </p>
        <p
          onClick={() => {

            setSelectedTraits(answerDtraits);
          }}>
          D: {answerD}
        </p>
      </div>
    </div>
  );
};

export default Question;
