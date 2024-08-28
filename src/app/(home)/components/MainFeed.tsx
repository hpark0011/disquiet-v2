'use client';

import React, { useState } from 'react';
import { scenarios, mockPMGame } from '@/data/pmGameData';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

import PMGamePlayer from '@/components/quiz/PMGamePlayer';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';
import { useQuiz } from '@/hooks/useQuiz';
import QuizCreator from '@/components/quiz/QuizCreator';
import QuizList from '@/components/quiz/QuizList';

const MainFeed: React.FC = () => {
  const {
    quizzes,
    currentQuiz,
    handleCreateQuiz,
    handleStartQuiz,
    handleCloseGame,
  } = useQuiz();
  const [showPMGame, setShowPMGame] = useState(false);

  const handleStartPMGame = () => {
    handleStartQuiz(mockPMGame);
    setShowPMGame(true);
  };

  const handleClosePMGame = () => {
    handleCloseGame();
    setShowPMGame(false);
  };

  return (
    <div className='max-w-4xl mx-auto p-4 space-y-8'>
      <h1 className='text-base font-bold text-gray-800'>Maker Log Feed</h1>
      <TwitterLikeEditor />
      <motion.section
        className='bg-white shadow-lg rounded-[20px] p-6 overflow-hidden'
        initial={{ height: 'auto' }}
        animate={{ height: showPMGame ? 'auto' : 'auto' }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode='wait'>
          {!showPMGame ? (
            <motion.div
              key='intro'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className='flex flex-col items-center space-y-6 h-[400px] justify-center'>
                <div className='flex flex-col items-center space-y-2 justify-center'>
                  <h2 className='text-2xl font-semibold'>PM Scenario Game</h2>
                  <p className='text-gray-600 text-center'>
                    {mockPMGame.description}
                  </p>
                </div>
                <Button
                  onClick={handleStartPMGame}
                  size={'sm'}
                  variant='primary'
                >
                  PM 테스트 시작
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key='game'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PMGamePlayer
                quiz={mockPMGame}
                scenarios={scenarios}
                onClose={handleClosePMGame}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <QuizCreator onCreateQuiz={handleCreateQuiz} />
      <QuizList quizzes={quizzes} onStartQuiz={handleStartQuiz} />
    </div>
  );
};

export default MainFeed;
