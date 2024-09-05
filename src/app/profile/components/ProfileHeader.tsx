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
    <section className='flex items-center pt-12 pb-8 px-4'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col w-full px-1'>
          {/* user info */}
          <div className='flex items-baseline gap-[12px]'>
            <h1 className='text-lg font-semibold'>{profile.name}</h1>
            <p className='text-sm text-tertiary font-regular'>
              {profile.username}
            </p>
          </div>

          {/* user bio */}
          <p className='mt-[6px] text-sm'>{profile.bio}</p>
          {/* user stats */}
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
        </div>
        {/* buttons */}
        <div className='flex flex-row mt-4 space-x-2 items-center'>
          <Button variant='secondary' size='sm'>
            팔로우
          </Button>
          <Button variant='primary' size='sm'>
            커피챗
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='p-[6px] hover:bg-primary'
          >
            <Icon name='ellipsis' className='w-5 h-5' />
          </Button>
        </div>
      </div>
      <Avatar className='w-[88px] h-[88px]'>
        <AvatarImage
          src={profile.avatar}
          alt={profile.name}
          className='rounded-full'
        />
        <AvatarFallback className='bg-primary flex items-center justify-center w-[88px] h-[88px] rounded-full text-xl'>
          {profile.name[0]}
        </AvatarFallback>
      </Avatar>
    </section>
  );
};

export default ProfileHeader;
