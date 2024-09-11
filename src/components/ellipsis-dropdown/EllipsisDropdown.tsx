import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import Icon from '../Icon';
import { dropdownActions } from '../../constants/dropdown-actions';
import DropdownItem from './EllipsisDropdownItem';
import { useDialogManager } from '../../hooks/useConfirmationDialog';
import ConfirmationDialog from './ConfirmationDialog';

const EllipsisDropdown: React.FC = () => {
  const {
    isDialogOpen,
    selectedAction,
    openDialog,
    confirmDialog,
    closeDialog,
  } = useDialogManager();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='p-[6px] hover:bg-primary'
          >
            <Icon name='ellipsis' className='w-5 h-5' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-fit rounded-xl'
          side='bottom'
          align='start'
        >
          {dropdownActions.map((action, index) => (
            <DropdownItem
              key={index}
              action={action}
              onClick={() => openDialog(action)}
            />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Confirmation Dialog */}
      <ConfirmationDialog
        open={isDialogOpen}
        title={selectedAction?.dialogTitle || ''}
        message={selectedAction?.dialogMessage || ''}
        onConfirm={confirmDialog}
        onCancel={closeDialog}
      />
    </>
  );
};

export default EllipsisDropdown;
