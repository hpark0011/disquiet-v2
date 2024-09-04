import React from 'react';
import Image from 'next/image';
import { Article } from '@/types/article';
import PostCardHeader from './PostCardHeader';

interface PostCardProps {
  post: Article;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // Use React.useId() to generate consistent IDs for client and server
  const commentId = React.useId();
  const repostId = React.useId();
  const likeId = React.useId();

  // Use these IDs to generate consistent "random" numbers
  const getConsistentRandomNumber = (id: string, max: number) => {
    const hash = id.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return Math.abs(hash) % max;
  };

  const commentCount = getConsistentRandomNumber(commentId, 100);
  const repostCount = getConsistentRandomNumber(repostId, 50);
  const likeCount = getConsistentRandomNumber(likeId, 200);

  return (
    <div className='bg-white rounded-lg shadow-sm p-4'>
      <PostCardHeader article={post} />
      <p className='mt-2 text-gray-800'>{post.content}</p>
      {post.featuredImage && (
        <div className='mt-4'>
          <Image
            src={post.featuredImage}
            alt='Post image'
            width={600}
            height={400}
            className='rounded-lg object-cover'
          />
        </div>
      )}
      <div className='mt-4 flex justify-between text-gray-500 text-sm'>
        <span>💬 {commentCount} Comments</span>
        <span>🔁 {repostCount} Reposts</span>
        <span>❤️ {likeCount} Likes</span>
      </div>
    </div>
  );
};

export default PostCard;
