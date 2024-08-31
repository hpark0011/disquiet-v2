import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';

interface NewPostButtonProps {
  onClick: () => void;
}

export const NewPostButton: React.FC<NewPostButtonProps> = React.memo(
  ({ onClick }) => (
    <Button
      variant='primary'
      size='sm'
      className='flex items-center'
      onClick={onClick}
    >
      <Icon name='plus' className='w-4 h-4 mr-2' />새 글 쓰기
    </Button>
  )
);

NewPostButton.displayName = 'NewPostButton';
