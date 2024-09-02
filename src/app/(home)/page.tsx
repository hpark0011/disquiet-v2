import React from 'react';
import FeedTabs, { TabValue } from '@/components/FeedTabs';
import MainFeed from './components/MainFeed';

export default function HomePage() {
  return (
    <div className='max-w-[680px] mx-auto p-4 space-y-8'>
      <FeedTabs
        activeTab={'전체'}
        onTabChange={function (value: TabValue): void {
          throw new Error('Function not implemented.');
        }}
      />
      <MainFeed />
    </div>
  );
}
