'use client';

import React from 'react';
import QuizPostCard from '@/components/quiz/QuizPostCard';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';

const MainFeed: React.FC = () => {
  return (
    <div className='mx-auto p-1 space-y-8'>
      <TwitterLikeEditor />
      <QuizPostCard />
    </div>
  );
};

export default MainFeed;
