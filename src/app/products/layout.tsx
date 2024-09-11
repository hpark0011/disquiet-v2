'use client';
import React from 'react';
import LeftSidebar from '@/components/home/left-sidebar/LeftSidebar';
import BackgroundColorSetter from '@/components/home/BackgroundColorSetter';
import FeedTabs from '@/components/feed-tabs';
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const activeTab = pathname?.includes('/articles') ? 'articles' : 'all';

  const handleTabChange = (newTab: string) => {
    if (newTab === 'articles') {
      router.push('/articles');
    } else {
      router.push('/');
    }
  };
  return (
    <>
      <BackgroundColorSetter />
      <div className='flex min-h-screen'>
        <LeftSidebar />
        <div className='flex-grow ml-[72px] transition-all duration-300 ease-in-out pt-4'>
          <FeedTabs activeTab={activeTab} onTabChange={handleTabChange} />
          <main className='flex-grow'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
