'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Article } from '@/types/article';
import { dummyArticles } from '@/data/dummyArticles';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className='border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow'>
    <div className='flex items-center mb-4'>
      <Image
        src={article.author.avatar}
        alt={article.author.name}
        width={40}
        height={40}
        className='rounded-full mr-3'
      />
      <div>
        <p className='font-semibold'>{article.author.name}</p>
        <p className='text-sm text-gray-500'>{article.author.role}</p>
      </div>
      <p className='text-sm text-gray-400 ml-auto'>{article.timestamp}</p>
    </div>
    <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
    <p className='text-gray-600 mb-4'>{article.content.substring(0, 150)}...</p>
    <div className='flex flex-wrap gap-2 mb-4'>
      {article.tags.map((tag) => (
        <span
          key={tag}
          className='text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full'
        >
          #{tag}
        </span>
      ))}
    </div>
    {article.featuredImage && (
      <Image
        src={article.featuredImage}
        alt='Featured image'
        width={600}
        height={300}
        className='rounded-lg w-full object-cover'
      />
    )}
  </div>
);

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
