'use client';
import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabs from './components/ProfileTabs';
import ProfileContent from './components/ProfileContent';
import { dummyProfile } from '@/data/profileData';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <div className='max-w-[680px] mx-auto p-4 space-y-8'>
      <ProfileHeader profile={dummyProfile} />
      <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <ProfileContent activeTab={activeTab} />
    </div>
  );
}
