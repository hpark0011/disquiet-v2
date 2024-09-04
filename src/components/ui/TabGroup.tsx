'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface TabOption {
  value: string;
  label: string;
  urlSlug?: string;
}

interface TabGroupProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
  tabClassName?: string;
}

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  tabClassName = '',
}) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className={className}>
      <TabsList className='bg-tab-list h-fit rounded-lg'>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.value}>
            {index > 0 && (
              <div className='w-px h-3 bg-divider-secondary mx-0.5' />
            )}
            <TabsTrigger
              className={`h-7 rounded-[6px] ${tabClassName}`}
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          </React.Fragment>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabGroup;
