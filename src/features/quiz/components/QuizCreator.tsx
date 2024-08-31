import React, { useState } from 'react';
import {
  QuizConfig,
  Question,
  Option,
  ScoringSystem,
  ResultCalculation,
} from '../types';

interface QuizCreatorProps {
  onCreateQuiz: (quiz: QuizConfig) => void;
}

const QuizCreator: React.FC<QuizCreatorProps> = ({ onCreateQuiz }) => {
  const [quiz, setQuiz] = useState<QuizConfig>({
    id: '',
    title: '',
    description: '',
    questions: [],
    scoringSystem: { type: 'sum' },
    resultCalculation: { type: 'threshold', thresholds: {} },
  });

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'multiple-choice',
      prompt: '',
      options: [],
    };
    setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
  };

  const updateQuestion = (index: number, updatedQuestion: Question) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index] = updatedQuestion;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateQuiz(quiz);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Quiz Title'
        value={quiz.title}
        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
      />
      <textarea
        placeholder='Quiz Description'
        value={quiz.description}
        onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
      />
      {quiz.questions.map((question, index) => (
        <div key={question.id}>
          <input
            type='text'
            placeholder='Question Prompt'
            value={question.prompt}
            onChange={(e) =>
              updateQuestion(index, { ...question, prompt: e.target.value })
            }
          />
          {/* Add more inputs for question options, type, etc. */}
        </div>
      ))}
      <button type='button' onClick={addQuestion}>
        Add Question
      </button>
      {/* Add inputs for scoring system and result calculation */}
      <button type='submit'>Create Quiz</button>
    </form>
  );
};

export default QuizCreator;
