'use client';

import React from 'react';
import QuizPostCard from '@/components/quiz/QuizPostCard';
import LogEditor from '@/components/LogEditor';

const MainFeed: React.FC = () => {
  return (
    <div className='mx-auto p-1 space-y-8'>
      <LogEditor />
      <QuizPostCard />
    </div>
  );
};

export default MainFeed;
