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
import PollCreator from '@/components/poll/PollCreator';
import PollList from '@/components/poll/PollList';
import { usePoll } from '@/hooks/usePoll';
import Icon from '@/components/Icon';
import Image from 'next/image';

const MainFeed: React.FC = () => {
  const { quizzes, handleCreateQuiz, handleStartQuiz, handleCloseGame } =
    useQuiz();
  const [showPMGame, setShowPMGame] = useState(false);

  const { polls, createPoll, votePoll } = usePoll();

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
      <TwitterLikeEditor />
      <div className='p-[2px] bg-gradient-to-b from-[#00000005] to-transparent rounded-[22px]'>
        <motion.section
          className='bg-white rounded-[20px] px-0 py-0  shadow-quiz-card'
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
                <div className='flex flex-col items-center space-y-6 h-[400px] justify-center px-6'>
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
                className='px-4'
              >
                <PMGamePlayer
                  quiz={mockPMGame}
                  scenarios={scenarios}
                  onClose={handleClosePMGame}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className='mt-4 h-10 border-t border-gray-100 px-4 text-xs text-gray-500 leading-none flex gap-1 items-center'>
            <div className='flex items-center gap-1 flex-grow'>
              <Icon name='person.2.fill' className='w-4 h-4 ' />
              132명 참여
            </div>
            <div className='flex items-center gap-1'>
              <span> Sponsored by</span>
              <div className='flex items-center gap-1'>
                <Image
                  src='/sendbird.png'
                  alt='sendbird'
                  width={20}
                  height={20}
                  className='border border-solid border-gray-100 rounded-md'
                />
                Sendbird
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <PollCreator onCreatePoll={createPoll} />
      <PollList polls={polls} onVote={votePoll} />
      <QuizCreator onCreateQuiz={handleCreateQuiz} />
      <QuizList quizzes={quizzes} onStartQuiz={handleStartQuiz} />
    </div>
  );
};

export default MainFeed;
