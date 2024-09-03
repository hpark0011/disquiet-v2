import React from 'react';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => (
  <div className='flex flex-wrap gap-2'>
    {tags.map((tag) => (
      <span key={tag} className='text-link text-post-meta rounded'>
        #{tag}
      </span>
    ))}
  </div>
);

export default Tags;
