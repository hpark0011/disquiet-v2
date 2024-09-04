import { Article } from '@/types/article';
import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';
import Image from 'next/image';

interface PostCardHeaderProps {
  article: Article;
  className?: string;
  postType: 'article' | 'log';
}

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  article,
  className,
  postType,
}) => {
  const avatarSize = postType === 'article' ? 'w-7 h-7' : 'w-9 h-9';
  const alignmentClass =
    postType === 'article' ? 'items-center' : 'items-start';
  const marginClass = postType === 'article' ? 'mb-2' : 'mb-0';

  return (
    <div className={`flex ${alignmentClass} ${marginClass} ${className}`}>
      <Avatar className={avatarSize}>
        <Image
          src={article.author.avatar}
          alt={article.author.name}
          width={postType === 'article' ? 28 : 36}
          height={postType === 'article' ? 28 : 36}
          className='rounded-full w-full h-full object-cover'
        />
      </Avatar>
      <div className='ml-2 flex gap-2'>
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
