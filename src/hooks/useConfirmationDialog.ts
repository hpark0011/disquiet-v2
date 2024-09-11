import { useState } from 'react';
import { DropdownAction } from '../types/ellipsis-dropdown';

export const useDialogManager = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<DropdownAction | null>(
    null
  );

  const openDialog = (action: DropdownAction) => {
    setSelectedAction(action);
    setIsDialogOpen(true);
  };

  const confirmDialog = () => {
    selectedAction?.onClick();
    closeDialog();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedAction(null);
  };

  return {
    isDialogOpen,
    selectedAction,
    openDialog,
    confirmDialog,
    closeDialog,
  };
};
