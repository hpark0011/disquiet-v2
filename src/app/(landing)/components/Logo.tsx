import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='block max-w-[72px]'>
      <Image
        src='/logo.svg'
        alt='Logo'
        width={34}
        height={29}
        className='mx-auto'
      />
    </Link>
  );
};

export default Logo;
