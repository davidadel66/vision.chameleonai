import Image from 'next/image';

export type IconName = 'home' | 'crypto' | 'screener' | 'events';

interface IconProps {
  name: IconName;
  className?: string;
  width?: number;
  height?: number;
}

const iconMap: Record<IconName, { src: string; alt: string }> = {
  home: { src: '/HomeIcon.ico', alt: 'Home' },
  crypto: { src: '/CryptoIcon.ico', alt: 'Crypto' },
  screener: { src: '/ScreenerIcon.ico', alt: 'Screener' },
  events: { src: '/EventsIcon.ico', alt: 'Events' },
};

export function Icon({ name, className, width = 48, height = 48 }: IconProps) {
  const iconInfo = iconMap[name];
  
  return (
    <Image
      src={iconInfo.src}
      alt={`${iconInfo.alt} Icon`}
      width={width}
      height={height}
      className={className}
    />
  );
}

export const HomeIcon = (props: Omit<IconProps, 'name'>) => <Icon name="home" {...props} />;
export const CryptoIcon = (props: Omit<IconProps, 'name'>) => <Icon name="crypto" {...props} />;
export const ScreenerIcon = (props: Omit<IconProps, 'name'>) => <Icon name="screener" {...props} />;
export const EventsIcon = (props: Omit<IconProps, 'name'>) => <Icon name="events" {...props} />; 