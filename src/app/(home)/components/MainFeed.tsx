'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import QuizPostCard from '@/components/quiz/QuizPostCard';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';
import ArticleFeed from '@/components/article';
import { useQuiz } from '@/hooks/useQuiz';

const MainFeed: React.FC = () => {
  const { quizzes, handleCreateQuiz, handleStartQuiz } = useQuiz();
  const pathname = usePathname();
  const isArticleFeed = pathname === '/articles';

  return (
    <div className='mx-auto p-1 space-y-8'>
      {isArticleFeed ? (
        <ArticleFeed />
      ) : (
        <>
          <TwitterLikeEditor />
          <QuizPostCard />
        </>
      )}
    </div>
  );
};

export default MainFeed;
