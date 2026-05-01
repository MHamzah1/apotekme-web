import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number;
  size?: number;
  showCount?: boolean;
  count?: number;
  className?: string;
}

export default function RatingStars({ rating, size = 14, showCount, count, className }: RatingStarsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={cn(
              star <= Math.round(rating)
                ? 'fill-warning text-warning'
                : 'fill-gray-200 text-gray-200'
            )}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-xs text-navy/60">({count})</span>
      )}
    </div>
  );
}
