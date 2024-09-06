'use client';

import React from 'react';
import ArticleFeed from '@/components/article';
import { dummyArticles } from '@/data/dummyArticles';

export default function ArticlesPage() {
  return (
    <div className='max-w-[680px] mx-auto mb-20'>
      <ArticleFeed articles={dummyArticles} />
    </div>
  );
}
