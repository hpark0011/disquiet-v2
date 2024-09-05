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
          <div>
            <h3 className='text-lg font-semibold'>{institution}</h3>
            <p className='text-sm font-medium'>{degree}</p>
            <p className='text-sm mt-1'>{description}</p>
          </div>
        }
        alignTop
      />
    </div>
  );
};

export default EducationItem;
