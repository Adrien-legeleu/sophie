'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState, useEffect } from 'react';

type MarqueeProps = React.ComponentPropsWithoutRef<'div'> & {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  children: React.ReactNode;
};

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartY !== null) {
      const currentY = e.touches[0].clientY;
      const delta = currentY - touchStartY;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${delta}px)`;
      }
      e.preventDefault(); // Empêche le scroll écran
    }
  };

  const handleTouchEnd = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(0px)`;
    }
    setTouchStartY(null);
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Add touch listeners manuellement avec { passive: false }
    node.addEventListener('touchstart', handleTouchStart, { passive: true });
    node.addEventListener('touchmove', handleTouchMove, { passive: false });
    node.addEventListener('touchend', handleTouchEnd);

    return () => {
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchmove', handleTouchMove);
      node.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartY]);

  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:60s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
      ref={containerRef}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
