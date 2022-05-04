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
  const [selectedAnswer, setSelectedAnswer] = useState();

  const dispatch = useDispatch();
  const { Characters } = useSelector((state) => state);

  const navigate = useNavigate();

  const getQuestion = () => {
    setCurrentQuestion(Questions[questionIndex]);
  };

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
    // setSelectedAnswer('');
    if (Questions.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedTraits(null);
      setSelectedAnswer(null);
    } else {
      navigate('/results');
    }
  };

  console.log('selectedTraits', selectedTraits);

  useEffect(() => {
    getQuestion();
  }, [getQuestion]);

  if (!currentQuestion) {
    return null;
  }

  console.log('selectedAnswer', selectedAnswer);

  return (
    <div className='quiz-wrapper'>
      <div className='question-wrapper'>
        <h3>Question #{questionIndex + 1}</h3>
        <Question
          setSelectedTraits={setSelectedTraits}
          setSelectedAnswer={setSelectedAnswer}
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
        <p>Answer: {selectedAnswer}</p>
        <button
          disabled={selectedTraits ? null : false}
          className='question-button'
          onClick={nextQuestion}>
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Quiz;
