import React from 'react';
import { QuizConfig } from '../types';

interface QuizListProps {
  quizzes: QuizConfig[];
  onStartQuiz: (quiz: QuizConfig) => void;
}

const QuizList: React.FC<QuizListProps> = ({ quizzes, onStartQuiz }) => {
  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <p>{quiz.description}</p>
          <button onClick={() => onStartQuiz(quiz)}>Start Quiz</button>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
