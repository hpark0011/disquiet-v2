import React from 'react';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import Icon from '../Icon';
import { DropdownAction } from './types/ellipsisDropdown';

interface DropdownItemProps {
  action: DropdownAction;
  onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ action, onClick }) => {
  return (
    <DropdownMenuItem
      className='flex items-center gap-1.5 pl-2 pr-3 py-1.5 cursor-pointer hover:bg-primary rounded-lg'
      onClick={onClick}
    >
      <Icon name={action.icon} className='w-5 h-5' />
      <span className='text-label text-secondary'>{action.label}</span>
    </DropdownMenuItem>
  );
};

export default DropdownItem;
