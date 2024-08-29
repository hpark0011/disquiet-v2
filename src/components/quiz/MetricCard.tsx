import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPercentage } from '@/utils/formatters';

interface MetricCardProps {
  label: string;
  count: number;
  growth: number;
  highlight?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  count,
  growth,
  highlight,
}) => {
  const [prevCount, setPrevCount] = useState(count);
  const [isIncreasing, setIsIncreasing] = useState(false);

  useEffect(() => {
    if (count !== prevCount) {
      setIsIncreasing(count > prevCount);
      setPrevCount(count);
    }
  }, [count, prevCount]);

  const highlightColor = growth >= 0 ? 'bg-green-50' : 'bg-red-50';

  return (
    <div
      className={`flex flex-col border border-gray-100 rounded-xl p-2 px-[10px] transition-all duration-300 ${
        highlight ? highlightColor : ''
      }`}
    >
      <div className='flex justify-between items-center mb-2'>
        <span className='text-xs font-medium text-gray-500'>{label}</span>
        <span
          className={`text-sm ${
            growth >= 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {formatPercentage(growth)}
        </span>
      </div>
      <div className='h-[24px] relative'>
        {' '}
        {/* Fixed height container */}
        <AnimatePresence mode='wait'>
          <motion.span
            key={count}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`text-xl font-medium text-left text-black absolute`}
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MetricCard;
