import { Article } from '@/types/article';
import { Log } from '@/types/log';
import { Avatar } from '@radix-ui/react-avatar';
import React from 'react';
import Image from 'next/image';

interface PostCardHeaderProps {
  post: Article | Log;
  className?: string;
  postType: 'article' | 'log';
}

const PostCardHeader: React.FC<PostCardHeaderProps> = ({
  post,
  className,
  postType,
}) => {
  if (!post || !post.author) {
    return null; // or handle the error appropriately
  }

  const avatarSize = postType === 'article' ? 'w-7 h-7' : 'w-9 h-9';
  const alignmentClass =
    postType === 'article' ? 'items-center' : 'items-start';
  const marginClass = postType === 'article' ? 'mb-2' : 'mb-0';

  return (
    <div className={`flex ${alignmentClass} ${marginClass} ${className}`}>
      <Avatar className={avatarSize}>
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={postType === 'article' ? 28 : 36}
          height={postType === 'article' ? 28 : 36}
          className='rounded-full w-full h-full object-cover'
        />
      </Avatar>
      <div className='ml-2 flex gap-2'>
        <p className='text-label font-semibold text-primary'>
          {post.author.name}
        </p>
        <p className='text-label text-tertiary'>
          {post.author.role} <span className='text-divider-tertiary'>·</span>{' '}
          {post.timestamp}
        </p>
      </div>
    </div>
  );
};

export default PostCardHeader;
