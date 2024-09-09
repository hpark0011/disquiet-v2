import React from 'react';
import PostCardFooter from './PostCardFooter';
import Image from 'next/image';
import { Log } from '@/types/log';

const PostCardBody = ({ log }: { log: Log }) => {
  return (
    <div className='flex flex-col pl-[36px] -top-[8px] relative'>
      <div className='bg-white rounded-post-card shadow-post-card-light p-4'>
        <p className='text-sm text-primary'>{log.content}</p>
        {log.featuredImage && (
          <div className='mt-4'>
            <Image
              src={log.featuredImage}
              alt='Post image'
              width={600}
              height={400}
              className='rounded-2xl object-cover'
            />
          </div>
        )}
        <PostCardFooter
          views={log.views}
          upvotes={log.upvotes}
          comments={log.commentCount}
          reposts={log.repostCount}
        />
      </div>
    </div>
  );
};

export default PostCardBody;
