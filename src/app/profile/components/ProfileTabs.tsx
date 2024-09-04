import React from 'react';
import TabGroup, { TabOption } from '@/components/ui/TabGroup';

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: TabOption[] = [
    { value: 'posts', label: 'Posts' },
    { value: 'replies', label: 'Replies' },
    { value: 'articles', label: 'Articles' },
    { value: 'media', label: 'Media' },
    { value: 'likes', label: 'Likes' },
  ];

  return (
    <TabGroup
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      className='w-full'
      tabClassName='capitalize'
    />
  );
};

export default ProfileTabs;
