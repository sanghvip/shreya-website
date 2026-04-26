'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';
import { Globe, Shield, Dot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="sm:pl-6 lg:pl-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col py-8 px-4 md:py-12 lg:py-16 justify-center">
            {/* Headline Text */}
            <div className='flex flex-col mt-3 lg:mb-10 text-center md:text-left lg:text-left'>
              <h1 className="text-3xl lg:text-7xl md:text-5xl font-serif transform scale-y-100 origin-bottom italic leading-[1.3] text-[#C9A961] mb-4 text-balance ">
                Creating space to<br />
                <span className="text-primary italic">
                  <em className='text-[#7A8C7E]'>feel, grow,</em> 
                  <br/>heal & thrive</span>
              </h1>
              <p className="text-[#7A8C7E] text-sm lg:text-m md:text-lg mb-6 font-serif leading-relaxed">
                A safe empowering environment where emotions are understood, <br/>not feared-and where your most extraordinary self becomes possible. 
                <br/>Because you are always, already in the making, back to your original signal.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CustomButton variant="dark" size="md" className="justify-center sm:justify-start">
                BOOK A FREE INTRO CALL →
              </CustomButton>
              <CustomButton variant="outline" size="md" className="justify-center sm:justify-start">
                VIEW PACKAGES
              </CustomButton>
            </div>
          </div>
          <div className='flex flex-col h-full justify-end text-white p-4' style={{background: 'linear-gradient(180deg, #FAF8F4 0%, #7A8C7E 50%, #3A5244 100%)'}}>
            <div className='flex flex-col justify-center'>
              <p className="text-3xl mb-0 text-center font-serif font-light leading-[1.3] lg:mb-20 mx-auto md:text-lg lg:text-4xl drop-shadow-md italic">
                "Your nervous system is not broken.
                <br />It is running a programme
                <br />that outlined its original purpose"
                <br />You are in the process of
                <br />becoming."
              </p>
            </div>
            <div className='flex flex-col gap-4 mt-10 sm:py-2 lg:py-2 md:py-2'>
              <div className="flex flex-row gap-2 rounded-lg bg-[#1C2B1E] lg:gap-5 justify-center py-3">
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-[#C9A961] text-2xl lg:text-4xl font-serif'>NLP</div>
                  <div className='text-[#FAF8F4] text-xs mt-2 font-thin'>STATE-FIRST APPROACH</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-[#C9A961] text-2xl lg:text-4xl font-serif'>F.B.T.</div>
                  <div className='text-[#FAF8F4] text-xs mt-2 font-thin'>FEELING LEADS</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='text-[#C9A961] text-2xl lg:text-4xl font-serif'>GTA</div>
                  <div className='text-[#FAF8F4] text-xs mt-2 font-thin'>TORONTO BASED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C2B1E] px-0 py-2 lg:px-0 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap font-serif text-sm md:text-sm lg:text-sm text-background">
            <span className="flex items-center gap-3">
              {Array.from({ length: 2 }).map((_, iteration) => (
                <div key={iteration} className="flex items-center gap-3">
                  {['Adult Learning', 'Gratitude Practice', 'Career Counselling', 'NLP Counselling', 'Leadership & Change','Relationship issue', 'Online Sessions', 'Individual Sessions', 'Parenting Workshop', 'Anxiety & Stress', 'Social & Emotional Learning', 'Corporate Wellness'].map((item, index) => (
                    <div key={`${iteration}-${index}`} className="flex items-center gap-1">
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
