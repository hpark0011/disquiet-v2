'use client';
import React, { useState } from 'react';

import { dummyProfile } from '@/data/profileData';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabs from './components/ProfileTabs';
import ProfileContent from './components/ProfileContent';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <div className='max-w-[680px] mx-auto p-4 space-y-8 pb-[120px]'>
      <ProfileHeader profile={dummyProfile} />
      <div className='my-8'>
        <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <ProfileContent activeTab={activeTab} />
    </div>
  );
}
