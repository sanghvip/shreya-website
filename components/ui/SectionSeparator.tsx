'use client';

interface SectionSeparatorProps {
  variant?: 'minimal' | 'gradient' | 'organic' | 'dots';
}

export default function SectionSeparator({ variant = 'minimal' }: SectionSeparatorProps) {
  if (variant === 'gradient') {
    return (
      <div className="bg-background py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === 'organic') {
    return (
      <div className="bg-background py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A961] opacity-60" />
            <svg className="w-6 h-6 md:w-8 md:h-8 text-[#C9A961] opacity-60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
            </svg>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A961] opacity-60" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="bg-background py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961] opacity-40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961] opacity-60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961] opacity-40" />
          </div>
        </div>
      </div>
    );
  }

  // Default minimal variant
  return (
    <div className="bg-background py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-[#C9A961] opacity-40" />
      </div>
    </div>
  );
}
