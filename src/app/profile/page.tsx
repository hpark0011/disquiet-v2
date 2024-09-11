'use client';
import React, { useState } from 'react';

import { dummyProfile } from '@/data/profileData';
import BentoGrid from '@/components/profile/widgets/BentoGrid';
import ProfileTabs from '@/components/profile/ProfileTabs';
import ProfileContent from '@/components/profile/ProfileContent';
import { Profile } from '@/types/profile';
import ProfileHeader from '@/components/profile/profile-header/ProfileHeader';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <div className='max-w-[680px] mx-auto p-4 space-y-8 pb-[120px]'>
      <ProfileHeader profile={dummyProfile} />
      <BentoGrid
        profile={dummyProfile}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
      <div className='my-8'>
        <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <ProfileContent activeTab={activeTab} />
    </div>
  );
}
