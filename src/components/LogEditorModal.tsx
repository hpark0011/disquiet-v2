'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import LogEditor from './LogEditor';
import { useLogSubmit } from '../hooks/useLogSubmit';

interface LogEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (logData: { content: string }) => void; // Add this line
}

const LogEditorModal: React.FC<LogEditorModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { handleSubmitLog } = useLogSubmit();

  const handleSubmit = (content: string) => {
    const success = handleSubmitLog({ content });
    if (success) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[620px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.2),0px_8px_32px_-4px_rgba(0,0,0,0.4)]'>
        <LogEditor onSubmit={handleSubmit} isModal={true} />
      </DialogContent>
    </Dialog>
  );
};

export default LogEditorModal;
