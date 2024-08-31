import React, { useState } from 'react';
import { QuizConfig, Answer, QuizResults } from '../types';

interface QuizProps {
  quizConfig: QuizConfig;
  onComplete: (results: QuizResults) => void;
}

const Quiz: React.FC<QuizProps> = ({ quizConfig, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = (value: number | string) => {
    const newAnswer: Answer = {
      questionId: quizConfig.questions[currentQuestionIndex].id,
      value,
    };
    setAnswers([...answers, newAnswer]);

    if (currentQuestionIndex < quizConfig.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let score: number;
    switch (quizConfig.scoringSystem.type) {
      case 'sum':
        score = answers.reduce(
          (sum, answer) =>
            sum + (typeof answer.value === 'number' ? answer.value : 0),
          0
        );
        break;
      case 'average':
        score =
          answers.reduce(
            (sum, answer) =>
              sum + (typeof answer.value === 'number' ? answer.value : 0),
            0
          ) / answers.length;
        break;
      case 'custom':
        score = quizConfig.scoringSystem.customLogic
          ? quizConfig.scoringSystem.customLogic(answers)
          : 0;
        break;
      default:
        score = 0;
    }

    let result: string;
    switch (quizConfig.resultCalculation.type) {
      case 'threshold':
        result =
          quizConfig.resultCalculation.thresholds?.[Math.floor(score)] ||
          'No result';
        break;
      case 'range':
        result =
          quizConfig.resultCalculation.ranges?.find(
            (range) => score >= range.min && score <= range.max
          )?.result || 'No result';
        break;
      case 'custom':
        result = quizConfig.resultCalculation.customLogic
          ? quizConfig.resultCalculation.customLogic(score)
          : 'No result';
        break;
      default:
        result = 'No result';
    }

    onComplete({ score, result, answers });
  };

  const renderQuestion = () => {
    if (currentQuestionIndex >= quizConfig.questions.length) {
      return <div>No more questions available.</div>;
    }

    const question = quizConfig.questions[currentQuestionIndex];
    if (!question) {
      return <div>Error: Question not found.</div>;
    }

    switch (question.type) {
      case 'multiple-choice':
        return (
          <div>
            <h3>{question.prompt}</h3>
            {question.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        );
      case 'slider':
        return (
          <div>
            <h3>{question.prompt}</h3>
            <input
              type='range'
              min='0'
              max='100'
              onChange={(e) => handleAnswer(parseInt(e.target.value))}
            />
          </div>
        );
      case 'text':
        return (
          <div>
            <h3>{question.prompt}</h3>
            <input type='text' onChange={(e) => handleAnswer(e.target.value)} />
          </div>
        );
      default:
        return <div>Unsupported question type.</div>;
    }
  };

  if (
    !quizConfig ||
    !quizConfig.questions ||
    quizConfig.questions.length === 0
  ) {
    return <div>Error: Invalid quiz configuration.</div>;
  }

  return (
    <div>
      <h2>{quizConfig.title}</h2>
      <p>{quizConfig.description}</p>
      {renderQuestion()}
    </div>
  );
};

export default Quiz;
