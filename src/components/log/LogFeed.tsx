import { dummyLogs } from '@/data/dummyLogs';
import React from 'react';
import PostCard from '../post-card/PostCard';
import LogEditor from '../LogEditor';

const LogFeed = () => {
  return (
    <div className='max-w-[640px] p-1 px-0 mx-auto flex flex-col items-center space-y-9'>
      <LogEditor />
      {dummyLogs.map((log) => (
        <PostCard key={log.id} post={log} />
      ))}
    </div>
  );
};

export default LogFeed;
