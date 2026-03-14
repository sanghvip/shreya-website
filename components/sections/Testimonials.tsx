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

  const handlePrev = () => emblaApi?.scrollPrev();
  const handleNext = () => emblaApi?.scrollNext();

  return (
    <section className="bg-background py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12 text-balance">
          What Clients Say
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0"
                >
                  <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col justify-between">
                    <p className="text-foreground italic mb-4 text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        – {testimonial.author}
                      </p>
                      <p className="text-muted-foreground text-sm">
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

          {/* Dot Indicators - Mobile Only */}
          <div className="md:hidden flex justify-center gap-2 mt-6">
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
    </section>
  );
}
