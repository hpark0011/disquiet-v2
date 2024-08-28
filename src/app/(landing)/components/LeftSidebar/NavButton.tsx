import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';

interface NavButtonProps {
  href: string;
  icon: string;
  label: string;
  expanded: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = React.memo(
  ({ href, icon, label, expanded, onClick }) => (
    <Button
      variant='ghost'
      className={`w-full justify-start transition-all duration-300 ease-in-out ${
        expanded ? 'px-3' : 'px-2'
      }`}
      asChild
      onClick={onClick}
    >
      <Link href={href} className='flex items-center'>
        <Icon
          name={icon}
          className='w-7 h-7 min-w-[28px] min-h-[28px] flex-shrink-0'
        />
        <span
          className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? 'w-auto opacity-100' : 'w-0 opacity-0'
          }`}
        >
          {label}
        </span>
      </Link>
    </Button>
  )
);

NavButton.displayName = 'NavButton';

export default NavButton;
