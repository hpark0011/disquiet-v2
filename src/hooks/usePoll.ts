import { useState } from 'react';

interface Poll {
  id: string;
  question: string;
  options: { text: string; votes: number }[];
}

export const usePoll = () => {
  const [polls, setPolls] = useState<Poll[]>([]);

  const createPoll = (question: string, options: string[]) => {
    const newPoll: Poll = {
      id: Date.now().toString(),
      question,
      options: options.map((option) => ({ text: option, votes: 0 })),
    };
    setPolls([...polls, newPoll]);
  };

  const votePoll = (pollId: string, optionIndex: number) => {
    setPolls(
      polls.map((poll) => {
        if (poll.id === pollId) {
          const newOptions = [...poll.options];
          newOptions[optionIndex].votes += 1;
          return { ...poll, options: newOptions };
        }
        return poll;
      })
    );
  };

  return { polls, createPoll, votePoll };
};
