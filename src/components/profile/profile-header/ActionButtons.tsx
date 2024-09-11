import { Button } from '@/components/ui/button';
import React from 'react';
import EllipsisDropdown from '@/components/ellipsis-dropdown/EllipsisDropdown';

const ActionButtons: React.FC = () => (
  <div className='flex items-center mt-4 space-x-2'>
    <Button variant='secondary' size='sm'>
      팔로우
    </Button>
    <Button variant='primary' size='sm'>
      커피챗
    </Button>
    <EllipsisDropdown />
  </div>
);

export default ActionButtons;
