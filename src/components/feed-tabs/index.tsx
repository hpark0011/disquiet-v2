'use client';

import React, { useState, useCallback } from 'react';
import TabGroup, { TabValue } from './FeedTabOptions';
import { SortOptions, SortValue } from './SortOptions';
import { NewPostButton } from './NewPostButton';

interface FeedTabsProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
}

const FeedTabs: React.FC<FeedTabsProps> = ({ activeTab, onTabChange }) => {
  const [activeSort, setActiveSort] = useState<SortValue>('인기');

  const handleSortChange = useCallback((value: SortValue) => {
    setActiveSort(value);
  }, []);

  const handleNewPost = useCallback(() => {
    // Implement new post logic here
    console.log('Creating new post');
  }, []);

  return (
    <div className='max-w-[640px] mx-auto'>
      <div className='flex items-center justify-between p-1 border border-gray-200 rounded-xl'>
        <TabGroup activeTab={activeTab} onTabChange={onTabChange} />
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
