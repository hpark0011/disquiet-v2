import React from 'react';
import RightBanners from './components/RightBanners';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import BackgroundColorSetter from './components/BackgroundColorSetter';

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
