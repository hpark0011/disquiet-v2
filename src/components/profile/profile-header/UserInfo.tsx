import { ProfileHeaderProps } from '@/types/profile';
import React from 'react';

const UserInfo: React.FC<ProfileHeaderProps> = ({ profile }) => (
  <div className='mb-2'>
    <div className='flex items-baseline gap-3'>
      <h1 className='text-lg font-semibold'>{profile.name}</h1>
      <p className='text-sm text-tertiary'>{profile.username}</p>
    </div>
    <p className='mt-1.5 text-sm'>{profile.bio}</p>
  </div>
);

export default UserInfo;
