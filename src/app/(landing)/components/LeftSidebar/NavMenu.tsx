import React from 'react';
import NavButton from './NavButton';

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

interface NavMenuProps {
  items: NavItem[];
  expanded: boolean;
  onItemClick: () => void;
}

const NavMenu: React.FC<NavMenuProps> = React.memo(
  ({ items, expanded, onItemClick }) => (
    <nav>
      <ul className='space-y-2'>
        {items.map((item) => (
          <li key={item.href}>
            <NavButton {...item} expanded={expanded} onClick={onItemClick} />
          </li>
        ))}
      </ul>
    </nav>
  )
);

NavMenu.displayName = 'NavMenu';

export default NavMenu;
