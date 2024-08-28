'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const [error, setError] = useState(false);

  if (error) {
    console.error(`Failed to load icon: ${name}`);
    return null;
  }

  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      width={24}
      height={24}
      className={`icon ${className}`}
      onError={() => setError(true)}
    />
  );
};

export default Icon;
