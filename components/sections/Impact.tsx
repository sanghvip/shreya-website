'use client';

import { CalendarHeart, CalendarClock, Armchair } from 'lucide-react';

// Impact section highlighting the impact of services for the customer
export default function Impact() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4 text-balance">
          What You Can Expect in Therapy with Me
        </h2>
        <h4 className="text-lg md:text-xl font-serif font-medium italic text-foreground text-center mb-12 text-balance">
          When you book a session with me, my focus goes beyond just applying the most effective therapeutic modalities for your growth.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Pill 1: Needs section */}
          <div className="bg-primary flex flex-col items-center justify-center gap-3 bg-card border border-border p-4 sm:p-6 rounded-lg min-h-40 sm:min-h-48 hover:shadow-lg hover:border-primary transition-all duration-300">
            <CalendarHeart className="w-7 sm:w-8 h-7 sm:h-8 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-base sm:text-lg font-medium text-primary-foreground text-center">
              Therapy That Accommodates Your Schedule & Needs
            </span>
          </div>

          {/* Pill 2: Availability */}
          <div className="bg-primary flex flex-col items-center justify-center gap-3 bg-card border border-border p-4 sm:p-6 rounded-lg min-h-40 sm:min-h-48 hover:shadow-lg hover:border-primary transition-all duration-300">
            <CalendarClock className="w-7 sm:w-8 h-7 sm:h-8 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-base sm:text-lg font-medium text-primary-foreground text-center">
              Evening & Weekend Availability for Your Convenience
            </span>
          </div>

          {/* Pill 3: Accessibility */}
          <div className="bg-primary flex flex-col items-center justify-center gap-3 bg-card border border-border p-4 sm:p-6 rounded-lg min-h-40 sm:min-h-48 hover:shadow-lg hover:border-primary transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <Armchair className="w-7 sm:w-8 h-7 sm:h-8 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-base sm:text-lg font-medium text-primary-foreground text-center">
              Virtual/Phone Sessions Across Ontario for Accessibility
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
