import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PollCreatorProps {
  onCreatePoll: (question: string, options: string[]) => void;
}

const PollCreator: React.FC<PollCreatorProps> = ({ onCreatePoll }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreatePoll(
      question,
      options.filter((option) => option.trim() !== '')
    );
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='text'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='Enter your poll question'
        className='w-full p-2 border rounded'
        required
      />
      {options.map((option, index) => (
        <input
          key={index}
          type='text'
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
          className='w-full p-2 border rounded'
          required
        />
      ))}
      <Button type='button' onClick={handleAddOption}>
        Add Option
      </Button>
      <Button type='submit'>Create Poll</Button>
    </form>
  );
};

export default PollCreator;
