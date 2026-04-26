'use client';

import { CalendarHeart, CalendarClock, Armchair } from 'lucide-react';

// Impact section highlighting the impact of services for the customer
export default function Impact() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
        <p className='text-[#C9A961] font-bold'>WHAT WE OFFER</p>
        <p className="text-2xl lg:text-6xl md:text-4xl font-serif text-primary text-center mb-4 text-balance">
          Work that meets you
          <br/>where you 
          <span className='text-[#7A8C7E]'> actually are</span>
        </p>
        <p className="text-[#7A8C7E] text-center text-sm lg:text-m md:text-lg font-serif jusleading-relaxed">
          Every service begins with a free 15-minute intro call to offer meaningful support at a pace that works for you.
        </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {/* Pill 1: Needs section */}
          <div className="bg-primary flex flex-col items-center justify-center gap-3 bg-card border border-border p-4 sm:p-6 rounded-lg min-h-40 sm:min-h-48 hover:shadow-lg hover:border-primary transition-all duration-300">
            <CalendarHeart className="w-7 sm:w-8 h-7 sm:h-8 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-base sm:text-lg font-medium text-primary-foreground text-center">
              Individual Sessions
            </span>
            <span className="text-base sm:text-lg italic font-small text-primary-foreground text-center">
              One-on-one sessions designed to help you understand your emotions, process challenges, and build lasting mental and emotional wellbeing.
            </span>
          </div>

          {/* Pill 2: Availability */}
          <div className="bg-primary flex flex-col items-center justify-center gap-3 bg-card border border-border p-4 sm:p-6 rounded-lg min-h-40 sm:min-h-48 hover:shadow-lg hover:border-primary transition-all duration-300">
            <CalendarClock className="w-7 sm:w-8 h-7 sm:h-8 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-base sm:text-lg font-medium text-primary-foreground text-center">
              Social & Emotional Learning
            </span>
            <span className="text-base sm:text-lg italic font-small text-primary-foreground text-center">
              Custom SEL curricula, training programmes for individuals, organizations, family, teenagers — building emotionally intelligent communities.
            </span>
          </div>

          {/* Pill 3: Accessibility */}
          <div className="bg-primary flex flex-col items-center justify-center gap-3 bg-card border border-border p-4 sm:p-6 rounded-lg min-h-40 sm:min-h-48 hover:shadow-lg hover:border-primary transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <Armchair className="w-7 sm:w-8 h-7 sm:h-8 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-base sm:text-lg font-medium text-primary-foreground text-center">
              Corporate Wellness
            </span>
            <span className="text-base sm:text-lg italic font-small text-primary-foreground text-center">
              Workshops and skill development programmes for employees and leadership teams — because corporate wellness at work is not a perk, it is a foundation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
