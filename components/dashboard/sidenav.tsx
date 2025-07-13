import NavLinks from '@/components/dashboard/nav-links';

import { Dispatch, SetStateAction } from 'react';

interface SideNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function SideNav({ activeTab, onTabChange }: SideNavProps) {
  return (
    <div className="relative">
      <div className="w-20 h-full">
        <div className="w-20 h-full bg-blue-500/10 backdrop-blur-lg border border-white/10">
          <div className="flex flex-col h-full p-2">
            <nav className="flex-1 flex items-center">
              <div className="w-full">
                <NavLinks activeTab={activeTab} onTabChange={onTabChange} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
