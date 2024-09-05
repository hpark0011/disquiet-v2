import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import EducationItem from './EducationItem';
import { dummyWorkExperience, dummyEducation } from '@/data/dummyProfileData';

const AboutSection: React.FC = () => {
  return (
    <div className='space-y-8'>
      <section>
        <h2 className='text-sm font-medium mb-12'>이력</h2>
        <div className='space-y-6'>
          {dummyWorkExperience.map((experience) => (
            <WorkExperienceItem key={experience.id} {...experience} />
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-sm font-medium mb-12'>학력</h2>
        <div className='space-y-4'>
          {dummyEducation.map((edu) => (
            <EducationItem key={edu.id} {...edu} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
