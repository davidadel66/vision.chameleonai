'use client';

import clsx from 'clsx';
import {
  CryptoIcon,
  ScreenerIcon,
  EventsIcon,
  HomeIcon,
} from '@/components/dashboard/icons';

interface NavLinksProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const links = [
  {
    name: 'Overview',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Screener',
    href: '/dashboard/screener',
    icon: ScreenerIcon,
  },
  {
    name: 'Crypto',
    href: '/dashboard/crypto',
    icon: CryptoIcon,
  },
  {
    name: 'Events',
    href: '/dashboard/events',
    icon: EventsIcon,
  },
];

export default function NavLinks({ activeTab, onTabChange }: NavLinksProps) {
  return (
    <div className="space-y-3">
      {links.map(link => {
        const LinkIcon = link.icon;
        const isActive = activeTab === link.name.toLowerCase();
        return (
          <div key={link.name} className="relative group">
            <button
              onClick={() => onTabChange(link.name.toLowerCase())}
              className={clsx(
                'flex items-center justify-center w-full rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105',
                {
                  'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/20':
                    isActive,
                  'text-white/70 hover:bg-white/10 hover:text-white hover:shadow-md backdrop-blur-sm':
                    !isActive,
                }
              )}
            >
              {LinkIcon && <LinkIcon className="w-24 h-18" />}
            </button>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 px-3 py-2 bg-black/80 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 border border-white/10">
              {link.name}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/80 rotate-45 border-l border-b border-white/10"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
