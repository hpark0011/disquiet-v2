import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import EducationItem from './EducationItem';
import { dummyWorkExperience, dummyEducation } from '@/data/dummyProfileData';

const AboutSection: React.FC = () => {
  return (
    <div className='space-y-12 px-4'>
      <section>
        <h2 className='text-sm font-medium mb-6'>이력</h2>
        <div className='space-y-12'>
          {dummyWorkExperience.map((experience, index) => (
            <React.Fragment key={experience.id}>
              <WorkExperienceItem {...experience} />
              {index < dummyWorkExperience.length - 1 && (
                <div className='flex w-full pl-[120px]'>
                  <div className='h-[1px] w-full bg-divider-primary' />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
      <div className='my-6 h-[1px] w-full bg-divider-primary' />
      <section>
        <h2 className='text-sm font-medium mb-6'>학력</h2>
        <div className='space-y-12'>
          {dummyEducation.map((edu, index) => (
            <React.Fragment key={edu.id}>
              <EducationItem {...edu} />
              {index < dummyEducation.length - 1 && (
                <div className='flex w-full pl-[120px]'>
                  <div className='h-[1px] w-full bg-divider-primary' />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
