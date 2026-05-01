import Link from 'next/link';

export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg', sub: 'text-[8px]' },
    md: { icon: 36, text: 'text-xl', sub: 'text-[9px]' },
    lg: { icon: 44, text: 'text-2xl', sub: 'text-[10px]' },
  };
  const s = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width={s.icon} height={s.icon} viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#22A4F4" />
            <stop offset="100%" stopColor="#0E2A47" />
          </linearGradient>
        </defs>
        <path
          d="M8 12 Q 8 4, 18 6 Q 28 8, 32 18 Q 34 28, 26 32 Q 18 34, 12 28 Q 6 22, 8 12 Z"
          fill="url(#logoGrad)"
        />
        <rect x="17" y="11" width="6" height="18" fill="white" rx="1" />
        <rect x="11" y="17" width="18" height="6" fill="white" rx="1" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-navy tracking-wide ${s.text}`}>MEDICAL</span>
        <span className={`text-navy/60 tracking-widest ${s.sub} mt-0.5`}>MEDICINE • HEALTH • BEAUTY</span>
      </div>
    </Link>
  );
}
