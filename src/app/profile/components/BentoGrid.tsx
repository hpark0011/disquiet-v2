import React from 'react';
import { Profile } from '@/types/profile';
import WidgetItem from './WidgetItem';
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
  const {
    widgets,
    changeWidgetSize,
    placeholderCount,
    resizeButtons,
    getSizeClass,
  } = useWidgets();
  useSwappy();

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
          {widgets.map((widget, index) => {
            return (
              <motion.div
                key={widget.id}
                data-swapy-slot={widget.id}
                className={`${getSizeClass(
                  widget.size
                )} bg-gray-50  text-label rounded-xl text-muted font-regular`}
              >
                <WidgetItem
                  item={widget}
                  isEditMode={isEditMode}
                  resizeButtons={resizeButtons}
                  changeWidgetSize={changeWidgetSize}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BentoGrid;
