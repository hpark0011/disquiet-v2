import React from 'react';
import Image from 'next/image';
import Logo from './Logo';

const LeftSidebar = () => {
  return (
    <div className='text-white p-4 w-64'>
      <div className='mb-6'>
        <Logo />
      </div>
      <h2 className='font-bold mb-4'>Menu</h2>
      <ul>
        <li className='mb-2'>Home</li>
        <li className='mb-2'>Product Marketplace</li>
        <li className='mb-2'>Maker Log</li>
        <li className='mb-2'>My Profile</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
