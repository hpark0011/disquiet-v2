import React from 'react';
import TabGroup, { TabOption } from '@/components/ui/TabGroup';

export type TabValue = 'all' | 'logs' | 'products' | 'articles';

interface TabGroupProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
}

export const tabOptions: TabOption[] = [
  { value: 'all', label: '전체', urlSlug: '' },
  { value: 'logs', label: '로그', urlSlug: 'logs', isNew: true },
  { value: 'products', label: '프로덕트', urlSlug: 'products' },
  { value: 'articles', label: '아티클', urlSlug: 'articles' },
];

const FeedTabOptions: React.FC<TabGroupProps> = React.memo(
  ({ activeTab, onTabChange }) => {
    const handleTabChange = (value: string) => {
      const newTab = value as TabValue;
      onTabChange(newTab);
    };

    return (
      <TabGroup
        tabs={tabOptions}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        variant='fit'
        size='md'
        className='max-w-[400px]'
      />
    );
  }
);

FeedTabOptions.displayName = 'FeedTabOptions';

export default FeedTabOptions;
