import { DropdownAction } from '../types/ellipsisDropdown';

export const dropdownActions: DropdownAction[] = [
  {
    icon: 'square.and.pencil',
    label: '수정하기',
    dialogTitle: '수정하시겠습니까?',
    dialogMessage: '수정하면 다시 되돌릴 수 없습니다.',
    onClick: () => console.log('Edit action'),
  },
  {
    icon: 'trash',
    label: '삭제하기',
    dialogTitle: '삭제하시겠습니까?',
    dialogMessage: '삭제하면 다시 되돌릴 수 없습니다.',
    onClick: () => console.log('Delete action'),
  },
];
