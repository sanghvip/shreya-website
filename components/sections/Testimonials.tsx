'use client';

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

// Testimonials carousel section with mobile swipe functionality
// Displays client testimonials with smooth carousel navigation
interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: 'I felt heard and understood from the very first session.',
      author: 'Sarah',
      location: 'Toronto',
    },
    {
      quote: 'A deeply insightful session that changed my perspective.',
      author: 'James',
      location: 'Vancouver',
    },
    {
      quote: 'The compassionate approach really helped me heal.',
      author: 'Maria',
      location: 'Calgary',
    },
    {
      quote: 'Life-changing work. Highly recommend.',
      author: 'Alex',
      location: 'Montreal',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    dragFree: false,
  });

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      if (prevRef.current)
        prevRef.current.disabled = !emblaApi.canScrollPrev();
      if (nextRef.current)
        nextRef.current.disabled = !emblaApi.canScrollNext();
    };

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Autoplay: advance carousel every 4s
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const handlePrev = () => emblaApi?.scrollPrev();
  const handleNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-12 md:py-12 lg:py-16 bg-[#1A2B1C]">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Title
        <h2 className="text-[#C9A961] text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-balance">
          What Clients Say
        </h2> */}

            <div className="grid grid-cols-1 gap-4 items-stretch md:grid-cols-[minmax(0,520px)_1px_minmax(360px,560px)]">
          {/* Left: Carousel (auto-scrolling) */}
          <div className="max-w-[520px] w-full md:mx-0 mx-auto">
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4 md:gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0"
                    >
                      <div className="p-6 h-full flex flex-col justify-between">
                        <p className="italic text-[#FFFFFF] mb-4 text-sm md:text-base leading-relaxed md:leading-7">
                          <span className="text-[#C9A961]">"</span>{testimonial.quote}<span className="text-[#C9A961]">"</span>
                        </p>
                        <div>
                          <p className="text-[#FFFFFF] font-semibold text-sm">
                            – {testimonial.author}
                          </p>
                          <p className="text-[#FFFFFF] text-sm">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - Hidden on Mobile */}
              <div className="hidden md:flex items-center justify-end gap-2 mt-6">
                <button
                  ref={prevRef}
                  onClick={handlePrev}
                  className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-[#C9A961]" />
                </button>
                <button
                  ref={nextRef}
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-[#C9A961]" />
                </button>
              </div>

              {/* Dot Indicators - always visible below carousel */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="w-2 h-2 rounded-full bg-[#C9A961] hover:bg-primary transition-colors"
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

              {/* Divider */}
              <div className="hidden md:block bg-[#C9A961] w-px mx-2 self-stretch" aria-hidden="true" />

          {/* Right: Credentials grid */}
          <div className="flex justify-center md:justify-end">
            <div className='flex flex-col gap-4 mt-6 sm:py-2 lg:py-2 md:py-2 w-full w-full px-6'>
              <div className="grid grid-cols-3 gap-x-6 rounded-lg bg-[#1A2B1C] py-8 px-6">
                {/* NLP Section */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="text-[#C9A961] text-2xl lg:text-4xl font-serif tracking-tight">
                    NLP
                  </div>
                  <div className="text-[#FAF8F4] text-[10px] lg:text-xs mt-3 font-light tracking-[0.2em] uppercase leading-tight">
                    Certified<br className="sm:hidden" /> Practioner
                  </div>
                </div>

                {/* F.B.T. Section - with vertical dividers */}
                <div className="flex flex-col items-center text-center border-x border-[#FAF8F4]/10 px-2">
                  <div className="text-[#C9A961] text-2xl lg:text-4xl font-serif tracking-tight">
                    TEDx
                  </div>
                  <div className="text-[#FAF8F4] text-[10px] lg:text-xs mt-3 font-light tracking-[0.2em] uppercase leading-tight">
                    Circle<br className="sm:hidden" /> Speaker
                  </div>
                </div>

                {/* GTA Section */}
                <div className="flex flex-col items-center text-center px-2">
                  <div className="text-[#C9A961] text-2xl lg:text-4xl font-serif tracking-tight">
                    Life Coach
                  </div>
                  <div className="text-[#FAF8F4] text-[10px] lg:text-xs mt-3 font-light tracking-[0.2em] uppercase leading-tight">
                    ICF Accredited
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
