'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';

// Bio section feature the background, experience, and credentials of the therapist
export default function Bio() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
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

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed italic">
              Shreya Sanghvi is an NLP practioner, founder, and Women Indian chamber of commerce chapter head for wellness who believes in transformative power of emotional intelligence with a masters degree from IGNOU and a diploma in relationship counselling from [-------]. She brings both clinical rigor and deep human warmth to every session. 
              she founded the mind bridge- a counselling space and social  & emotional learning initiative to bridge the gap between mental health knowledge and everyday living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
