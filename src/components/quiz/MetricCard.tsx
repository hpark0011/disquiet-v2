import React from 'react';
import { formatPercentage } from '@/utils/formatters';

interface MetricCardProps {
  label: string;
  count: number;
  growth: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, count, growth }) => {
  return (
    <div className='flex flex-col border border-gray-100 rounded-xl p-3'>
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
      <span className='text-xl font-semibold text-left'>{count}</span>
    </div>
  );
};

export default MetricCard;