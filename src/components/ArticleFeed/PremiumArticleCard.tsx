'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface PremiumArticleCardProps {
  article: Article;
}

const PremiumArticleCard: React.FC<PremiumArticleCardProps> = ({ article }) => (
  <div className='group w-full pr-2 max-w-[640px]'>
    <div className='relative flex flex-row mx-auto p-6 w-full h-[240px] rounded-2xl items-center bg-gradient-to-r from-gray-950 to-gray-500 text-white shadow-none hover:shadow-xl cursor-pointer animate-glimmer'>
      <div className='flex justify-center flex-col h-full w-full space-y-3'>
        <span className='absolute top-4 left-4 text-xs w-fit font-medium py-[6px] px-2 bg-[#ffffff15] rounded-lg'>
          Sponsored
        </span>
        <div className='flex items-center'>
          <Avatar className='w-6 h-6'>
            <AvatarImage
              // @ts-ignore
              src={article.author.avatar}
              alt={article.author.name}
            />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
          <div className='ml-2 flex items-center space-x-2'>
            <p className='text-sm font-semibold'>{article.author.name}</p>
            <p className='text-sm'>
              {article.author.role}{' '}
              <span className='text-divider-tertiary'>·</span>{' '}
              {article.timestamp}
            </p>
          </div>
        </div>
        <h2 className='text-xl font-semibold flex items-center'>
          {article.title}
        </h2>
        {/* <p className='text-sm font-normal mb-2 line-clamp-3'>{article.content}</p> */}
        <div className='flex flex-row items-center gap-2 h-[16px] w-full'>
          <div className='flex flex-row items-center gap-2 w-full'>
            {article.tags.map((tag) => (
              <div key={tag} className='flex flex-row items-center'>
                <span className='text-link text-sm rounded'>#{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {article.featuredImage && (
        <div className='relative w-[280px] h-[210px] flex-shrink-0 translate-x-[44px] -ml-2'>
          <Image
            src={article.featuredImage}
            alt='Featured image'
            className='rounded-2xl object-cover w-full h-full shadow-premium-article-image'
          />
        </div>
      )}
    </div>
  </div>
);

export default PremiumArticleCard;
