import React from 'react';
import { cn } from '@/lib/utils';

interface ViewfinderCornerProps {
  className?: string;
  size?: number;
  color?: 'blue' | 'white' | 'charcoal';
}

export const ViewfinderCorner: React.FC<ViewfinderCornerProps> = ({
  className,
  size = 12,
  color = 'blue',
}) => {
  const colorMap = {
    blue: 'border-blue-electric',
    white: 'border-white/30',
    charcoal: 'border-charcoal-border',
  };

  const borderClass = colorMap[color];

  return (
    <div className={cn('pointer-events-none absolute inset-0', className)}>
      {/* Top-left */}
      <span
        className={cn('absolute top-0 left-0 border-t-2 border-l-2', borderClass)}
        style={{ width: size, height: size }}
      />
      {/* Top-right */}
      <span
        className={cn('absolute top-0 right-0 border-t-2 border-r-2', borderClass)}
        style={{ width: size, height: size }}
      />
      {/* Bottom-left */}
      <span
        className={cn('absolute bottom-0 left-0 border-b-2 border-l-2', borderClass)}
        style={{ width: size, height: size }}
      />
      {/* Bottom-right */}
      <span
        className={cn('absolute bottom-0 right-0 border-b-2 border-r-2', borderClass)}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

