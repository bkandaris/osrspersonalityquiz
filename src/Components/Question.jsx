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
}) => {
  const [selectedTraits, setSelectedTraits] = useState(null);
  console.log('traits selected', selectedTraits);
  console.log('TYPE', typeof answerA.traits);
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
