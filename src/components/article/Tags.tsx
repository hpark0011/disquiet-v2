import React from 'react';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className='flex flex-wrap gap-[6px]'>
    {tags.map((tag) => (
      <span key={tag} className='text-link text-label rounded'>
        #{tag}
      </span>
    ))}
  </div>
);

export default Tags;
