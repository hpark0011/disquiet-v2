'use client';

import React from 'react';
import { scenarios, mockPMGame } from '@/data/pmGameData';
import { Button } from '@/components/ui/button';

import PMGamePlayer from '@/components/quiz/PMGamePlayer';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';
import { useQuiz } from '@/hooks/useQuiz';
import QuizCreator from '@/components/quiz/QuizCreator';
import QuizList from '@/components/quiz/QuizList';

const MainFeed: React.FC = () => {
  const {
    quizzes,
    currentQuiz,
    showMockGame,
    handleCreateQuiz,
    handleStartQuiz,
    handleCloseGame,
  } = useQuiz();

  return (
    <div className='max-w-4xl mx-auto p-4 space-y-8'>
      <h1 className='text-base font-bold text-gray-800'>Maker Log Feed</h1>
      <TwitterLikeEditor />
      <section className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4'>PM Scenario Game</h2>
        <p className='mb-4 text-gray-600'>{mockPMGame.description}</p>
        <Button
          onClick={() => handleStartQuiz(mockPMGame)}
          size={'sm'}
          variant='primary'
        >
          PM 테스트 시작
        </Button>
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
