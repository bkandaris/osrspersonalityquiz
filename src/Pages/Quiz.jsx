import React, { useState, useEffect } from 'react';
import Question from '../Components/Question';
import Questions from '../Questions';
import { useNavigate } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { changeScore } from '../redux/actions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedTraits, setSelectedTraits] = useState(null);
  console.log('traits selected', selectedTraits);

  const dispatch = useDispatch();
  // needs to change to just state
  const { Characters } = useSelector((state) => state);

  // console.log('what is goin onnnnnn', Chars.Characters[1]);
  // console.log('Chars Length', Chars.Characters.length);

  console.log('this be the state characters', Characters);

  const navigate = useNavigate();

  const getQuestion = () => {
    setCurrentQuestion(Questions[questionIndex]);
  };

  // let arrayChecker = (arr, target) => target.every((v) => arr.includes(v));
  console.log('this is characters (length)', Characters);
  const incrementScores = (array) => {
    // Change below to state[0]
    for (let i = 0; i < Characters.length; i++) {
      // targetArray is the the traits array from each character
      // change below to state[0][i].traits
      let targetArray = Characters[i].traits;
      // This is what happens when there are matches
      if (targetArray.every((trait) => array.includes(trait))) {
        console.log('this should return once');
        // Dispatch the action to increase that characters score
        dispatch(changeScore(i));
        // this is what happens when there are no matches
      } else console.log('this NO RETURN');
    }
  };

  const nextQuestion = () => {
    incrementScores(selectedTraits);
    if (Questions.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/results');
    }
  };

  useEffect(() => {
    getQuestion();
  }, [getQuestion]);

  if (!currentQuestion) {
    return null;
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      <Question
        setSelectedTraits={setSelectedTraits}
        id={currentQuestion.id}
        question={currentQuestion.question}
        answerAtraits={currentQuestion.answerA.traits}
        answerA={currentQuestion.answerA.answer}
        answerBtraits={currentQuestion.answerB.traits}
        answerB={currentQuestion.answerB.answer}
        answerCtraits={currentQuestion.answerC.traits}
        answerC={currentQuestion.answerC.answer}
        answerDtraits={currentQuestion.answerD.traits}
        answerD={currentQuestion.answerD.answer}
      />
      <button onClick={nextQuestion}>Question Index</button>
    </div>
  );
};

export default Quiz;
