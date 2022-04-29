import React, { useState, useEffect } from 'react';
import Question from '../Components/Question';
import Questions from '../Questions';
import { useNavigate } from 'react-router';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const getQuestion = () => {
    setCurrentQuestion(Questions[questionIndex]);
  };

  const nextQuestion = () => {
    if (Questions.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/results');
    }
  };

  console.log('Length', Questions.length);

  useEffect(() => {
    getQuestion();
  }, [getQuestion]);

  console.log('static questions');
  console.log('cq', currentQuestion);

  if (!currentQuestion) {
    return null;
  }
  console.log('qi', questionIndex);

  return (
    <div>
      <h1>Quiz Page</h1>
      <Question
        id={currentQuestion.id}
        question={currentQuestion.question}
        answerA={currentQuestion.answerA.answer}
        answerB={currentQuestion.answerB.answer}
        answerC={currentQuestion.answerC.answer}
        answerD={currentQuestion.answerD.answer}
      />
      <button onClick={nextQuestion}>Question Index</button>
    </div>
  );
};

export default Quiz;
