import { DialogClose, DialogTitle } from '@/components/ui/dialog';
import React from 'react';
import Icon from '../Icon';

const LogEditorHeader = () => {
  return (
    <div className='flex flex-row justify-between items-center py-2 px-3 border-b border-divider-primary'>
      <DialogClose className='text-link text-xs'>취소</DialogClose>
      <DialogTitle className='text-sm font-medium text-center'>
        로그 작성
      </DialogTitle>
      <a href='#' className='text-xs flex items-center text-link gap-1'>
        로그 작성 팁<Icon name='info.circle' className='w-4 h-4' />
      </a>
    </div>
  );
};

export default LogEditorHeader;
