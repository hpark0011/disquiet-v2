import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserProfileButtonProps {
  expanded: boolean;
  onClick: () => void;
  userName: string;
  avatarSrc: string;
}

const UserProfileButton: React.FC<UserProfileButtonProps> = React.memo(
  ({ expanded, onClick, userName, avatarSrc }) => (
    <Button variant='ghost' className='w-full justify-center' onClick={onClick}>
      <Avatar className='h-[44px] w-[44px]'>
        <AvatarImage src={avatarSrc} alt={userName} />
        <AvatarFallback className='bg-primary w-[44px] h-[44px] flex items-center justify-center'>
          {userName[0]}
        </AvatarFallback>
      </Avatar>
      {expanded && (
        <span className='ml-3 whitespace-nowrap overflow-hidden'>
          {userName}
        </span>
      )}
    </Button>
  )
);

UserProfileButton.displayName = 'UserProfileButton';

export default UserProfileButton;
