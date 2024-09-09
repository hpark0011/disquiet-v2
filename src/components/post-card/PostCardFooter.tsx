import React from 'react';
import PostCardFooterItem from './PostCardFooterItem';
import { PostCardFooterProps, FooterItemProps } from '@/types/post-card';

const PostCardFooter: React.FC<PostCardFooterProps> = ({
  views,
  upvotes,
  comments,
  reposts,
}) => {
  const footerItems: FooterItemProps[] = [
    { icon: 'bubble.left.fill', value: comments },
    { icon: 'arrowshape.turn.up.right.fill', value: reposts },
    { icon: 'upvote', value: upvotes },
    { icon: 'waveform.path.ecg', value: views },
  ];

  return (
    <div className='flex items-center justify-between mt-4 w-full'>
      {footerItems.map((item, index) => (
        <PostCardFooterItem key={index} icon={item.icon} value={item.value} />
      ))}
    </div>
  );
};

export default PostCardFooter;
