import React from 'react';

interface ProfileSectionProps {
  label: string;
  content: React.ReactNode;
  alignTop?: boolean;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  label,
  content,
  alignTop = false,
}) => {
  return (
    <div className={`flex ${alignTop ? 'items-start' : 'items-center'}`}>
      <span className='text-sm text-muted w-[120px] shrink-0'>{label}</span>
      <div className='flex-1'>{content}</div>
    </div>
  );
};

export default ProfileSection;
