import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightBanners from './RightBanners';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      <LeftSidebar />
      <div className='flex-grow ml-[72px] transition-all duration-300 ease-in-out'>
        <main className='flex-grow'>{children}</main>
      </div>
      <RightBanners />
    </div>
  );
};

export default Layout;
