'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';
import { Globe, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="sm:pl-6 lg:pl-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col py-8 px-4 md:py-12 lg:py-16 justify-center">
            {/* Headline Text */}
            <div className='flex flex-col mt-3 text-center md:text-left lg:text-left'>
              <h1 className="text-3xl lg:text-7xl md:text-5xl font-serif transform scale-y-100 origin-bottom font-bold text-[#C9A961] mb-4 text-balance leading-loose">
                Creating space to<br />
                <span className="text-primary italic">
                  <em className='text-[#7A8C7E]'>feel, grow,</em> 
                  <br/>heal & thrive</span>
              </h1>
              <p className="text-[#7A8C7E] text-sm md:text-lg mb-6 leading-relaxed italic">
                A safe empowering environment where emotions are understood, <br/>not feared-and where your most extraordinary self becomes possible.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CustomButton variant="dark" size="md" className="justify-center sm:justify-start">
                Book Session →
              </CustomButton>
              <CustomButton variant="outline" size="md" className="justify-center sm:justify-start">
                Free 15-min Consultation
              </CustomButton>
            </div>
          </div>
          <div className='flex flex-col h-full text-white p-4' style={{background: 'linear-gradient(180deg, #FAF8F4 0%, #7A8C7E 50%, #3A5244 100%)'}}>
            <div className='flex flex-col justify-center'>
            <p className="text-3xl mb-0 text-center font-serif font-light leading-[1.3] lg:mb-90 mx-auto md:text-lg lg:text-5xl drop-shadow-md italic">
              "You are not broken. 
              <br/>You are in the process of 
              <br/>becoming."
            </p>
            </div>
            <div className='flex flex-col gap-4 mt-10 bg-[#1C2B1E] rounded-lg sm:py-2 lg:py-2 md:py-2'>
              <div className='flex flex-row justify-center mt-5 lg:mt-5 text-[#D4BFA0] tracking-[.2em] font-serif text-xs'>THE MAKING OF YOU</div>
              <div className="flex flex-row gap-2 lg:gap-8 justify-center w-full py-3">
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-[#C9A961] text-2xl lg:text-4xl font-serif'>5+</div>
                  <div className='text-[#FAF8F4] text-xs mt-2'>Years in Practice</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-[#C9A961] text-2xl lg:text-4xl font-serif'>3,000+</div>
                  <div className='text-[#FAF8F4] text-xs mt-2'>Hours of support/training</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-[#C9A961] text-2xl lg:text-4xl font-serif'>1,000+</div>
                  <div className='text-[#FAF8F4] text-xs mt-2'>Lives impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black px-0 py-2 lg:px-0 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm md:text-sm lg:text-sm text-background italic">
            <span className="flex items-center gap-3">
              {Array.from({ length: 2 }).map((_, iteration) => (
                <div key={iteration} className="flex items-center gap-3">
                  {['Relationship issue', 'Online Sessions', 'Individual Sessions', 'Parenting Workshop', 'Anxiety & Stress', 'Social & Emotional Learning', 'Grief & Loss', 'Corporate Wellness'].map((item, index) => (
                    <div key={`${iteration}-${index}`} className="flex items-center gap-3">
                      <span>{item}</span>
                      <Star size={16} className="text-[#C9A961] flex-shrink-0" />
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
              transform: translateX(-70%);
            }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}</style>
    </section>
  );
}
