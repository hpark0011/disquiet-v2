import React from 'react';
import FeedTabs from '@/components/FeedTabs';
import MainFeed from './components/MainFeed';

export default function HomePage() {
  return (
    <div className='max-w-[680px] mx-auto p-4 space-y-8'>
      <FeedTabs />
      <MainFeed />
    </div>
  );
}
