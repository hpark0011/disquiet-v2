'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import PostCardHeader from '../PostCard/PostCardHeader';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className='max-w-[680px] flex flex-row mx-auto p-4 rounded-2xl space-x-4 items-center bg-[#f5f5f7] border-transparent shadow-none hover:bg-gray-50 cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out'>
    <div className='flex items justify-center flex-col'>
      <PostCardHeader article={article} />
      <h2 className='text-base font-semibold text-black mb-2'>
        {article.title}
      </h2>
      <p className='text-sm font-normal text-secondary mb-2 line-clamp-3'>
        {article.content}
      </p>
      <div className='flex flex-row items-center gap-2'>
        <div className='flex text-post-header-meta flex-row items-center gap-[6px]'>
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            className='w-6 h-6 rounded-lg'
          />
          <p className='text-post-meta text-primary font-medium'>디스콰이엇</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {article.tags.map((tag) => (
            <span key={tag} className='text-link text-post-meta rounded'>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    {article.featuredImage && (
      <div className='w-[144px] h-[108px] flex-shrink-0'>
        <Image
          src={article.featuredImage}
          alt='Featured image'
          className='rounded-xl border border-primary object-cover w-full h-full'
          width={144}
          height={108}
        />
      </div>
    )}
  </div>
);

export default ArticleCard;
