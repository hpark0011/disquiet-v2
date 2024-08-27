import React from 'react';

const MainFeed = () => {
  return (
    <div className='flex-grow bg-white p-4'>
      <h1 className='text-2xl font-bold mb-4'>Maker Log Feed</h1>
      {/* Add feed items here */}
      <div className='bg-gray-100 p-4 mb-4 rounded'>
        <h3 className='font-bold'>User1</h3>
        <p>Just launched a new feature for my app!</p>
      </div>
      <div className='bg-gray-100 p-4 mb-4 rounded'>
        <h3 className='font-bold'>User2</h3>
        <p>Looking for beta testers for my new project.</p>
      </div>
    </div>
  );
};

export default MainFeed;
