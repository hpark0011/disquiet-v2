'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Article } from '@/types/article';
import { dummyArticles } from '@/data/dummyArticles';
import ArticleCard from './ArticleCard';

const ArticleFeed: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(dummyArticles);

  const loadMoreArticles = () => {
    // In a real application, this would fetch more articles from an API
    console.log('Load more articles');
  };

  return (
    <div className='max-w-3xl mx-auto py-8'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      <div className='text-center mt-8'>
        <Button variant='outline' onClick={loadMoreArticles}>
          Load More
        </Button>
      </div>
    </div>
  );
};

export default ArticleFeed;
