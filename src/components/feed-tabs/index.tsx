'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import TabGroup, { TabValue } from './FeedTabOptions';
import { SortOptions, SortValue } from './SortOptions';
import { NewPostButton } from './NewPostButton';
import { tabOptions } from './FeedTabOptions';
import {
  openNewLogModal,
  openNewProductModal,
  openNewArticleModal,
} from '../../utils/modalHelpers';

const FeedTabs: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabValue>('all');
  const [activeSort, setActiveSort] = useState<SortValue>('인기');

  useEffect(() => {
    const path = pathname.split('/')[1];
    switch (path) {
      case 'logs':
        setActiveTab('logs');
        break;
      case 'products':
        setActiveTab('products');
        break;
      case 'articles':
        setActiveTab('articles');
        break;
      default:
        setActiveTab('all');
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

  const getNewPostConfig = useCallback(() => {
    switch (activeTab) {
      case 'logs':
      case 'all':
        return { label: '새 로그', action: openNewLogModal };
      case 'products':
        return { label: '새 프로덕트', action: openNewProductModal };
      case 'articles':
        return { label: '새 아티클', action: openNewArticleModal };
      default:
        return { label: '새 글 쓰기', action: () => {} };
    }
  }, [activeTab]);

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
          <NewPostButton config={getNewPostConfig()} />
        </div>
      </div>
    </div>
  );
};

export default FeedTabs;
