import React, { useState } from 'react';
import { Quiz } from '@/types/quiz';
import { Button } from '../ui/button';

interface QuizCreatorProps {
  onCreateQuiz: (quiz: Quiz) => void;
}

const QuizCreator: React.FC<QuizCreatorProps> = ({ onCreateQuiz }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuiz: Quiz = {
      title,
      description,
      questions: [],
    };
    onCreateQuiz(newQuiz);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white shadow rounded-lg p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Create a New Quiz</h2>
      <div className='space-y-4'>
        <div>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title
          </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            required
          />
        </div>
        <div>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700'
          >
            Description
          </label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            rows={3}
            required
          ></textarea>
        </div>
        <Button variant='primary' type='submit'>
          Create Quiz
        </Button>
      </div>
    </form>
  );
};

export default QuizCreator;
