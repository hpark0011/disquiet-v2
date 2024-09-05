'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import PostCardHeader from '../post-card/PostCardHeader';
import LinkedProduct from './LinkedProduct';
import Tags from './Tags';

interface ArticleCardProps {
  article: Article;
  isProfileContent?: boolean; // New prop
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isProfileContent = false,
}) => (
  <div
    className={`max-w-[680px] flex flex-row mx-auto p-4 rounded-2xl space-x-4 items-center ${
      isProfileContent
        ? 'bg-white hover:bg-gray-50'
        : 'bg-home-feed hover:bg-gray-50'
    } border-transparent shadow-none cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out`}
  >
    <div className='flex items justify-center flex-col'>
      {/* header */}
      <PostCardHeader post={article} postType='article' />
      {/* body */}
      <h2 className='text-base font-semibold text-black mb-2'>
        {article.title}
      </h2>
      <p className='text-sm font-normal text-secondary mb-2 line-clamp-3'>
        {article.content}
      </p>
      {/* footer */}
      <div className='flex flex-row items-center gap-3'>
        {article.linkedProduct && (
          <LinkedProduct
            logo={article.linkedProduct.logo}
            title={article.linkedProduct.title}
          />
        )}
        <Tags tags={article.tags} />
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
