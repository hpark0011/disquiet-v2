'use client';
import React from 'react';
import FeedTabs, { TabValue } from '@/components/feed-tabs';
import MainFeed from './components/MainFeed';

export default function HomePage() {
  const handleTabChange = (newTab: TabValue) => {
    console.log('Tab changed to:', newTab);
  };

  return (
    <div className='max-w-[680px] mx-auto p-4 space-y-8'>
      <FeedTabs activeTab={'전체'} onTabChange={handleTabChange} />
      <MainFeed />
    </div>
  );
}
