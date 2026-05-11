'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';
import { Globe, Shield, Dot } from 'lucide-react';
import { useMediaQuery } from "@/hooks/user-media-query";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const buttonSize = isDesktop ? "md" : "sm";

  return (
    <section className="bg-background">
      <div className="sm:pl-6 lg:pl-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col py-8 px-4 md:py-12 lg:py-16 justify-center">
            {/* Headline Text */}
            <div className='flex flex-col mt-3 lg:mb-10 text-center md:text-left lg:text-left'>
              <h1 className="text-2xl lg:text-5xl md:text-5xl font-serif transform scale-y-100 origin-bottom leading-[1.3] text-foreground mb-4 text-balance ">
                Regulate the nervous system.<br />
                <span className="text-primary italic">
                  <em className='text-[#7A8C7E]'>Transform emotional patterns.</em>
                  <br/><div className='text-[#000000]'> Rebuild your life</div></span>
              </h1>
              <p className="text-[#7A8C7E] text-sm lg:text-m md:text-lg mb-6 font-serif leading-relaxed">
                Quit justifying your past. Design your future. Who are you choosing to be right now?
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2 justify-center lg:justify-start items-center">
              <a href="https://calendly.com/shreyasanghvi/new-meeting?month=2026-04">
              <CustomButton
                variant="dark"
                size={buttonSize}
                className="sm:w-fit justify-center lg:justify-start"
              >
                BOOK A FREE INTRO CALL →
              </CustomButton></a>
              <a href='/services'>
              <CustomButton
                variant="outline"
                size={buttonSize}
                className="sm:w-fit justify-center lg:justify-start"
              >
                START THE TRANSFORMATION
              </CustomButton></a>
            </div>
          </div>
          <div className='relative flex flex-col h-full justify-end text-white overflow-hidden rounded-3xl'>
            <Image
              src='/heroimage.jpg'
              alt='Hero image background'
              fill
              className='absolute inset-0 object-cover object-center'
              priority
            />
            <div className='absolute inset-0 bg-black/35' />
            <div className='relative flex flex-col justify-end p-4 h-full'>
      
            </div>
            <div className='relative flex flex-col gap-4 mt-5 sm:py-2 lg:py-2 md:py-2'>
              <div className="grid grid-cols-3 rounded-lg bg-[#1A2B1C] py-4 px-2">
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
      <div className="bg-[#1C2B1E] px-0 py-2 lg:px-0 overflow-hidden w-full">
        <div className="animate-marquee flex whitespace-nowrap w-max font-serif text-sm md:text-sm lg:text-sm text-background">
          <span className="flex items-center gap-3">
            {Array.from({ length: 2 }).map((_, iteration) => (
              <div key={iteration} className="flex items-center gap-10 pr-10">
                {['NLP Counselling', 'Leadership & Change Coaching', 'Relationship Counselling', 'Anxiety & Stress Management', 'Corporate Wellness Programs'].map((item, index) => (
                  <div key={`${iteration}-${index}`} className="flex items-center gap-30">
                    <span>{item}</span>
                    <Dot size={16} className="text-[#C9A961] flex-shrink-0" />
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
