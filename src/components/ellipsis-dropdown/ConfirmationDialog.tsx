import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog';
import { ConfirmationDialogProps } from './types/ellipsisDropdown';
import { Button } from '../ui/button';

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent className='p-4 max-w-[480px]'>
        <DialogHeader className='items-center'>
          <DialogTitle className='text-base'>{title}</DialogTitle>
          <DialogDescription className='text-sm text-tertiary mt-2'>
            {message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='items-center sm:justify-center flex pt-4'>
          <Button
            variant='outline'
            className='w-16'
            size='sm'
            onClick={onCancel}
          >
            취소
          </Button>
          <Button
            variant='primary'
            size='sm'
            className='w-16'
            onClick={onConfirm}
          >
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
