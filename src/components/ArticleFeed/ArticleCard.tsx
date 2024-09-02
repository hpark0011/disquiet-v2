'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
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

export default ArticleCard;
