import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightBanners from './components/RightBanners';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex gap-8 min-h-screen'>
      <LeftSidebar />
      {children}
      <RightBanners />
    </div>
  );
};

export default layout;
