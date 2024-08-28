import { useState, useCallback } from 'react';
import { Quiz } from '@/types/quiz';

export const useQuiz = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [showMockGame, setShowMockGame] = useState(false);

  const handleCreateQuiz = useCallback((newQuiz: Quiz) => {
    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);
  }, []);

  const handleStartQuiz = useCallback((quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setShowMockGame(true);
  }, []);

  const handleCloseGame = useCallback(() => {
    setShowMockGame(false);
    setCurrentQuiz(null);
  }, []);

  return {
    quizzes,
    currentQuiz,
    showMockGame,
    handleCreateQuiz,
    handleStartQuiz,
    handleCloseGame,
  };
};
