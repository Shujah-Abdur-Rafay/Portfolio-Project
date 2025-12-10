
'use client';

import { cn } from '@/lib/utils';
import React from 'react';

const celticKnotSVG = `
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 0 V15 C30 22.5 22.5 30 15 30 H0" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round"/>
    <path d="M60 0 V15 C60 22.5 67.5 30 75 30 H90" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round"/>
    <path d="M0 30 H15 C22.5 30 30 37.5 30 45 C30 52.5 22.5 60 15 60 H0" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round"/>
    <path d="M90 30 H75 C67.5 30 60 37.5 60 45 C60 52.5 67.5 60 75 60 H90" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round"/>
    <path d="M30 90 V75 C30 67.5 22.5 60 15 60 H0" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round"/>
    <path d="M60 90 V75 C60 67.5 67.5 60 75 60 H90" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round"/>
    <path d="M30 0 V15 C30 22.5 37.5 30 45 30 C52.5 30 60 22.5 60 15 V0" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round" />
    <path d="M30 90 V75 C30 67.5 37.5 60 45 60 C52.5 60 60 67.5 60 75 V90" stroke="hsl(var(--foreground))" stroke-width="5" stroke-linecap="round" />
    <path d="M45,30 C37.5,30 30,37.5 30,45 C30,52.5 37.5,60 45,60 C52.5,60 60,52.5 60,45 C60,37.5 52.5,30 45,30 Z" stroke="hsl(var(--foreground))" stroke-width="5" />
  </svg>
`;

const encodedSVG = Buffer.from(celticKnotSVG).toString('base64');
const dataUrl = `data:image/svg+xml;base64,${encodedSVG}`;

interface CelticFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CelticFrame({ children, className, ...props }: CelticFrameProps) {
  return (
    <div
      className={cn("relative p-[25px]", className)}
      style={{
        borderImageSource: `url("${dataUrl}")`,
        borderImageSlice: '30 30 30 30',
        borderImageWidth: '25px',
        borderImageRepeat: 'repeat',
        borderStyle: 'solid',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
