import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type TabValue = '전체' | '로그' | '프로덕트' | '아티클';

interface TabOption {
  value: TabValue;
  label: string;
}

interface TabGroupProps {
  activeTab: TabValue;
  onTabChange: (value: TabValue) => void;
}

const tabOptions: TabOption[] = [
  { value: '전체', label: '전체' },
  { value: '로그', label: '로그' },
  { value: '프로덕트', label: '프로덕트' },
  { value: '아티클', label: '아티클' },
];

export const TabGroup: React.FC<TabGroupProps> = React.memo(
  ({ activeTab, onTabChange }) => (
    <Tabs
      value={activeTab}
      onValueChange={(value: string) => onTabChange(value as TabValue)}
      className='w-full max-w-[400px]'
    >
      <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
        {tabOptions.map((tab, index) => (
          <React.Fragment key={tab.value}>
            {index > 0 && <div className='w-px h-3 bg-gray-300 mx-0.5' />}
            <TabsTrigger
              className='h-7 rounded-[6px] text-muted'
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          </React.Fragment>
        ))}
      </TabsList>
    </Tabs>
  )
);

TabGroup.displayName = 'TabGroup';
