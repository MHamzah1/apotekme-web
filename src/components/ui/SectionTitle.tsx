import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  className?: string;
  withArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function SectionTitle({ title, className = '', withArrows = false, onPrev, onNext }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center relative mb-8 ${className}`}>
      {withArrows && (
        <button
          onClick={onPrev}
          className="absolute left-0 w-9 h-9 border border-gray-200 rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-navy text-center">{title}</h2>
      {withArrows && (
        <button
          onClick={onNext}
          className="absolute right-0 w-9 h-9 border border-gray-200 rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
