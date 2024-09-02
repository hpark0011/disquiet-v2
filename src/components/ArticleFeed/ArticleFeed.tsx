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
    <div className='max-w-3xl mx-auto py-8 flex flex-col items-center'>
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          <ArticleCard article={article} />
          {index < articles.length - 1 && (
            <div className='my-4 h-[1px] w-full bg-divider-secondary max-w-[640px]' />
          )}
        </React.Fragment>
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
