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

  const dispatch = useDispatch();
  const { Characters } = useSelector((state) => state);

  console.log('this be the state characters', Characters);

  const navigate = useNavigate();

  const getQuestion = () => {
    setCurrentQuestion(Questions[questionIndex]);
  };

  // let arrayChecker = (arr, target) => target.every((v) => arr.includes(v));
  console.log('this is characters (length)', Characters);
  const incrementScores = (array) => {
    for (let i = 0; i < Characters.length; i++) {
      // targetArray is the the traits array from each character
      let targetArray = Characters[i].traits;
      // This is what happens when there are matches
      if (targetArray.some((trait) => array.includes(trait))) {
        console.log('this should return once');
        // Dispatch the action to increase that character's score
        dispatch(changeScore(i));
        // this is what happens when there are no matches
      } else console.log('No Matches');
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
