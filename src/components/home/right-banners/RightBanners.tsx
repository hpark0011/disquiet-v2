import React from 'react';
import Image from 'next/image';

const RightBanners = () => {
  return (
    <div className='p-4 w-64'>
      <h2 className='font-bold mb-4'>Featured Products</h2>
      <div className='bg-white p-2 mb-2 rounded shadow'>
        <Image
          src='/product1.jpg'
          alt='Product 1'
          width={200}
          height={100}
          className='mb-2'
        />
        <h3 className='font-bold'>Product 1</h3>
        <p className='text-sm text-gray-600'>
          A brief description of Product 1
        </p>
      </div>
      <div className='bg-white p-2 mb-2 rounded shadow'>
        <Image
          src='/product2.jpg'
          alt='Product 2'
          width={200}
          height={100}
          className='mb-2'
        />
        <h3 className='font-bold'>Product 2</h3>
        <p className='text-sm text-gray-600'>
          A brief description of Product 2
        </p>
      </div>
      <div className='bg-white p-2 mb-2 rounded shadow'>
        <Image
          src='/product3.jpg'
          alt='Product 3'
          width={200}
          height={100}
          className='mb-2'
        />
        <h3 className='font-bold'>Product 3</h3>
        <p className='text-sm text-gray-600'>
          A brief description of Product 3
        </p>
      </div>
    </div>
  );
};

export default RightBanners;
