import React from 'react';
import TabGroup, { TabOption } from '@/components/TabGroup';
import Icon from '@/components/Icon';

export type SortValue = '인기' | '최신';

interface SortOptionsProps {
  activeSort: SortValue;
  onSortChange: (value: SortValue) => void;
}

const sortOptions: TabOption[] = [
  { value: '인기', label: '인기' },
  { value: '최신', label: '최신' },
];

export const SortOptions: React.FC<SortOptionsProps> = React.memo(
  ({ activeSort, onSortChange }) => (
    <div className='flex items-center gap-[6px]'>
      <Icon name='arrow.up.arrow.down' className='w-4 h-4' />
      <TabGroup
        tabs={sortOptions}
        activeTab={activeSort}
        onTabChange={(value) => onSortChange(value as SortValue)}
        variant='fit'
        size='md'
        className='h-fit rounded-lg'
        tabClassName='px-2'
      />
    </div>
  )
);

SortOptions.displayName = 'SortOptions';
