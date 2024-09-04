import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Profile } from '@/types/profile';

interface ProfileHeaderProps {
  profile: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <section className='flex items-start p-8'>
      <div className='flex flex-col'>
        <h1 className='text-lg font-semibold'>{profile.name}</h1>
        <p className='text-gray-600'>{profile.username}</p>
        <p className='mt-2 text-sm'>{profile.bio}</p>
        <div className='flex items-center gap-[12px] mt-2'>
          <p className='text-label text-tertiary'>
            {profile.following}
            <span className='ml-[6px]'>팔로잉</span>
          </p>
          <p className='text-label text-tertiary'>
            {profile.followers}
            <span className='ml-[6px]'>팔로워</span>
          </p>
        </div>

        <div className='mt-4 space-x-2'>
          <Button variant='primary' size='sm'>
            팔로우
          </Button>
          <Button variant='secondary' size='sm'>
            커버지
          </Button>
        </div>
      </div>
      <Avatar className='w-20 h-20'>
        <AvatarImage src={profile.avatar} alt={profile.name} />
        <AvatarFallback className='bg-primary flex items-center justify-center w-[88px] h-[88px] rounded-full text-xl'>
          {profile.name[0]}
        </AvatarFallback>
      </Avatar>
    </section>
  );
};

export default ProfileHeader;
