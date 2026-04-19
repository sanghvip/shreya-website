'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';

// Bio section feature the background, experience, and credentials of the therapist
export default function Bio() {
  return (
    <section className="bg-background py-8 md:py-12 lg:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Portrait Image */}
          <div className="flex md:justify-start">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
              src="/personalshot.png"
              alt="Shreya Sanghvi"
              width={800}
              height={800}
              priority
              className="rounded-lg object-cover h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-base md:text-lg text-foreground mb-6 leading-relaxed italic">
              Shreya Sanghvi is an NLP practioner, founder, and Women Indian chamber of commerce chapter head for wellness who believes in transformative power of emotional intelligence with a masters degree from IGNOU and a diploma in relationship counselling from [-------]. She brings both clinical rigor and deep human warmth to every session. 
              she founded the mind bridge- a counselling space and social  & emotional learning initiative to bridge the gap between mental health knowledge and everyday living.
            </p>
          </div>
        </div>
        <div className="bg-primary text-background italic rounded-lg p-6 md:p-8 lg:p-10 text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
            We are all capable of living extraordinary lives — sometimes we just need someone to help us find our way back to ourselves.
          </p>
        </div>
      </div>
    </section>
  );
}
