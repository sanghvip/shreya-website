'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';
import { Globe, Shield, Dot, StarIcon, Leaf, Users } from 'lucide-react';
import { useMediaQuery } from "@/hooks/user-media-query";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const buttonSize = isDesktop ? "md" : "sm";

  return (
    <section className="bg-background w-full">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center min-h-fit md:min-h-[600px]">
          {/* Text Content */}
          <div className="flex flex-col py-6 sm:py-8 md:py-10 lg:py-16 justify-center w-full">
            {/* Headline Text */}
            <div className='flex flex-col mt-1 sm:mt-2 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center md:text-left lg:text-left'>
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif transform scale-y-100 origin-bottom leading-[1.15] sm:leading-[1.2] md:leading-[1.3] text-foreground mb-2 sm:mb-3 md:mb-4 text-balance">
                Regulate the nervous system.<br />
                <span className="text-primary italic">
                  <em className='text-[#7A8C7E]'>Transform emotional patterns.</em>
                  <br/><div className='text-[#000000]'>Rebuild your life</div></span>
              </h1>
              <p className="text-[#7A8C7E] text-[11px] sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 font-serif leading-snug sm:leading-relaxed">
                 Integrating NLP, FBT, and nervous-system informed approaches to help you heal, grow and create lasting change in relationships, work and within.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-2 justify-center md:justify-start items-center w-full">
              <a href="https://calendly.com/shreyasanghvi/new-meeting?month=2026-04" className="w-full sm:w-fit">
              <CustomButton
                variant="dark"
                size={buttonSize}
                className="w-full sm:w-fit justify-center"
              >
                BOOK A FREE INTRO CALL →
              </CustomButton></a>
              <a href='/services' className="w-full sm:w-fit">
              <CustomButton
                variant="outline"
                size={buttonSize}
                className="w-full sm:w-fit justify-center"
              >
                START THE TRANSFORMATION
              </CustomButton></a>
              <a href="https://ca.trustpilot.com/review/shreyasanghvi.com">
              <CustomButton
                variant="outline"
                size={buttonSize}
                className="flex flex-row sm:w-fit font-montserrat font-bold justify-center align-middle lg:justify-center"
              >
                <Image
                  src="/trustpilot.svg"
                  alt="Trustpilot"
                  width={20}
                  height={20}
                  className=""
                />
                Trustpilot
              </CustomButton></a>
            </div>
          </div>
          <div className='relative flex flex-col h-[280px] sm:h-[350px] md:h-[420px] lg:h-[550px] justify-end text-white overflow-hidden'>
            <Image
              src='/heroimage.jpg'
              alt='Hero image background'
              fill
              className='absolute inset-0 object-cover object-center'
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            <div className='absolute inset-0 bg-black/35' />
            <div className='relative flex flex-col gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6 mb-3 sm:mb-4 md:mb-6 px-1 sm:px-3 md:px-4'>
              <div className="grid grid-cols-3 rounded-md sm:rounded-lg bg-[#1A2B1C] py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-3 gap-1 sm:gap-2">
                {/* NLP Section */}
                <div className="flex flex-col items-center text-center px-0.5 sm:px-1 md:px-2">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#C9A961]" />
                  <div className="text-[#FAF8F4] text-[6px] sm:text-[7px] md:text-xs lg:text-xs mt-1 sm:mt-2 md:mt-3 font-light tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
                    Holistic yet<br className="hidden sm:block" /> Practical Approach
                  </div>
                </div>

                {/* F.B.T. Section - with vertical dividers */}
                <div className="flex flex-col items-center text-center border-x border-[#FAF8F4]/10 px-0.5 sm:px-1 md:px-2">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#C9A961]" />
                  <div className="text-[#FAF8F4] text-[6px] sm:text-[7px] md:text-xs lg:text-xs mt-1 sm:mt-2 md:mt-3 font-light tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
                    Evidence Based<br className="hidden sm:block" /> Approach
                  </div>
                </div>

                {/* GTA Section */}
                <div className="flex flex-col items-center text-center px-0.5 sm:px-1 md:px-2">
                  <Shield
                    size={32}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#C9A961]"
                  />
                  <div className="text-[#FAF8F4] text-[6px] sm:text-[7px] md:text-xs lg:text-xs mt-1 sm:mt-2 md:mt-3 font-light tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
                    Safe, Supportive,<br className="hidden sm:block" /> Transformative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C2B1E] px-1 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-1 lg:py-1 overflow-hidden w-full">
        <div className="animate-marquee flex whitespace-nowrap w-max font-serif text-[9px] sm:text-xs md:text-sm lg:text-sm text-background">
          <span className="flex items-center gap-2 sm:gap-3">
            {Array.from({ length: 2 }).map((_, iteration) => (
              <div key={iteration} className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 pr-3 sm:pr-5 md:pr-8 lg:pr-10">
                {['NLP Counselling', 'Leadership & Change Coaching', 'Relationship Counselling', 'Anxiety & Stress Management', 'Corporate Wellness Programs'].map((item, index) => (
                  <div key={`${iteration}-${index}`} className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-8">
                    <span className="text-[9px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap">{item}</span>
                    <StarIcon size={8} className="text-[#C9A961] flex-shrink-0 sm:hidden" />
                    <StarIcon size={10} className="text-[#C9A961] flex-shrink-0 hidden sm:block md:hidden" />
                    <StarIcon size={12} className="text-[#C9A961] flex-shrink-0 hidden md:block lg:hidden" />
                    <StarIcon size={16} className="text-[#C9A961] flex-shrink-0 hidden lg:block" />
                  </div>
                ))}
              </div>
            ))}
          </span>
        </div>
      </div>

      <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
    </section>
  );
}