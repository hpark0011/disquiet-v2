import React from 'react';
import LeftSidebar from '@/app/(home)/components/LeftSidebar/LeftSidebar';
import BackgroundColorSetter from '@/app/(home)/components/BackgroundColorSetter';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundColorSetter />
      <div className='flex min-h-screen'>
        <LeftSidebar />
        <div className='flex-grow ml-[72px] transition-all duration-300 ease-in-out'>
          <main className='flex-grow'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
