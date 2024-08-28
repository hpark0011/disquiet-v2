'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Icon from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type NavItem = {
  href: string;
  icon: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: '/', icon: 'house', label: 'Home' },
  { href: '/search', icon: 'magnifying.glass', label: 'Search' },
  { href: '/notifications', icon: 'bell', label: 'Notifications' },
  { href: '/inbox', icon: 'paperplane', label: 'Inbox' },
  { href: '/directory', icon: 'person.2.fill', label: 'User Directory' },
];

const NewPostOptions = [
  { href: '/new-log', icon: 'doc.richtext.fill', label: 'New Log' },
  { href: '/new-article', icon: 'doc.fill', label: 'New Article' },
];

const NavButton: React.FC<
  NavItem & { expanded: boolean; onClick: () => void }
> = ({ href, icon, label, expanded, onClick }) => (
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
);

const LeftSidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => {
    if (!dropdownOpen) {
      setExpanded(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
      setDropdownOpen(false);
    }
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed left-0 top-0 text-gray-900 p-4 flex flex-col h-screen transition-all duration-300 ease-in-out ${
        expanded || dropdownOpen ? 'w-[196px]' : 'w-[72px]'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex-shrink-0 mb-6 flex w-fit ml-1'>
        <Logo />
      </div>
      <div className='flex-grow flex flex-col justify-center'>
        <nav>
          <ul className='space-y-2'>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavButton
                  {...item}
                  expanded={expanded || dropdownOpen}
                  onClick={handleNavClick}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className='mt-4'>
          <DropdownMenu onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                className={`w-full justify-start transition-all duration-300 ease-in-out ${
                  expanded || dropdownOpen ? 'px-3' : 'px-2'
                }`}
                variant='default'
              >
                <Icon
                  name='plus'
                  className='w-7 h-7 min-w-[28px] min-h-[28px] flex-shrink-0'
                />
                <span
                  className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                    expanded || dropdownOpen
                      ? 'w-auto opacity-100'
                      : 'w-0 opacity-0'
                  }`}
                >
                  New Post
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {NewPostOptions.map((option) => (
                <DropdownMenuItem key={option.href} onClick={handleNavClick}>
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
        </div>
      </div>
      <div className='flex-shrink-0 mt-auto pt-4 flex flex-start'>
        <Button
          variant='ghost'
          className='w-full justify-center'
          onClick={handleNavClick}
        >
          <Avatar className='h-8 w-8'>
            <AvatarImage src='/avatar.png' alt='User' />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          {(expanded || dropdownOpen) && (
            <span className='ml-3 whitespace-nowrap overflow-hidden'>
              User Name
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
};

export default LeftSidebar;
