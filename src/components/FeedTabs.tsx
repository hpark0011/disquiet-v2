'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';

const FeedTabs = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-sm'>
      <Tabs defaultValue='전체' className='w-full max-w-[400px]'>
        <TabsList>
          <TabsTrigger value='전체'>전체</TabsTrigger>
          <TabsTrigger value='로그'>로그</TabsTrigger>
          <TabsTrigger value='프로덕트'>프로덕트</TabsTrigger>
          <TabsTrigger value='아티클'>아티클</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className='flex items-center space-x-4'>
        <Tabs defaultValue='인기' className='w-[200px]'>
          <TabsList>
            <TabsTrigger value='인기'>인기</TabsTrigger>
            <TabsTrigger value='최신'>최신</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button variant='primary' size='sm' className='flex items-center'>
          <Icon name='plus' className='w-4 h-4 mr-2' />새 글 쓰기
        </Button>
      </div>
    </div>
  );
};

export default FeedTabs;
