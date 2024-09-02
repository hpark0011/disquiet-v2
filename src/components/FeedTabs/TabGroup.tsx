import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

export type TabValue = '전체' | '로그' | '프로덕트' | '아티클';

interface TabOption {
  value: TabValue;
  label: string;
  route: string;
}

interface TabGroupProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
}

const tabOptions: TabOption[] = [
  { value: '전체', label: '전체', route: '/' },
  { value: '로그', label: '로그', route: '/logs' },
  { value: '프로덕트', label: '프로덕트', route: '/products' },
  { value: '아티클', label: '아티클', route: '/articles' },
];

const TabItem: React.FC<{ tab: TabOption; isLast: boolean }> = React.memo(
  ({ tab, isLast }) => (
    <>
      <TabsTrigger className='h-7 rounded-[6px]' value={tab.value}>
        {tab.label}
      </TabsTrigger>
      {!isLast && <div className='w-px h-3 bg-divider-secondary mx-0.5' />}
    </>
  )
);

TabItem.displayName = 'TabItem';

const TabGroup: React.FC<TabGroupProps> = React.memo(
  ({ activeTab, onTabChange }) => {
    const router = useRouter();

    const handleTabChange = (value: string) => {
      const newTab = value as TabValue;
      const selectedTab = tabOptions.find((tab) => tab.value === newTab);

      if (selectedTab) {
        onTabChange(newTab);
        router.push(selectedTab.route);
      }
    };

    return (
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className='w-full max-w-[400px]'
      >
        <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
          {tabOptions.map((tab, index) => (
            <TabItem
              key={tab.value}
              tab={tab}
              isLast={index === tabOptions.length - 1}
            />
          ))}
        </TabsList>
      </Tabs>
    );
  }
);

TabGroup.displayName = 'TabGroup';

export default TabGroup;
