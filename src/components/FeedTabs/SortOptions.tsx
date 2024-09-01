import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/Icon';

export type SortValue = '인기' | '최신';

interface SortOption {
  value: SortValue;
  label: string;
}

interface SortOptionsProps {
  activeSort: SortValue;
  onSortChange: (value: SortValue) => void;
}

const sortOptions: SortOption[] = [
  { value: '인기', label: '인기' },
  { value: '최신', label: '최신' },
];

export const SortOptions: React.FC<SortOptionsProps> = React.memo(
  ({ activeSort, onSortChange }) => (
    <div className='flex items-center gap-[6px]'>
      <Icon name='arrow.up.arrow.down' className='w-4 h-4' />
      <Tabs
        value={activeSort}
        onValueChange={(value: string) => onSortChange(value as SortValue)}
      >
        <TabsList className='bg-[#EEEEF0] h-fit rounded-lg'>
          {sortOptions.map((sort, index) => (
            <React.Fragment key={sort.value}>
              {index > 0 && (
                <div className='w-px h-3 bg-divider-secondary mx-0.5' />
              )}
              <TabsTrigger
                className='h-7 rounded-[6px] px-2'
                value={sort.value}
              >
                {sort.label}
              </TabsTrigger>
            </React.Fragment>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
);

SortOptions.displayName = 'SortOptions';
