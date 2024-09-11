export interface DropdownAction {
  icon: string;
  label: string;
  onClick: () => void;
  dialogTitle: string;
  dialogMessage: string;
}

export interface DropdownItemProps {
  action: DropdownAction;
  onClick: () => void;
}

export interface ConfirmationDialogProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}
