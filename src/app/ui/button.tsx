import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(`
        cursor-pointer
        text-white
        border border-white/10
        rounded-full
        backdrop-blur-none
        shadow-lg shadow-black/20
        focus:outline-none focus:ring-2 focus:ring-white/50`, className,
      )}
    >
      {children}
    </button>
  );
}
