import React from 'react';
import PostCard from '@/components/post-card/PostCard';
import ArticleFeed from '@/components/article/ArticleFeed';
import { dummyArticles } from '@/data/dummyArticles';
import { dummyLogs } from '@/data/dummyLogs';
import AboutSection from '@/components/profile/AboutSection';

interface ProfileContentProps {
  activeTab: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className='space-y-[48px] px-4'>
            {dummyLogs.map((log) => (
              <PostCard key={log.id} post={log} />
            ))}
          </div>
        );
      case 'articles':
        return <ArticleFeed articles={dummyArticles} isProfileContent={true} />;
      case 'about':
        return <AboutSection />;
      default:
        return (
          <div className='space-y-[48px] px-4'>
            <p>No content available for this tab.</p>
          </div>
        );
    }
  };

  return <div className='mt-4'>{renderContent()}</div>;
};

export default ProfileContent;
