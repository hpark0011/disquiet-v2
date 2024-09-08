import React from 'react';
import { Profile } from '@/types/profile';
import WidgetItem, { WidgetItemData } from './WidgetItem';
import { Button } from '@/components/ui/button';
import { useSwappy } from '@/hooks/useSwappy';
import { useWidgets } from '@/hooks/useWidgets';
import { AnimatePresence, motion } from 'framer-motion';
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
  useSwappy();
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
        className='swapy-container grid grid-cols-4 gap-2'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '120px',
        }}
      >
        <AnimatePresence>
          {items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                data-swapy-slot={item.id}
                className='bg-gray-50 text-label rounded-xl text-muted font-regular'
                style={{
                  gridColumn: `span ${item.colSpan || 1}`,
                  gridRow: `span ${item.rowSpan || 1}`,
                }}
              >
                <WidgetItem item={item} isEditMode={isEditMode} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BentoGrid;
