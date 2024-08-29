import React from 'react';
import Icon from '@/components/Icon';

interface SectionHeaderProps {
  icon: string;
  label: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, label }) => {
  return (
    <div className='flex items-center gap-1 mb-2'>
      <Icon name={icon} className='w-4 h-4' />
      <label className='text-xs text-gray-500'>{label}</label>
    </div>
  );
};

export default SectionHeader;
