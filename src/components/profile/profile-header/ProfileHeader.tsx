import React from 'react';
import { ProfileHeaderProps } from '@/types/profile';
import UserInfo from './UserInfo';
import UserStats from './UserStats';
import ActionButtons from './ActionButtons';
import UserAvatar from './UserAvatar';

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <section className='flex items-center justify-between pt-12 pb-8 px-4'>
      <div className='flex flex-col'>
        <UserInfo profile={profile} />
        <UserStats profile={profile} />
        <ActionButtons />
      </div>
      <UserAvatar profile={profile} />
    </section>
  );
};

export default ProfileHeader;
