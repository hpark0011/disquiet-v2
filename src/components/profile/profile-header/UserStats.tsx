import { ProfileHeaderProps } from '@/types/profile';
import React from 'react';

const UserStats: React.FC<ProfileHeaderProps> = ({ profile }) => (
  <div className='flex items-center gap-3 mt-2 text-sm text-tertiary'>
    <p>
      {profile.following} <span className='ml-1.5'>팔로잉</span>
    </p>
    <p>
      {profile.followers} <span className='ml-1.5'>팔로워</span>
    </p>
  </div>
);

export default UserStats;
