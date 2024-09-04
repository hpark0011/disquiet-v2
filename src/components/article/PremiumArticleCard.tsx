'use client';

import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import PostCardHeader from '../post-card/PostCardHeader';
import LinkedProduct from './LinkedProduct'; // Import the LinkedProduct component
import Tags from './Tags'; // Import the Tags component

interface PremiumArticleCardProps {
  article: Article;
}

const PremiumArticleCard: React.FC<PremiumArticleCardProps> = ({ article }) => (
  <div className='group w-full pr-2 max-w-[640px]'>
    <div className='relative flex flex-row mx-auto p-6 w-full h-[240px] rounded-2xl items-center bg-gradient-to-r from-gray-950 to-gray-500 text-white shadow-none hover:shadow-xl cursor-pointer animate-glimmer'>
      <div className='flex justify-center flex-col h-full w-full space-y-3'>
        <span className='absolute top-4 left-4 text-xs w-fit font-medium py-[3px] px-2 bg-[#ffffff20] rounded-md'>
          Sponsored
        </span>
        <PostCardHeader article={article} className='dark' />
        <h2 className='text-xl font-semibold flex items-center'>
          {article.title}
        </h2>
        <div className='flex flex-row items-center gap-2 h-[16px] w-full'>
          <div className='flex flex-row items-center gap-2 w-full'>
            {article.linkedProduct && (
              <LinkedProduct
                logo={article.linkedProduct.logo}
                title={article.linkedProduct.title}
                className='dark'
              />
            )}
            <Tags tags={article.tags} /> {/* Use the Tags component */}
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
