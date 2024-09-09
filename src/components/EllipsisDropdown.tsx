import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import Icon from './Icon';

interface DropdownAction {
  icon: string;
  label: string;
  onClick: () => void;
  className?: string;
}

const dropdownActions: DropdownAction[] = [
  {
    icon: 'square.and.pencil',
    label: '수정하기',
    onClick: () => console.log('Edit action'),
  },
  {
    icon: 'trash',
    label: '삭제하기',
    onClick: () => console.log('Delete action'),
  },
];

const EllipsisDropdown: React.FC = () => {
  const renderDropdownItem = (action: DropdownAction, index: number) => (
    <DropdownMenuItem
      key={index}
      onClick={action.onClick}
      className={`flex items-center w-fit gap-2 cursor-pointer rounded-lg ${
        action.className || ''
      }`}
    >
      <Icon name={action.icon} className='w-5 h-5' />
      <span className='text-label text-primary'>{action.label}</span>
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='p-[6px] hover:bg-primary'>
          <Icon name='ellipsis' className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-fit rounded-xl'
        side='bottom'
        align='start'
      >
        {dropdownActions.map(renderDropdownItem)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EllipsisDropdown;
