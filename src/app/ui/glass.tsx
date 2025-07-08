import clsx from 'clsx';
import React, { ReactNode } from 'react';


interface GlassWrapperProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const GlassWrapperDiv: React.FC<GlassWrapperProps> = ({ className, children, onClick }) => {
  return (
    <div className={clsx(` cursor-pointer
        text-white
        border border-white/10
        backdrop-blur-none
        `, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default GlassWrapperDiv;

