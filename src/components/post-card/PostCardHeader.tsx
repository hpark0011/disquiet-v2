import { Article } from '@/types/article';
import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';
import Image from 'next/image';

const PostCardHeader = ({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) => {
  return (
    <div className={`flex items-center mb-2 ${className}`}>
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
        <p className='text-label font-semibold text-primary'>
          {article.author.name}
        </p>
        <p className='text-label text-tertiary'>
          {article.author.role} <span className='text-divider-tertiary'>·</span>{' '}
          {article.timestamp}
        </p>
      </div>
    </div>
  );
};

export default PostCardHeader;
