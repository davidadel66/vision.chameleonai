import Link from 'next/link';
import GlassWrapperDiv from '@/app/ui/glass';
import NavLinks from '@/app/ui/dashboard/nav-links';
export default function SideNav() {
  return (
    <div className="group relative">
      <div className="w-28 group-hover:w-64 h-full transition-all duration-300 ease-in-out">
        <div className="absolute inset-0 w-full h-full bg-blue-500/10 backdrop-blur-lg border border-white/10 transition-all duration-300 ease-in-out z-10">
          <div className="flex flex-col h-full p-3">
            <nav className="flex-1 flex items-center">
              <div className="w-full">
                <NavLinks />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
