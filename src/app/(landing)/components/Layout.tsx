import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightBanners from './RightBanners';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-white shadow-sm p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Disquiet</h1>
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'>
              <Icon name='bell' className='h-6 w-6' />
            </Button>
            <Button variant='ghost' size='icon'>
              <Icon name='paperplane' className='h-6 w-6' />
            </Button>
            <Button variant='ghost' className='flex items-center'>
              <Icon name='person.crop.circle.fill' className='h-6 w-6 mr-2' />
              Profile
            </Button>
          </div>
        </div>
      </header>
      <div className='flex flex-1'>
        <LeftSidebar />
        <main className='flex-grow'>{children}</main>
        <RightBanners />
      </div>
    </div>
  );
};

export default Layout;
