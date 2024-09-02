'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className='max-w-[680px] flex flex-row mx-auto p-4 rounded-2xl space-x-8 items-center bg-transparent border border-transparent shadow-none hover:bg-gray-50 hover:border hover:border-primary cursor-pointer hover:shadow-xl transition-all duration-300'>
    <div className='flex items justify-center flex-col'>
      <div className='flex items-center mb-2'>
        <Avatar className='w-6 h-6'>
          {/* @ts-ignore */}
          {/* <AvatarImage src={article.author.avatar} alt={article.author.name} /> */}
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            className='rounded-full w-full h-full object-cover'
          />
          {/* <AvatarFallback>avatar</AvatarFallback> */}
        </Avatar>
        <div className='ml-2 flex items-center space-x-2'>
          <p className='text-sm font-semibold text-black'>
            {article.author.name}
          </p>
          <p className='text-sm text-tertiary'>
            {article.author.role}{' '}
            <span className='text-divider-tertiary'>·</span> {article.timestamp}
          </p>
        </div>
      </div>
      <h2 className='text-base font-semibold text-black mb-2'>
        {article.title}
      </h2>
      <p className='text-sm font-normal text-secondary mb-2 line-clamp-3'>
        {article.content}
      </p>
      <div className='flex flex-wrap gap-2'>
        {article.tags.map((tag) => (
          <span key={tag} className='text-link text-sm rounded'>
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
          className='rounded-xl border border-primary object-cover w-full h-full'
          width={160}
          height={120}
        />
      </div>
    )}
  </div>
);

export default ArticleCard;
