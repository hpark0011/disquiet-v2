import React from 'react';
import RightBanners from '@/app/(home)/components/RightBanners';
import LeftSidebar from '@/app/(home)/components/LeftSidebar/LeftSidebar';
import BackgroundColorSetter from '@/app/(home)/components/BackgroundColorSetter';
import FeedTabs from '@/components/feed-tabs';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundColorSetter />
      <div className='flex min-h-screen bg-home-feed-bg'>
        <LeftSidebar />
        <div className='flex-grow ml-[72px] transition-all duration-300 ease-in-out'>
          <main className='flex-grow'>{children}</main>
        </div>
        <RightBanners />
      </div>
    </>
  );
};

export default Layout;
