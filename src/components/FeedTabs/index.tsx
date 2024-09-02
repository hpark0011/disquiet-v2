'use client';

import React, { useState, useCallback } from 'react';
import TabGroup, { TabValue } from './TabGroup';
import { SortOptions, SortValue } from './SortOptions';
import { NewPostButton } from './NewPostButton';

const FeedTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabValue>('전체');
  const [activeSort, setActiveSort] = useState<SortValue>('인기');

  const handleTabChange = useCallback((value: TabValue) => {
    setActiveTab(value);
  }, []);

  const handleSortChange = useCallback((value: SortValue) => {
    setActiveSort(value);
  }, []);

  const handleNewPost = useCallback(() => {
    // Implement new post logic here
    console.log('Creating new post');
  }, []);

  return (
    <div className='max-w-[680px] mx-auto'>
      <div className='flex items-center justify-between p-1 border border-gray-200 rounded-xl'>
        <TabGroup activeTab={activeTab} onTabChange={handleTabChange} />
        <div className='flex items-center space-x-2'>
          <SortOptions
            activeSort={activeSort}
            onSortChange={handleSortChange}
          />
          <NewPostButton onClick={handleNewPost} />
        </div>
      </div>
    </div>
  );
};

export default FeedTabs;
