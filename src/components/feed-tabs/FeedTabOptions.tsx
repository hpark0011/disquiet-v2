import React from 'react';
import TabGroup, { TabOption } from '@/components/ui/TabGroup';
import { useRouter } from 'next/navigation';

export type TabValue = '전체' | '로그' | '프로덕트' | '아티클';

interface TabGroupProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
}

const tabOptions: TabOption[] = [
  { value: '전체', label: '전체', urlSlug: '' },
  { value: '로그', label: '로그', urlSlug: 'logs' },
  { value: '프로덕트', label: '프로덕트', urlSlug: 'products' },
  { value: '아티클', label: '아티클', urlSlug: 'articles' },
];

const FeedTabOptions: React.FC<TabGroupProps> = React.memo(
  ({ activeTab, onTabChange }) => {
    const router = useRouter();

    const handleTabChange = (value: string) => {
      const newTab = value as TabValue;
      const selectedTab = tabOptions.find((tab) => tab.value === newTab);

      if (selectedTab) {
        onTabChange(newTab);
        const route = selectedTab.urlSlug || '';
        router.push(`/${route}`);
      }
    };

    return (
      <TabGroup
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        variant='full'
        size='md'
        className='max-w-[400px]'
      />
    );
  }
);

FeedTabOptions.displayName = 'FeedTabOptions';

export default FeedTabOptions;
