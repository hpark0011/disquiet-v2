import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface LinkedProductProps {
  logo: string | StaticImageData; // Adjusted type
  title: string;
  className?: string;
}

const LinkedProduct: React.FC<LinkedProductProps> = ({
  logo,
  title,
  className,
}) => (
  <div
    className={`flex text-post-header-meta flex-row items-center gap-[6px] ${className}`}
  >
    <Image
      src={logo}
      alt={title}
      className='w-6 h-6 rounded-lg bg-white border-primary border-[1px]'
    />
    <p className='text-label text-primary font-medium'>{title}</p>
  </div>
);

export default LinkedProduct;
