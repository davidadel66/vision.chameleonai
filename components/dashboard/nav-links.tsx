'use client';

import clsx from 'clsx';
import {
  CryptoIcon,
  ScreenerIcon,
  EventsIcon,
  HomeIcon,
} from '@/components/dashboard/icons'


interface NavLinksProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const links = [
  {
    name: 'Overview',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Screener',
    href: '/dashboard/screener',
    icon: ScreenerIcon
  },
  {
    name: 'Crypto',
    href: '/dashboard/crypto',
    icon: CryptoIcon
  },
  {
    name: 'Events',
    href: '/dashboard/events',
    icon: EventsIcon
  }
];

export default function NavLinks({ activeTab, onTabChange }: NavLinksProps) {
  return (
    <div className="space-y-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = activeTab === link.name.toLowerCase();
        return (
          <div key={link.name} className="relative group">
            <button
              onClick={() => onTabChange(link.name.toLowerCase())}
              className={clsx(
                'flex items-center justify-center h-20 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300',
                {
                  'bg-white/20 text-white': isActive,
                },
              )}
            >
              {LinkIcon && (
                <LinkIcon className="w-16 h-16" />
              )}
            </button>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {link.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
