'use client';

import { MessageCircleMore, MapPinned, Clock3, TrendingUp } from 'lucide-react';

/*
const previousSteps = [
  {
    num: '1',
    label: 'Step 1',
    title: 'Talk',
    description: 'Free discovery call.',
    icon: MessageCircleMore,
  },
  {
    num: '2',
    label: 'Step 2',
    title: 'Map',
    description: 'Find the pattern.',
    icon: MapPinned,
  },
  {
    num: '3',
    label: 'Step 3',
    title: 'Practise',
    description: 'In your 23 hours.',
    icon: Clock3,
  },
  {
    num: '4',
    label: 'Step 4',
    title: 'Grow',
    description: 'Make it last.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#112E2B] py-16 md:py-20 lg:py-24 xl:py-28" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <h2 className="text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-serif text-[#F0EDE7] leading-none tracking-[-0.04em] mb-14 md:mb-20">
          How it works
        </h2>

        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-[4.5rem] h-px bg-[#D8D0C6]/35" />

          <div className="grid grid-cols-4 gap-8 lg:gap-10 relative z-10">
            {previousSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.num} className="flex flex-col items-start">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D8D0C6]/30 bg-[#1B443D] shadow-[inset_0_0_0_1px_rgba(216,208,198,0.15)] mb-8">
                    <Icon className="h-8 w-8 text-[#D5C29A]" />
                  </div>

                  <div className="w-full">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#C9A961] mb-3">
                      {step.label}
                    </p>
                    <h3 className="text-3xl md:text-[2.25rem] font-serif text-[#F0EDE7] leading-none mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#F0EDE7]/80 text-base md:text-lg font-serif leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden space-y-8">
          {previousSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.num} className="flex items-start gap-4 border-b border-[#D8D0C6]/20 pb-6 last:border-b-0 last:pb-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D8D0C6]/30 bg-[#1B443D]">
                  <Icon className="h-6 w-6 text-[#D5C29A]" />
                </div>

                <div className="flex-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#C9A961] mb-2">
                    {step.label}
                  </p>
                  <h3 className="text-3xl font-serif text-[#F0EDE7] leading-none mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#F0EDE7]/80 text-base font-serif leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
*/

const steps = [
  {
    num: '1',
    label: 'Step 1',
    title: 'Talk',
    description: 'Free discovery call.',
    icon: MessageCircleMore,
  },
  {
    num: '2',
    label: 'Step 2',
    title: 'Map',
    description: 'Find the pattern.',
    icon: MapPinned,
  },
  {
    num: '3',
    label: 'Step 3',
    title: 'Practise',
    description: 'In your 23 hours.',
    icon: Clock3,
  },
  {
    num: '4',
    label: 'Step 4',
    title: 'Grow',
    description: 'In your 23 hours.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#112E2B] py-16 md:py-20 lg:py-24 xl:py-28" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <h2 className="text-[2.6rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-serif text-[#F0EDE7] leading-none tracking-[-0.04em] mb-10 sm:mb-14 md:mb-20">
          How it works
        </h2>

        <div className="hidden md:block relative">
          <div className="grid grid-cols-4 gap-8 lg:gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const showConnector = index < steps.length - 1;

              return (
                <div key={step.num} className="flex flex-col items-start">
                  <div className="flex w-full items-center gap-4 mb-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D8D0C6]/30 bg-[#1B443D] shadow-[inset_0_0_0_1px_rgba(216,208,198,0.15)] shrink-0">
                      <Icon className="h-8 w-8 text-[#C9A961]" />
                    </div>

                    {showConnector && (
                      <div className="h-px flex-1 bg-[#C9A961]/80" />
                    )}
                  </div>

                  <div className="w-full">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#C9A961] mb-3">
                      {step.label}
                    </p>
                    <h3 className="text-3xl md:text-[2.25rem] font-serif text-[#F0EDE7] leading-none mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#F0EDE7]/80 text-base md:text-lg font-serif leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.num} className="flex items-start gap-4 border-b border-[#D8D0C6]/20 pb-5 last:border-b-0 last:pb-0">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D8D0C6]/30 bg-[#1B443D]">
                  <Icon className="h-6 w-6 text-[#C9A961]" />
                </div>

                <div className="flex-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#C9A961] mb-2">
                    {step.label}
                  </p>
                  <h3 className="text-2xl font-serif text-[#F0EDE7] leading-none mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#F0EDE7]/80 text-sm font-serif leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}