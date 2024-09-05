import React from 'react';
import { motion } from 'framer-motion';

export interface BentoItemData {
  id: string;
  type: string;
  content: string;
  colSpan?: number;
  rowSpan?: number;
}

interface BentoItemProps {
  item: BentoItemData;
  isEditMode: boolean;
  isDragging: boolean;
}

const BentoItem: React.FC<BentoItemProps> = ({
  item,
  isEditMode,
  isDragging,
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
      className={`bg-primary text-label p-3 py-2 rounded-xl text-muted font-regular ${
        isEditMode ? 'cursor-move' : ''
      } w-full h-full`}
      variants={jiggleVariants}
      animate={isEditMode ? 'jiggle' : 'static'}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {item.content}
    </motion.div>
  );
};

export default BentoItem;
