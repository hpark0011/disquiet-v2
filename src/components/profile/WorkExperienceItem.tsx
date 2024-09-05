import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProfileSection from './ProfileSection';

interface WorkExperienceItemProps {
  period: string;
  title: string;
  description: string;
  skills: string[];
  products: string[];
  teamSize: number;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  period,
  title,
  description,
  skills,
  products,
  teamSize,
}) => {
  return (
    <div className='flex flex-col space-y-6'>
      <ProfileSection
        label={period}
        content={
          <div className='flex flex-col w-full'>
            <h3 className='text-sm font-medium text-primary'>{title}</h3>
            <p className='text-sm mt-2 text-tertiary'>{description}</p>
          </div>
        }
        alignTop
      />
      <ProfileSection
        label='스택'
        content={
          <div className='flex gap-2 flex-wrap'>
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant='secondary'
                className='bg-primary text-primary'
              >
                {skill}
              </Badge>
            ))}
          </div>
        }
      />
      <ProfileSection
        label='프로덕트'
        content={
          <div>
            {products.map((product, index) => (
              <span key={index} className='font-semibold text-sm mr-2'>
                {product}
              </span>
            ))}
          </div>
        }
      />
      <ProfileSection
        label='팀원'
        content={
          <div className='flex space-x-[2px] overflow-hidden'>
            {Array.from({ length: teamSize }, (_, index) => (
              <Avatar
                key={index}
                className='border-2 border-background w-[32px] h-[32px]'
              >
                <AvatarImage
                  src={`/placeholder.svg?height=32&width=32`}
                  alt={`Team member ${index + 1}`}
                />
                <AvatarFallback className='bg-primary flex items-center justify-center w-[88px] h-[88px] rounded-full text-xl text-primary'>
                  T
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default WorkExperienceItem;
