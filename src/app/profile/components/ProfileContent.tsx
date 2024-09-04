import React from 'react';
import PostCard from '@/components/post-card/PostCard';
import ArticleCard from '@/components/article/ArticleCard';
import { dummyArticles } from '@/data/dummyArticles';
import { dummyLogs } from '@/data/dummyLogs';

interface ProfileContentProps {
  activeTab: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className='space-y-4'>
            {dummyLogs.map((log) => (
              <PostCard key={log.id} post={log} />
            ))}
          </div>
        );
      case 'articles':
        return (
          <div className='space-y-4'>
            {dummyArticles.map((article) => (
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
