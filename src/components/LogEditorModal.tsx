'use client';

import React from 'react';
import { Dialog, DialogClose, DialogContent, DialogTitle } from './ui/dialog';
import LogEditor from './LogEditor';
import { useLogSubmit } from '../hooks/useLogSubmit';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Icon from '@/components/Icon';
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
        {isMobile && (
          <div className='flex flex-row justify-between items-center py-2 px-3 border-b border-divider-primary'>
            <DialogClose className='text-link text-xs'>취소</DialogClose>
            <DialogTitle className='text-sm font-medium text-center'>
              로그 작성
            </DialogTitle>
            <a href='#' className='text-xs flex items-center text-link gap-1'>
              로그 작성 팁<Icon name='info.circle' className='w-4 h-4' />
            </a>
          </div>
        )}
        <LogEditor onSubmit={handleSubmit} isModal />
      </DialogContent>
    </Dialog>
  );
};

export default LogEditorModal;
