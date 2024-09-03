'use client';

import React, { useEffect, useState } from 'react';
import { scenarios, mockPMGame } from '@/data/pmGameData';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import PMGamePlayer from '@/components/Quiz/PMGamePlayer';
import Icon from '@/components/Icon';
import Image from 'next/image';
import { useQuiz } from '@/hooks/useQuiz';

interface ParticipantCountResponse {
  count: number;
}

const QuizPostCard = () => {
  const { quizzes, handleCreateQuiz, handleStartQuiz, handleCloseGame } =
    useQuiz();
  const [showPMGame, setShowPMGame] = useState(false);
  const [participantCount, setParticipantCount] = useState(0);
  useEffect(() => {
    // Simulating fetching the participant count from an API
    const fetchParticipantCount = async () => {
      try {
        // Replace this with actual API call in production
        const response = await new Promise<ParticipantCountResponse>(
          (resolve) => setTimeout(() => resolve({ count: 132 }), 1000)
        );
        setParticipantCount(response.count);
      } catch (error) {
        console.error('Error fetching participant count:', error);
        // Handle the error appropriately
      }
    };

    fetchParticipantCount();
  }, []);

  const handleStartPMGame = () => {
    handleStartQuiz(mockPMGame);
    setShowPMGame(true);
    setParticipantCount((prevCount) => prevCount + 1);
  };

  const handleClosePMGame = () => {
    handleCloseGame();
    setShowPMGame(false);
  };

  const handleReplayPMGame = () => {
    setShowPMGame(false);
    // Reset any other necessary state here
    setTimeout(() => {
      setShowPMGame(true);
    }, 100); // A short delay to ensure the component fully unmounts and remounts
  };
  return (
    // outer layer of the quiz card
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
                <div className='flex flex-col items-center space-y-4 justify-center'>
                  <div className='flex flex-col items-center space-y-4 justify-center'>
                    <Image
                      src='/images/sendbird.png'
                      alt='Sendbird'
                      width={80}
                      height={80}
                      className='mx-auto border border-gray-100 rounded-2xl shadow-xl'
                    />
                    <div className='text-xs font-medium text-[#742DDD] '>
                      Sponsored by Sendbird
                    </div>
                  </div>
                  <h2 className='text-2xl font-semibold'>PO 레벨 테스트하기</h2>
                  <p className='text-gray-500 text-sm text-center max-w-[400px] break-keep'>
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
                onReplay={handleReplayPMGame}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className='mt-4 h-10 border-t border-gray-100 px-4 text-xs text-gray-500 leading-none flex gap-1 items-center'>
          <div className='flex items-center gap-1 flex-grow'>
            <Icon name='person.2.fill' className='w-4 h-4 ' />
            {participantCount}명 참여
          </div>
          <div className='flex items-center gap-1'>
            <span>Sponsored by</span>
            <Link
              href='https://sendbird.com'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 hover:underline'
            >
              <Image
                src='/images/sendbird.png'
                alt='sendbird'
                width={20}
                height={20}
                className='border border-solid border-gray-100 rounded-md'
              />
              Sendbird
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default QuizPostCard;
