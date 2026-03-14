// Modular button component handling all variations
// Supports dark fill, cream border, and responsive styles
interface CustomButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CustomButton({
  children,
  variant = 'dark',
  size = 'md',
  className = '',
}: CustomButtonProps) {
  const baseStyles =
    'font-medium rounded transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap';

  const variants = {
    dark: 'bg-primary text-primary-foreground hover:bg-opacity-90',
    outline:
      'border border-foreground bg-background text-foreground hover:bg-secondary',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
