'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  CryptoIcon,
  ScreenerIcon, 
  EventsIcon,
  HomeIcon,
} from '@/components/dashboard/icons'


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

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="space-y-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'relative flex items-center h-20 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300',
              {
                'bg-white/20 text-white': pathname === link.href,
              },
            )}
          >
            {LinkIcon && (
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <LinkIcon className="w-12 h-12" />
              </div>
            )}
            <span className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {link.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
