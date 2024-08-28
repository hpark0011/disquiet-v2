import React from 'react';
import Layout from './components/Layout';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default LandingLayout;
