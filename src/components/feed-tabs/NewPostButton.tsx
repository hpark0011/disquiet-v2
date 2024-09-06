import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';

interface NewPostButtonProps {
  config: {
    label: string;
    action: () => void;
  };
}

export const NewPostButton: React.FC<NewPostButtonProps> = React.memo(
  ({ config }) => (
    <Button
      variant='primary'
      size='sm'
      className='flex items-center'
      onClick={config.action}
    >
      <Icon name='plus' className='w-4 h-4 mr-2' />
      {config.label}
    </Button>
  )
);

NewPostButton.displayName = 'NewPostButton';
