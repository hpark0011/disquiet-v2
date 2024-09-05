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
  <div className='flex items-center w-full  justify-center rounded-[6px] cursor-pointer bg-white transition-all duration-300 ease-in-out hover:bg-primary-button-hover'>
    <Icon name={icon} className='w-[22px] h-[22px]' />
    <span className='ml-1 text-label text-muted'>{value}</span>
  </div>
);

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
        <FooterItem key={index} icon={item.icon} value={item.value} />
      ))}
    </div>
  );
};

export default PostCardFooter;
