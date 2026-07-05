import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer';
  const variants = {
    primary: 'bg-emerald-950 border border-gold text-gold hover:bg-gold hover:text-emerald-950 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]',
    secondary: 'bg-gold border border-gold text-emerald-950 hover:bg-transparent hover:text-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]',
    outline: 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold'
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
