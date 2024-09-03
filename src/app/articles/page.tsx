'use client';
import React, { useState } from 'react';
import ArticleFeed from '@/components/article-feed';
import FeedTabs, { TabValue } from '@/components/feed-tabs';

export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (newTab: TabValue) => {
    setActiveTab(newTab);
  };

  return (
    <div className='max-w-4xl mx-auto p-4 space-y-8'>
      <FeedTabs activeTab={'아티클'} onTabChange={handleTabChange} />
      <ArticleFeed />
    </div>
  );
}
