import React from 'react';
import { Button } from '@/components/ui/button';

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = ['posts', 'replies', 'articles', 'media', 'likes'];

  return (
    <div className='flex space-x-2 border-b'>
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant='ghost'
          className={`capitalize ${
            activeTab === tab ? 'border-b-2 border-blue-500' : ''
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default ProfileTabs;
