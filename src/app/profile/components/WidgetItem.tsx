import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';

export interface WidgetItemData {
  id: string;
  type: string;
  content: string;
  colSpan?: number;
  rowSpan?: number;
}

interface WidgetItemProps {
  item: WidgetItemData;
  isEditMode: boolean;
}

const WidgetItem: React.FC<WidgetItemProps> = ({ item, isEditMode }) => {
  const jiggleVariants = {
    jiggle: {
      rotate: [0, -1, 1, -1, 1, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
    static: {
      rotate: 0,
    },
  };

  const resizeButtons = [
    {
      id: '1x1',
      iconName: 'square',
    },
    {
      id: '2x1',
      iconName: 'rectangle',
    },
    {
      id: '1x2',
      iconName: 'rectangle.portrait',
    },
    {
      id: '2x2',
      iconName: 'square.large',
    },
  ];

  return (
    <motion.div
      className={`bg-primary flex text-label p-3 py-2 rounded-xl text-muted font-regular ${
        isEditMode ? 'cursor-grab' : ''
      } w-full h-full`}
      variants={jiggleVariants}
      // animate={isEditMode ? 'jiggle' : 'static'}
      style={{
        opacity: 1,
      }}
      data-swapy-item={item.id}
    >
      {item.content}
      {isEditMode && (
        <div className='absolute inset-x-0 bottom-1 z-10 p-[2px] m-auto bg-black/80   shadow-lg rounded-lg flex flex-row w-fit h-fit backdrop-blur-[20px]'>
          {resizeButtons.map((button) => (
            <Button key={button.id} variant='icon' size='icon'>
              <Icon name={button.iconName} />
            </Button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default WidgetItem;
