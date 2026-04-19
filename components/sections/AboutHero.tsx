'use client';

import Image from 'next/image';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

export default function AboutHero() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Portrait Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
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

          {/* Text Content */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance leading-tight">
              Shreya Sanghvi
            </h1>

            <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed">
              I'm a registered psychotherapist and NLP certified coach dedicated to helping individuals find clarity, heal emotional wounds, and transform their lives. With over a decade of experience in mental health and personal development, I create safe, compassionate spaces where transformation becomes possible.
            </p>

            <p className="text-base text-foreground mb-6 leading-relaxed">
              My approach integrates evidence-based therapeutic techniques with modern coaching methodologies to address the root causes of stress, anxiety, relationship challenges, and life transitions. I believe that every person has the capacity for growth and healing when provided with the right support and tools.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full mt-8">
          <CustomButton variant="dark" size="md">
            BEGIN YOUR JOURNEY
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
