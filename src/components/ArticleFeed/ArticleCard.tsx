'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className='max-w-2xl flex flex-row mx-auto p-6  rounded-lg'>
    <div className='flex items justify-center flex-col'>
      <div className='flex items-center mb-4'>
        <Image
          src={article.author.avatar}
          alt={article.author.name}
          width={36}
          height={36}
          className='rounded-full'
        />
        <div className='ml-2'>
          <p className='text-base font-semibold text-black'>
            {article.author.name}
          </p>
          <p className='text-sm text-gray-500'>
            {article.author.role} · {article.timestamp}
          </p>
        </div>
      </div>
      <h2 className='text-2xl font-bold text-black mb-3'>{article.title}</h2>
      <p className='text-base text-gray-700 mb-4 line-clamp-3'>
        {article.content}
      </p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {article.tags.map((tag) => (
          <span
            key={tag}
            className='bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
    {article.featuredImage && (
      <Image
        src={article.featuredImage}
        alt='Featured image'
        width={160}
        height={120}
        className='rounded-lg border border-gray-200'
      />
    )}
  </div>
);

export default ArticleCard;
