'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className='max-w-2xl flex flex-row mx-auto p-6 rounded-lg space-x-8 items-center'>
    <div className='flex items justify-center flex-col'>
      <div className='flex items-center mb-4'>
        <Avatar>
          {/* @ts-ignore */}
          <AvatarImage src={article.author.avatar} alt={article.author.name} />
          <AvatarFallback>avatar</AvatarFallback>
        </Avatar>
        <div className='ml-2'>
          <p className='text-base font-semibold text-black'>
            {article.author.name}
          </p>
          <p className='text-sm text-gray-500'>
            {article.author.role} · {article.timestamp}
          </p>
        </div>
      </div>
      <h2 className='text-base font-semibold text-black mb-2'>
        {article.title}
      </h2>
      <p className='text-sm font-normal text-secondary mb-4 line-clamp-3'>
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
      <div className='w-[160px] h-[120px] flex-shrink-0'>
        <Image
          src={article.featuredImage}
          alt='Featured image'
          className='rounded-lg border border-primary object-cover w-full h-full'
          width={160}
          height={120}
        />
      </div>
    )}
  </div>
);

export default ArticleCard;
