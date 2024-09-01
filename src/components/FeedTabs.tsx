'use client';

import React, { useState, useCallback } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';

type TabValue = '전체' | '로그' | '프로덕트' | '아티클';
type SortValue = '인기' | '최신';

interface TabOption {
  value: TabValue;
  label: string;
}

interface SortOption {
  value: SortValue;
  label: string;
}

const tabOptions: TabOption[] = [
  { value: '전체', label: '전체' },
  { value: '로그', label: '로그' },
  { value: '프로덕트', label: '프로덕트' },
  { value: '아티클', label: '아티클' },
];

const sortOptions: SortOption[] = [
  { value: '인기', label: '인기' },
  { value: '최신', label: '최신' },
];

const FeedTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabValue>('전체');
  const [activeSort, setActiveSort] = useState<SortValue>('인기');

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value as TabValue);
  }, []);

  const handleSortChange = useCallback((value: string) => {
    setActiveSort(value as SortValue);
  }, []);

  const handleNewPost = useCallback(() => {
    // Implement new post logic here
    console.log('Creating new post');
  }, []);

  return (
    <div className='max-w-[680px] mx-auto p-4'>
      <div className='flex items-center justify-between p-1 border border-gray-200 rounded-xl'>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className='w-full max-w-[400px]'
        >
          <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
            {tabOptions.map((tab, index) => (
              <React.Fragment key={tab.value}>
                {index > 0 && <div className='w-px h-3 bg-gray-300 mx-0.5' />}
                <TabsTrigger className='h-7 rounded-[6px]' value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              </React.Fragment>
            ))}
          </TabsList>
        </Tabs>

        <div className='flex items-center space-x-2'>
          <div className='flex items-center gap-[6px]'>
            <Icon name='arrow.up.arrow.down' className='w-4 h-4' />
            <Tabs value={activeSort} onValueChange={handleSortChange}>
              <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
                {sortOptions.map((sort, index) => (
                  <React.Fragment key={sort.value}>
                    {index > 0 && (
                      <div className='w-px h-3 bg-gray-300 mx-0.5' />
                    )}
                    <TabsTrigger
                      className='h-7 rounded-[6px] px-2'
                      value={sort.value}
                    >
                      {sort.label}
                    </TabsTrigger>
                  </React.Fragment>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <Button
            variant='primary'
            size='sm'
            className='flex items-center'
            onClick={handleNewPost}
          >
            <Icon name='plus' className='w-4 h-4 mr-2' />새 글 쓰기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedTabs;
