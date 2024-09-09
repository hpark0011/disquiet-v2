import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfileHeaderProps } from '@/types/profile';
import React from 'react';
const UserAvatar: React.FC<ProfileHeaderProps> = ({ profile }) => (
  <Avatar className='w-22 h-22'>
    <AvatarImage
      src={profile.avatar}
      alt={profile.name}
      className='rounded-full'
    />
    <AvatarFallback className='bg-primary flex items-center justify-center w-22 h-22 rounded-full text-xl'>
      {profile.name[0]}
    </AvatarFallback>
  </Avatar>
);
export default UserAvatar;
