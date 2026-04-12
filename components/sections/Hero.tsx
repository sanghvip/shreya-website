'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';
import { Globe, Shield, Star } from 'lucide-react';

// Hero section featuring headline, description, CTA buttons, and professional portrait
// Includes key pillars displayed as benefit pills below the main content
export default function Hero() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#C9A961] mb-4 text-balance leading-tight">
              Creating space for you to<br />
              <span className="text-primary italic">feel, grow, heal & thrive</span>
            </h1>

            <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed italic">
              A safe empowering environment where emotions are understood,not feared-and where your most extraordinary self becomes possible.
            </p>

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
        </div>

        {/* Key Pillars - Benefit Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Pill 1: Years in Practice */}
          <div className="flex flex-col items-center gap-2 bg-card border border-border p-6 rounded-lg hover:shadow-md transition-shadow text-center">
            <span className="text-4xl md:text-5xl font-bold text-[#C9A961]" style={{ fontFamily: 'Google Sans, sans-serif' }}>5+</span>
            <span className="text-sm font-medium text-foreground">Years in practice</span>
          </div>

          {/* Pill 2: Hours of Support */}
          <div className="flex flex-col items-center gap-2 bg-card border border-border p-6 rounded-lg hover:shadow-md transition-shadow text-center">
            <span className="text-4xl md:text-5xl font-bold text-[#C9A961]" style={{ fontFamily: 'Google Sans, sans-serif' }}>3000+</span>
            <span className="text-sm font-medium text-foreground">Hours of support/training</span>
          </div>

          {/* Pill 3: Clients Supported */}
          <div className="flex flex-col items-center gap-2 bg-card border border-border p-6 rounded-lg hover:shadow-md transition-shadow text-center">
            <span className="text-4xl md:text-5xl font-bold text-[#C9A961]" style={{ fontFamily: 'Google Sans, sans-serif' }}>1000+</span>
            <span className="text-sm font-medium text-foreground">Lives impacted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
