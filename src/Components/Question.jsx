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
  setSelectedTraits
}) => {


  return (
    <div id={id}>
      <h3>{question}</h3>
      <p
        onClick={() => {
          setSelectedTraits(answerAtraits);
        }}>
        {answerA}
      </p>
      <p
        onClick={() => {
          setSelectedTraits(answerBtraits);
        }}>
        {answerB}
      </p>
      <p
        onClick={() => {
          setSelectedTraits(answerCtraits);
        }}>
        {answerC}
      </p>
      <p
        onClick={() => {
          setSelectedTraits(answerDtraits);
        }}>
        {answerD}
      </p>
    </div>
  );
};

export default Question;
