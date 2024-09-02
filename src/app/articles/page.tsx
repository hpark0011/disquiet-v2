import React from 'react';
import ArticleFeed from '@/components/ArticleFeed';
import FeedTabs from '@/components/FeedTabs';

export default function ArticlesPage() {
  return (
    <div className='max-w-4xl mx-auto p-4 space-y-8'>
      <FeedTabs />
      <ArticleFeed />
    </div>
  );
}
