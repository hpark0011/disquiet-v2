import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfileHeaderProps } from '@/types/profile';
import React from 'react';
const UserAvatar: React.FC<ProfileHeaderProps> = ({ profile }) => (
  <Avatar className='w-[88px] h-[88px]'>
    <AvatarImage
      src={profile.avatar}
      alt={profile.name}
      className='rounded-full w-full h-full'
    />
    <AvatarFallback className='bg-primary flex w-full h-full items-center justify-center rounded-full text-xl'>
      {profile.name[0]}
    </AvatarFallback>
  </Avatar>
);
export default UserAvatar;
