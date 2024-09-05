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
            <h3 className='text-sm font-medium text-primary'>{institution}</h3>
            <p className='text-sm mt-2 text-tertiary'>{degree}</p>
            <p className='text-sm mt-2'>{description}</p>
          </div>
        }
        alignTop
      />
    </div>
  );
};

export default EducationItem;
