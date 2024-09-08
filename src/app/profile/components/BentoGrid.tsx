import React from 'react';
import { Profile } from '@/types/profile';
import WidgetItem, { WidgetItemData } from './WidgetItem';
import { Button } from '@/components/ui/button';
import { useWidgets } from '@/hooks/useWidgets';
interface BentoGridProps {
  profile: Profile;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const BentoGrid: React.FC<BentoGridProps> = ({
  profile,
  isEditMode,
  setIsEditMode,
}) => {
  const { widgets, changeWidgetSize, placeholderCount } = useWidgets();
  const [items, setItems] = React.useState<WidgetItemData[]>([
    {
      id: 'item-1',
      type: 'skills',
      content: 'Skills',
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 'item-2',
      type: 'project',
      content: 'Current Project',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'item-3',
      type: 'github',
      content: 'GitHub Activity',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'item-4',
      type: 'availability',
      content: 'Availability Status',
      colSpan: 1,
      rowSpan: 1,
    },
    {
      id: 'item-5',
      type: 'articles',
      content: 'Recent Articles',
      colSpan: 2,
      rowSpan: 1,
    },
    {
      id: 'item-6',
      type: 'playlist',
      content: 'Current Playlist',
      colSpan: 1,
      rowSpan: 1,
    },
  ]);

  return (
    <div className='my-8'>
      <Button
        variant={'outline'}
        size='sm'
        onClick={() => setIsEditMode(!isEditMode)}
        className='mb-4'
      >
        {isEditMode ? 'Save Layout' : 'Edit Layout'}
      </Button>

      <div
        className='grid grid-cols-4 gap-2'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '120px',
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{
                gridColumn: `span ${item.colSpan || 1}`,
                gridRow: `span ${item.rowSpan || 1}`,
              }}
            >
              <WidgetItem item={item} isEditMode={isEditMode} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BentoGrid;
