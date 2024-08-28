import React from 'react';
import { Quiz } from '@/types/quiz';

interface QuizListProps {
  quizzes: Quiz[];
  onStartQuiz: (quiz: Quiz) => void;
}

const QuizList: React.FC<QuizListProps> = ({ quizzes, onStartQuiz }) => {
  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Available Quizzes</h2>
      {quizzes.length === 0 ? (
        <p className='text-gray-500'>No quizzes available yet.</p>
      ) : (
        <ul className='space-y-4'>
          {quizzes.map((quiz, index) => (
            <li key={index} className='border-b pb-4 last:border-b-0'>
              <h3 className='text-lg font-semibold'>{quiz.title}</h3>
              <p className='text-gray-600 mb-2'>{quiz.description}</p>
              <button
                onClick={() => onStartQuiz(quiz)}
                className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200'
              >
                Start Quiz
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizList;
