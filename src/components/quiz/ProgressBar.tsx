import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className='bg-gradient-to-r from-transparent via-gray-200 to-transparent h-0.5 relative overflow-hidden rounded-t-lg'>
      <motion.div
        className='bg-gradient-to-r from-transparent to-[#6d55ff] h-0.5 absolute left-0 top-0 overflow-hidden'
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-[#E0DBFF] to-transparent'
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
