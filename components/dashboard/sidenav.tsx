import NavLinks from '@/components/dashboard/nav-links';


interface SideNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function SideNav({ activeTab, onTabChange }: SideNavProps) {
  return (
    <div className="relative">
      <div className="w-20 h-full">
        <div className="w-20 h-full bg-black/30 backdrop-blur-xl border-l border-white/10 shadow-2xl">
          <div className="flex flex-col h-full p-3">
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
