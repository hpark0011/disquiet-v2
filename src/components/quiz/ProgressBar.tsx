import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const isComplete = progress === 100;

  return (
    <div className='bg-gradient-to-r from-transparent via-gray-200 to-transparent h-0.5 top-[-2px] relative overflow-hidden'>
      <motion.div
        className='h-0.5 absolute left-0 top-0 overflow-hidden'
        style={{
          width: `${progress}%`,
          background: isComplete
            ? 'linear-gradient(to right, transparent, #6d55ff 50%, transparent)'
            : 'linear-gradient(to right, transparent, #6d55ff)',
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-[#EDEDEF] to-transparent'
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeIn',
          }}
          style={{ width: '100%' }}
        />
      </motion.div>
    </div>
  );
};

export default ProgressBar;
