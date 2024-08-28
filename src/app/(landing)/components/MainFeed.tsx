import React from 'react';
import Icon from '@/components/Icon';

const MainFeed = () => {
  return (
    <div className='flex-grow bg-white p-4'>
      <h1 className='text-2xl font-bold mb-4'>Maker Log Feed</h1>
      <div className='bg-gray-100 p-4 mb-4 rounded'>
        <div className='flex items-center mb-2'>
          <Icon name='user' className='h-8 w-8 mr-2' />
          <h3 className='font-bold'>User1</h3>
        </div>
        <p className='mb-2'>Just launched a new feature for my app!</p>
        <div className='flex space-x-4'>
          <button className='flex items-center text-gray-600'>
            <Icon name='heart' className='h-5 w-5 mr-1' />
            Like
          </button>
          <button className='flex items-center text-gray-600'>
            <Icon name='message-circle' className='h-5 w-5 mr-1' />
            Comment
          </button>
          <button className='flex items-center text-gray-600'>
            <Icon name='share' className='h-5 w-5 mr-1' />
            Share
          </button>
        </div>
      </div>
      {/* Add more feed items here */}
    </div>
  );
};

export default MainFeed;
