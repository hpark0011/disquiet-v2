import React from 'react';
import Icon from '@/components/Icon';

interface PostCardFooterProps {
  views: number;
  upvotes: number;
  comments: number;
  reposts: number;
}

interface FooterItemProps {
  icon: string;
  value: number;
}

const FooterItem: React.FC<FooterItemProps> = ({ icon, value }) => (
  <div className='flex items-center'>
    <Icon name={icon} className='w-5 h-5 text-gray-500' />
    <span className='ml-1 text-sm text-gray-500'>{value}</span>
  </div>
);

const PostCardFooter: React.FC<PostCardFooterProps> = ({
  views,
  upvotes,
  comments,
  reposts,
}) => {
  const footerItems: FooterItemProps[] = [
    { icon: 'waveform.path.ecg', value: views },
    { icon: 'upvote', value: upvotes },
    { icon: 'bubble.left.fill', value: comments },
    { icon: 'arrowshape.turn.up.right.fill', value: reposts },
  ];

  return (
    <div className='flex items-center justify-between mt-4'>
      {footerItems.map((item, index) => (
        <FooterItem key={index} icon={item.icon} value={item.value} />
      ))}
    </div>
  );
};

export default PostCardFooter;
