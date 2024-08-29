import React from 'react';
import { Button } from '@/components/ui/button';

interface Poll {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
}

interface PollListProps {
  polls: Poll[];
  onVote: (pollId: string, optionIndex: number) => void;
}

const PollList: React.FC<PollListProps> = ({ polls, onVote }) => {
  return (
    <div className='space-y-6'>
      {polls.map((poll) => (
        <div key={poll.id} className='bg-white p-4 rounded shadow'>
          <h3 className='text-lg font-semibold mb-2'>{poll.question}</h3>
          <div className='space-y-2'>
            {poll.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => onVote(poll.id, index)}
                className='w-full justify-between'
              >
                <span>{option.text}</span>
                <span>{option.votes} votes</span>
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PollList;
