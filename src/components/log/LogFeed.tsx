import React, { useState } from 'react';
import { dummyLogs } from '@/data/dummyLogs';
import PostCard from '../post-card/PostCard';
import LogEditor from '../log-editor/LogEditor';
import { useLogSubmit } from '@/hooks/useLogSubmit';

const LogFeed = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(true);
  const { handleSubmitLog } = useLogSubmit();

  const handleSubmit = (content: string) => {
    const success = handleSubmitLog({ content });
    if (success) {
      setIsEditorOpen(false);
      // You might want to refresh the feed or update the UI in some way here
    }
  };

  const handleClose = () => {
    setIsEditorOpen(false);
  };

  return (
    <div className='max-w-[640px] p-1 px-0 mx-auto flex flex-col items-center space-y-9'>
      {isEditorOpen && (
        <LogEditor onSubmit={handleSubmit} onClose={handleClose} />
      )}
      {dummyLogs.map((log) => (
        <PostCard key={log.id} post={log} />
      ))}
    </div>
  );
};

export default LogFeed;
