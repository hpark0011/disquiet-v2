import React from 'react';
import ProfileSection from './ProfileSection';

interface EducationItemProps {
  period: string;
  institution: string;
  degree: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  period,
  institution,
  degree,
  description,
}) => {
  return (
    <div className='flex flex-col space-y-4'>
      <ProfileSection
        label={period}
        content={
          <div className='flex flex-col w-full'>
            <div className='flex flex-row items-baseline gap-1'>
              <p className='text-sm font-medium text-primary'>{institution}</p>
              <span className='text-sm text-tertiary'>-</span>
              <p className='text-sm text-tertiary'>{degree}</p>
            </div>
            <p className='text-sm mt-2 text-tertiary'>{description}</p>
          </div>
        }
        alignTop
      />
    </div>
  );
};

export default EducationItem;
