import React from 'react';

const RightBanners = () => {
  return (
    <div className='bg-gray-100 p-4 w-64'>
      <h2 className='font-bold mb-4'>Featured Products</h2>
      {/* Add featured product banners here */}
      <div className='bg-white p-2 mb-2 rounded shadow'>Product 1</div>
      <div className='bg-white p-2 mb-2 rounded shadow'>Product 2</div>
      <div className='bg-white p-2 mb-2 rounded shadow'>Product 3</div>
    </div>
  );
};

export default RightBanners;
