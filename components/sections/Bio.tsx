'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';
import { Minus } from 'lucide-react';

export default function Bio() {
  return (
    <section className="bg-background">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center mb-12">
          {/* Portrait Image */}
          <div className='flex flex-col gap-5'>
            <div className='text-sm text-primary'>
              <div className='flex flex-row justify-start gap-2 items-center tracking-widest'>
                <div className="w-15 h-[1.5px] bg-[#C9A961] flex-shrink-0" aria-hidden="true" />
                <p>THE PHILOSOPHY</p>
              </div>
            </div>
            <div className='font-serif'>
              <p className='text-primary text-6xl'>The feeling always 
                <br/>comes
                <em className='text-[#C9A961]'> first</em></p>
            </div>

            <div className="flex flex-col justify-center text-left">
              <p className="text-[#7A8C7E] text-sm lg:text-m md:text-lg font-serif leading-relaxed">
                <b>The Logic of the Nervous System</b>
<br/>Traditional therapy often asks the mind to police the body. We are told that if we simply "think better," we will "act better." But for most of us, our deepest behaviors don't live in the rational brain they live in the nervous system, rooted in emotional patterns formed long before we had the language to describe them.
<br/><br/><b>The F-B-T Framework</b>
<br/>My practice utilizes the F-B-T Link (Feeling → Behaviour → Thought). By meeting the feeling first, we make the behavior navigable. When the body feels safe, the behavior shifts, and the thought transforms not through forced effort, but through genuine understanding.
<br/><br/><b>Cultural Fluency as Clinical Necessity</b>
 <br/>As a South Asian Canadian, I know that identity, ambition, and family expectations aren't "extra" stressors they are the core of the experience. Culturally fluent care isn't a luxury; it’s the only way to achieve real results. For South Asian Canadians, mental health isn't just about the individual; it’s about the intersection of family legacy, immigration stress, and professional pressure. I provide a space where you don’t have to translate your culture before you can start your healing.
              </p>
            </div>
            <div className='flex flex-row justify-center'>
              <a href='#approach'>
              <CustomButton variant="dark" size="md" className="justify-center sm:justify-start">
                The F-B-T Approach
              </CustomButton>
              </a>
            </div>
          </div>
          <div className="flex flex-row md:justify-center lg:justify-center">
            <div className="aspect-square">
              <Image
              src="/personalshot.jpeg"
              alt="Shreya Sanghvi"
              width={500}
              height={500}
              className="rounded-lg"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
