'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import QuizCreator from '@/components/quiz/QuizCreator';
import QuizList from '@/components/quiz/QuizList';
import QuizPostCard from '@/components/quiz/QuizPostCard';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';
import ArticleFeed from '@/components/ArticleFeed';
import { useQuiz } from '@/features/quiz/hooks/useQuiz';

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
          <QuizCreator onCreateQuiz={handleCreateQuiz} />
          <QuizList quizzes={quizzes} onStartQuiz={handleStartQuiz} />
        </>
      )}
    </div>
  );
};

export default MainFeed;
