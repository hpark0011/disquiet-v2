'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';

const FeedTabs = () => {
  return (
    <div className=' max-w-[680px] mx-auto p-4'>
      <div className='flex items-center justify-between p-1 border-gray-200 border rounded-xl'>
        <Tabs defaultValue='전체' className='w-full max-w-[400px] '>
          <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
            <TabsTrigger className='h-7 rounded-[6px]' value='전체'>
              전체
            </TabsTrigger>
            <div className='w-px h-3 bg-gray-300 mx-0.5' />
            <TabsTrigger className='h-7 rounded-[6px]' value='로그'>
              로그
            </TabsTrigger>
            <div className='w-px h-3 bg-gray-300 mx-0.5' />
            <TabsTrigger className='h-7 rounded-[6px]' value='프로덕트'>
              프로덕트
            </TabsTrigger>
            <div className='w-px h-3 bg-gray-300 mx-0.5' />
            <TabsTrigger className='h-7 rounded-[6px]' value='아티클'>
              아티클
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className='flex items-center space-x-2'>
          <div className='flex items-center gap-[6px]'>
            <Icon name='arrow.up.arrow.down' className='w-4 h-4' />
            <Tabs defaultValue='인기' className=''>
              <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
                <TabsTrigger className='h-7 rounded-[6px] px-2' value='인기'>
                  인기
                </TabsTrigger>
                <div className='w-px h-3 bg-gray-300 mx-0.5' />
                <TabsTrigger className='h-7 rounded-[6px] px-2' value='최신'>
                  최신
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Button variant='primary' size='sm' className='flex items-center'>
            <Icon name='plus' className='w-4 h-4 mr-2' />새 글 쓰기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedTabs;
