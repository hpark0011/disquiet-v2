'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface TabOption {
  value: string;
  label: string;
  urlSlug?: string;
  isNew?: boolean;
}

interface TabGroupProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (value: string) => void;
  variant?: 'fit' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  tabClassName?: string;
}

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'fit',
  size = 'md',
  className = '',
  tabClassName = '',
}) => {
  const styleClasses = variant === 'full' ? 'w-full' : 'w-fit';
  const sizeClasses = {
    sm: 'h-6 text-xs',
    md: 'h-7 text-xs',
    lg: 'h-8 text-xs',
  }[size];

  const listRoundedClass = size === 'lg' ? 'rounded-[8px]' : 'rounded-lg';
  const triggerRoundedClass = size === 'lg' ? 'rounded-[6px]' : 'rounded-[6px]';
  const listBackgroundColor =
    variant === 'full' ? 'bg-tab-list-primary' : 'bg-tab-list-secondary';

  return (
    <Tabs
      value={activeTab}
      onValueChange={onTabChange}
      className={`${styleClasses} ${className}`}
    >
      <TabsList
        className={`${listBackgroundColor} h-fit rounded-lg ${listRoundedClass} ${className} ${styleClasses}`}
      >
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.value}>
            {index > 0 && (
              <div className='w-px h-3 bg-divider-secondary mx-0.5' />
            )}
            <TabsTrigger
              className={`rounded-[6px] ${triggerRoundedClass} ${sizeClasses} ${styleClasses} ${tabClassName} ${
                tab.isNew ? 'shadow-new-tab' : ''
              }`}
              value={tab.value}
            >
              {tab.label}
              {tab.isNew && (
                <span className='text-label absolute bg-new-tag -bottom-[30px] text-white px-[6px] py-1 rounded-[6px]'>
                  New
                </span>
              )}
            </TabsTrigger>
          </React.Fragment>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default TabGroup;
