import React from 'react';
import { QuizConfig } from '../types';

interface QuizSelectorProps {
  quizzes: QuizConfig[];
  onSelectQuiz: (quiz: QuizConfig) => void;
}

const QuizSelector: React.FC<QuizSelectorProps> = ({
  quizzes,
  onSelectQuiz,
}) => {
  return (
    <div>
      <h2>Select a Quiz</h2>
      {quizzes.map((quiz) => (
        <button key={quiz.id} onClick={() => onSelectQuiz(quiz)}>
          {quiz.title}
        </button>
      ))}
    </div>
  );
};

export default QuizSelector;
