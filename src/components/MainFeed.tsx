'use client';

import React from 'react';
import QuizCreator from '@/components/quiz/QuizCreator';
import QuizList from '@/components/quiz/QuizList';
import QuizPostCard from '@/components/quiz/QuizPostCard';
import TwitterLikeEditor from '@/components/TwitterLikeEditor';
import { useQuiz } from '@/features/quiz/hooks/useQuiz';

const MainFeed: React.FC = () => {
  const { quizzes, handleCreateQuiz, handleStartQuiz } = useQuiz();

  return (
    <>
      <TwitterLikeEditor />
      <QuizPostCard />
      <QuizCreator onCreateQuiz={handleCreateQuiz} />
      <QuizList quizzes={quizzes} onStartQuiz={handleStartQuiz} />
    </>
  );
};

export default MainFeed;
