'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import RightBanners from './components/RightBanners';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import BackgroundColorSetter from './components/BackgroundColorSetter';
import FeedTabs from '@/components/feed-tabs';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = pathname?.includes('/articles') ? '아티클' : '전체';

  const handleTabChange = (newTab: string) => {
    if (newTab === '아티클') {
      router.push('/articles');
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <BackgroundColorSetter />
      <div className='flex min-h-screen bg-home-feed-bg'>
        <LeftSidebar />
        <div className='flex-grow ml-[72px] transition-all duration-300 ease-in-out'>
          <div className='max-w-[680px] mx-auto p-4 space-y-8'>
            <FeedTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <main className='flex-grow'>{children}</main>
          </div>
        </div>
        <RightBanners />
      </div>
    </>
  );
};

export default Layout;
