import React from 'react';
import PostCard from '@/components/post-card/PostCard';
import ArticleFeed from '@/components/article/ArticleFeed';
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
          <div className='space-y-[48px]'>
            {dummyLogs.map((log) => (
              <PostCard key={log.id} post={log} />
            ))}
          </div>
        );
      case 'articles':
        return <ArticleFeed articles={dummyArticles} isProfileContent={true} />;
      default:
        return <p>No content available for this tab.</p>;
    }
  };

  return <div className='mt-4'>{renderContent()}</div>;
};

export default ProfileContent;
