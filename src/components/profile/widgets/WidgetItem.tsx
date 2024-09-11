import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { CardSize, WidgetCard } from '@/types/widget';

interface WidgetItemProps {
  item: WidgetCard;
  isEditMode: boolean;
  resizeButtons: {
    id: string;
    iconName: string;
    size: CardSize;
  }[];
  changeWidgetSize: (id: string, newSize: CardSize) => void;
}

const WidgetItem: React.FC<WidgetItemProps> = ({
  item,
  isEditMode,
  resizeButtons,
  changeWidgetSize,
}) => {
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
          {resizeButtons.map((button) => {
            return (
              <Button
                key={button.id}
                variant='icon'
                size='icon'
                onClick={() => {
                  changeWidgetSize(item.id, button.size);
                }}
              >
                <Icon name={button.iconName} />
              </Button>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default WidgetItem;
