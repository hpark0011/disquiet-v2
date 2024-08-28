import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NewPostOption {
  href: string;
  icon: string;
  label: string;
}

interface NewPostButtonProps {
  expanded: boolean;
  options: NewPostOption[];
  onOpenChange: (open: boolean) => void;
  onClick: () => void;
}

const NewPostButton: React.FC<NewPostButtonProps> = React.memo(
  ({ expanded, options, onOpenChange, onClick }) => (
    <DropdownMenu onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          className={`w-full justify-start transition-all duration-300 ease-in-out ${
            expanded ? 'px-3' : 'px-2'
          }`}
          variant='default'
        >
          <Icon
            name='plus'
            className='w-7 h-7 min-w-[28px] min-h-[28px] flex-shrink-0'
          />
          <span
            className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
              expanded ? 'w-auto opacity-100' : 'w-0 opacity-0'
            }`}
          >
            New Post
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem key={option.href} onClick={onClick}>
            <Link href={option.href} className='flex items-center w-full'>
              <Icon
                name={option.icon}
                className='w-7 h-7 min-w-[28px] min-h-[28px] mr-2'
              />
              {option.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
);

NewPostButton.displayName = 'NewPostButton';

export default NewPostButton;
