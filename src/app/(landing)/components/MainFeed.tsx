'use client';

import React, { useState, useCallback } from 'react';
import { Quiz } from '@/types/quiz';
import { scenarios, mockPMGame } from '@/data/pmGameData';
import QuizCreator from '@/components/QuizCreator';
import QuizList from '@/components/QuizList';
import PMGamePlayer from '@/components/PMGamePlayer';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';

const MainFeed: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [showMockGame, setShowMockGame] = useState(false);

  const handleCreateQuiz = useCallback((newQuiz: Quiz) => {
    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);
  }, []);

  const handleStartQuiz = useCallback((quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setShowMockGame(true);
  }, []);

  const handleCloseGame = useCallback(() => {
    setShowMockGame(false);
    setCurrentQuiz(null);
  }, []);

  return (
    <div className='max-w-4xl mx-auto p-4 space-y-8'>
      <h1 className='text-3xl font-bold text-gray-800'>Maker Log Feed</h1>

      <TwitterLikeEditor />

      <section className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4'>PM Scenario Game</h2>
        <p className='mb-4 text-gray-600'>{mockPMGame.description}</p>
        <button
          onClick={() => handleStartQuiz(mockPMGame)}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200'
        >
          Start PM Scenario Game
        </button>
      </section>

      {showMockGame && currentQuiz && (
        <PMGamePlayer
          quiz={currentQuiz}
          scenarios={scenarios}
          onClose={handleCloseGame}
        />
      )}

      <QuizCreator onCreateQuiz={handleCreateQuiz} />

      <QuizList quizzes={quizzes} onStartQuiz={handleStartQuiz} />
    </div>
  );
};

export default MainFeed;
