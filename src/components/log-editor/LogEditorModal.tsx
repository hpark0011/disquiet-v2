'use client';

import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '../ui/dialog';
import LogEditor from './LogEditor';
import { useLogSubmit } from '../../hooks/useLogSubmit';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Icon from '@/components/Icon';
import LogEditorHeader from './LogEditorHeader';

interface LogEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (logData: { content: string }) => void; // Add this line
}

const LogEditorModal: React.FC<LogEditorModalProps> = ({ isOpen, onClose }) => {
  const { handleSubmitLog } = useLogSubmit();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSubmit = (content: string) => {
    const success = handleSubmitLog({ content });
    if (success) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent variant='primary' size='lg'>
        {isMobile && <LogEditorHeader />}
        <LogEditor onSubmit={handleSubmit} isModal />
      </DialogContent>
    </Dialog>
  );
};

export default LogEditorModal;
