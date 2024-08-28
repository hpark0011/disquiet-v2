import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const LeftSidebar = () => {
  return (
    <div className='text-gray-900 p-4 w-64 flex flex-col h-full'>
      <div className='mb-6'>
        <Logo />
      </div>
      <nav className='flex-grow'>
        <ul>
          <li className='mb-2'>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/'>
                <Icon name='house' className='h-5 w-5 mr-2' />
                Home
              </Link>
            </Button>
          </li>
          <li className='mb-2'>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/marketplace'>
                <Icon name='briefcase.fill' className='h-5 w-5 mr-2' />
                Product Marketplace
              </Link>
            </Button>
          </li>
          <li className='mb-2'>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/maker-log'>
                <Icon name='doc.richtext.fill' className='h-5 w-5 mr-2' />
                Maker Log
              </Link>
            </Button>
          </li>
          <li className='mb-2'>
            <Button variant='ghost' className='w-full justify-start' asChild>
              <Link href='/profile'>
                <Icon name='person.crop.circle.fill' className='h-5 w-5 mr-2' />
                My Profile
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div className='mt-4'>
        <Button className='w-full' variant='default'>
          <Icon name='plus' className='h-5 w-5 mr-2' />
          New Post
        </Button>
      </div>
      <div className='mt-auto pt-4'>
        <Button variant='ghost' className='w-full justify-start'>
          <Avatar className='h-8 w-8 mr-2'>
            <AvatarImage src='/avatar.png' alt='User' />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          User Name
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
