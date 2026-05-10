'use client';

import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton';

export default function Bio() {
  return (
    <section className="bg-background">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center mb-12">
          {/* Portrait Image */}
          <div className='flex flex-col gap-5'>
            <div className='text-sm text-primary'>
              <div className='flex flex-row justify-start gap-2 items-center tracking-widest'>
                <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase block mb-6">
            MY APPROACH
          </span>
              </div>
            </div>
            <div className='font-serif'>
              <p className='text-primary text-4xl md:text-xl lg:text-5xl'>Release what no longer fits
                <br />
                <em className='text-[#C9A961]'> Step into your power</em></p>
            </div>

            <div className="flex flex-col justify-center text-left">
              <p className="text-[#7A8C7E] text-sm lg:text-m md:text-lg font-serif leading-relaxed">
                I help you understand and upgrade the inner patterns that shape your emotions, choices, and identity. We all run on an internal code of beliefs and emotional habits; when it’s outdated, you feel stuck. My work helps you rewrite that code so you feel clearer and more in control. 
                <br/><br/>I reveal the emotional architecture beneath your behavior, making the invisible drivers of your decisions impossible to ignore. When you see your inner world without distortion, evolution stops being an aspiration and becomes an inevitability.
<br/><br/>
Everything begins with your State your inner energy and nervous‑system baseline. When we shift it, real change becomes possible Using the F‑B‑T Link, we trace patterns to their emotional roots and dissolve the triggers that keep old cycles alive.
<i><b>This is deep identity work belief change, emotional healing, and a return to your power.</b></i> I don’t do quick fixes. I help you reframe your story and shift the unconscious filters shaping your life.
              </p>
            </div>
            <div className='flex flex-row justify-center'>
              <a href='#approach'>
                <CustomButton variant="dark" size="md" className="justify-center sm:justify-start">
                  THE F-B-T APPROACH
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
