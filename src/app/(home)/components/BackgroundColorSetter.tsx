'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const BackgroundColorSetter = () => {
  const pathname = usePathname();

  useEffect(() => {
    const isProfilePage = pathname.startsWith('/profile');
    const backgroundColor = isProfilePage
      ? 'var(--color-background-secondary)'
      : 'var(--color-background-primary)';

    document.body.style.backgroundColor = backgroundColor;

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [pathname]);

  return null;
};

export default BackgroundColorSetter;
