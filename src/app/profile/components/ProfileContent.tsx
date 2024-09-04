import React from 'react';
import PostCard from '@/components/post-card/PostCard';
import ArticleCard from '@/components/article-feed/ArticleCard';
import { dummyArticles } from '@/data/dummyArticles';

interface ProfileContentProps {
  activeTab: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className='space-y-4'>
            {dummyArticles.slice(0, 3).map((article) => (
              <PostCard key={article.id} post={article} />
            ))}
          </div>
        );
      case 'articles':
        return (
          <div className='space-y-4'>
            {dummyArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        );
      default:
        return <p>No content available for this tab.</p>;
    }
  };

  return <div className='mt-4'>{renderContent()}</div>;
};

export default ProfileContent;
