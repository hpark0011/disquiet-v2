import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
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
    <div className='flex flex-col space-y-4'>
      <ProfileSection
        label={period}
        content={
          <div>
            <h3 className='text-lg font-semibold'>{title}</h3>
            <p className='text-sm mt-1'>{description}</p>
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
                className='bg-yellow-100 text-yellow-800'
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
              <span key={index} className='font-semibold mr-2'>
                {product}
              </span>
            ))}
          </div>
        }
      />
      <ProfileSection
        label='팀원'
        content={
          <div className='flex -space-x-2 overflow-hidden'>
            {Array.from({ length: teamSize }, (_, index) => (
              <Avatar key={index} className='border-2 border-background'>
                <AvatarImage
                  src={`/placeholder.svg?height=32&width=32`}
                  alt={`Team member ${index + 1}`}
                />
              </Avatar>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default WorkExperienceItem;
