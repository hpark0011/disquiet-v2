'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Logo from '../Logo';
import NavMenu from './NavMenu';
import NewPostButton from './NewPostButton';
import UserProfileButton from './UserProfileButton';
import Link from 'next/link';

const navItems = [
  { href: '/', icon: 'house', label: 'Home' },
  { href: '/search', icon: 'magnifying.glass', label: 'Search' },
  { href: '/notifications', icon: 'bell', label: 'Notifications' },
  { href: '/inbox', icon: 'paperplane', label: 'Inbox' },
  { href: '/directory', icon: 'person.2.fill', label: 'User Directory' },
];

const newPostOptions = [
  { href: '/new-log', icon: 'doc.richtext.fill', label: 'New Log' },
  { href: '/new-article', icon: 'doc.fill', label: 'New Article' },
];

const LeftSidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => setExpanded(true), []);
  const handleMouseLeave = useCallback(() => {
    if (!dropdownOpen) {
      setExpanded(false);
    }
  }, [dropdownOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
      setDropdownOpen(false);
    }
  }, []);

  const handleNavClick = useCallback(() => {
    setExpanded(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

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
        <NavMenu
          items={navItems}
          expanded={expanded || dropdownOpen}
          onItemClick={handleNavClick}
        />
        <div className='mt-4'>
          <NewPostButton
            expanded={expanded || dropdownOpen}
            options={newPostOptions}
            onOpenChange={setDropdownOpen}
            onClick={handleNavClick}
          />
        </div>
      </div>
      <div className='flex-shrink-0 mt-auto pt-4 flex flex-start'>
        <Link href='/profile'>
          <UserProfileButton
            expanded={expanded || dropdownOpen}
            onClick={handleNavClick}
            userName='User Name'
            avatarSrc='/avatar.png'
          />
        </Link>
      </div>
    </aside>
  );
};

export default LeftSidebar;
