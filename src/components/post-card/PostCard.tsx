import React from 'react';
import Image from 'next/image';
import { Log } from '@/types/log';
import PostCardHeader from './PostCardHeader';
import PostCardFooter from './PostCardFooter';

interface PostCardProps {
  post: Log;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className='flex flex-col relative'>
      <PostCardHeader post={post} postType='log' /> {/* body */}
      <div className='flex flex-col pl-[36px] -top-[8px] relative'>
        <div className='bg-white rounded-post-card shadow-post-card-light p-4'>
          <p className='text-sm text-primary'>{post.content}</p>
          {post.featuredImage && (
            <div className='mt-4'>
              <Image
                src={post.featuredImage}
                alt='Post image'
                width={600}
                height={400}
                className='rounded-2xl object-cover'
              />
            </div>
          )}
          <PostCardFooter
            views={post.views}
            upvotes={post.upvotes}
            comments={post.commentCount}
            reposts={post.repostCount}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
