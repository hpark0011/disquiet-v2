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
    { value: 'replies', label: '메이커 소개' },
    { value: 'posts', label: '로그' },
    { value: 'articles', label: '아티클' },
    { value: 'media', label: '리뷰' },
    { value: 'likes', label: '업보트' },
  ];

  return (
    <TabGroup
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      variant='full'
      size='lg'
      className='bg-primary h-fit rounded-lg'
      tabClassName='px-2'
    />
  );
};

export default ProfileTabs;
