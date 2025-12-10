import Link from 'next/link';
import { cn } from '@/lib/utils';

const ArrowSvg = ({ className }: { className?: string }) => (
  <svg
    className={cn('w-10 transition-transform group-hover:translate-x-1', className)}
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    viewBox="0 0 40 25"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeMiterlimit="10"
  >
    <line y1="12.5" x2="40" y2="12.5" />
    <path d="M40,12.5C28.69,12.5,28,25,28,25" />
    <path d="M28,0s.69,12.5,12,12.5" />
  </svg>
);

interface ArrowButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  textSizeClass?: string;
  isExternal?: boolean;
}

export function ArrowButton({ href, children, className, textSizeClass, isExternal }: ArrowButtonProps) {
  const Component = isExternal ? 'a' : Link;
  const props = isExternal 
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };

  return (
    <Component
      {...props}
      className={cn(
        'group inline-flex items-center gap-4 text-lg font-headline uppercase tracking-wider text-primary hover:text-accent transition-colors',
        className
      )}
    >
      <span className={cn(textSizeClass)}>{children}</span>
      <ArrowSvg />
    </Component>
  );
}
