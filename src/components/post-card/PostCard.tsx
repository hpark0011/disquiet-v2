import React from 'react';
import Link from 'next/link';
import { Log } from '@/types/log';
import PostCardHeader from './PostCardHeader';
import PostCardBody from './PostCardBody';

const PostCard = ({ post }: { post: Log }) => {
  return (
    <Link href={`/logs/${post.id}`} className='flex flex-col relative'>
      <PostCardHeader post={post} postType='log' />
      <PostCardBody log={post} />
    </Link>
  );
};

export default PostCard;
