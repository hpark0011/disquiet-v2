'use client';

import { useEffect } from 'react';

const BackgroundColorSetter = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f7';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return null;
};

export default BackgroundColorSetter;
