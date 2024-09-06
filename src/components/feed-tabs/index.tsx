'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import TabGroup, { TabValue } from './FeedTabOptions';
import { SortOptions, SortValue } from './SortOptions';
import { NewPostButton } from './NewPostButton';
import { tabOptions } from './FeedTabOptions';

const FeedTabs: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabValue>('전체');
  const [activeSort, setActiveSort] = useState<SortValue>('인기');

  useEffect(() => {
    const path = pathname.split('/')[1];
    switch (path) {
      case 'logs':
        setActiveTab('로그');
        break;
      case 'products':
        setActiveTab('프로덕트');
        break;
      case 'articles':
        setActiveTab('아티클');
        break;
      default:
        setActiveTab('전체');
    }
  }, [pathname]);

  const handleTabChange = useCallback(
    (value: TabValue) => {
      setActiveTab(value);
      const selectedTab = tabOptions.find((tab) => tab.value === value);
      const route = selectedTab?.urlSlug ? `/${selectedTab.urlSlug}` : '/';
      router.push(route);
    },
    [router]
  );

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
