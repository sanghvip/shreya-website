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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance leading-tight">
              Find Clarity, Healing &<br />
              <span className="text-foreground">Transformation</span>
            </h1>

            <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed italic">
              A safe & compassionate space to explore your thoughts and emotions.
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

          {/* Portrait Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
                alt="Shreya Sanghvi - Psychotherapist and NLP Coach"
                width={500}
                height={500}
                priority
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Key Pillars - Benefit Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Pill 1: Online Sessions */}
          <div className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg hover:shadow-md transition-shadow">
            <Globe className="w-6 h-6 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">
              Online Sessions Across Canada
            </span>
          </div>

          {/* Pill 2: Confidential & Safe */}
          <div className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg hover:shadow-md transition-shadow">
            <Shield className="w-6 h-6 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">
              Confidential & Safe Space
            </span>
          </div>

          {/* Pill 3: Clients Supported */}
          <div className="flex items-center gap-3 bg-card border border-border p-4 rounded-lg hover:shadow-md transition-shadow">
            <Star className="w-6 h-6 text-[#C9A961] flex-shrink-0" strokeWidth={1.5} />
            <span className="text-sm font-medium text-foreground">
              500+ Clients Supported
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
