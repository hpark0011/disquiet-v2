'use client';

import React from 'react';
import QuizPostCard from '@/components/quiz/QuizPostCard';
import LogEditor from '@/components/LogEditor';
import { useLogSubmit } from '@/hooks/useLogSubmit';

const MainFeed: React.FC = () => {
  const { handleSubmit, handleClose } = useLogSubmit();

  return (
    <div className='mx-auto p-1 space-y-8'>
      <LogEditor onSubmit={handleSubmit} onClose={handleClose} />
      <QuizPostCard />
    </div>
  );
};

export default MainFeed;
