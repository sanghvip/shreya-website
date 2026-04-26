'use client';

import Image from 'next/image';
import { Heart, Award, Users, Sparkles, ArrowRight } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const presuppositions = [
  {
    num: "01",
    title: "The map is not the territory",
    desc: "Your experience of reality is your map of it—drawn by your history and nervous system. The map is not reality. Maps can be redrawn. When you feel stuck, you are stuck in your current map, not in reality."
  },
  {
    num: "02",
    title: "Every behaviour has a positive intention",
    desc: "The anger, avoidance, or inner critic is protecting something or meeting a need. This is information. When you understand what a behaviour is protecting, you can find a better way to meet that need."
  },
  {
    num: "03",
    title: "There is no failure — only feedback",
    desc: "You did not fail; you got a result you didn't want. That result tells you what needs to change. This reframe is one of the most liberating ideas in NLP and is supported by learning science."
  },
  {
    num: "04",
    title: "You have all the resources you need",
    desc: "You are not broken. The work is about accessing what is already within your lived experience—not installing something new, but finding the peak states and emotional intelligence that were always there."
  },
  {
    num: "05",
    title: "The meaning of communication is the response you get",
    desc: "Communication is a feedback loop. If someone misunderstands you, the NLP approach is to ask 'what can I do differently?' You are responsible for your half of the loop. This is revolutionary for relationships."
  }
];

export default function AboutHero() {
  return (
    <div>
    <section className="bg-white py-20 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: The Narrative */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#C9A961]"></div>
              <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                The philosophy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2B1C] leading-tight">
              The feeling always<br />
              comes <span className="italic text-[#7A8C7E]">first</span>
            </h2>

            <div className="space-y-6 text-[#3D5E44] font-serif text-lg leading-relaxed">
              <p>
                Most approaches to personal change start in the wrong place: the rational mind. 
                'Change your thinking and your behaviour will follow.' This is almost never true — 
                because behaviour does not live in the rational brain.
              </p>
              <p>
                It lives in the nervous system, in the emotional patterns formed long before you 
                had words for them. The Neurom approach starts where you actually are — in a feeling state.
              </p>
              <p className="text-[#1A2B1C]">
                Neurom is built on the belief that <span className="italic">culturally fluent</span> mental health is a clinical necessity. 
                For South Asian Canadians navigating intersectional identity and professional ambition, 
                understanding the context changes everything.
              </p>
            </div>

            <div className="pt-4">
              <div className="font-serif text-xl italic text-[#3D5E44] mb-8">— Neurom</div>
              
              <a 
                href="#approach" 
                className="inline-flex items-center gap-2 text-[#C9A961] font-bold tracking-widest text-xs uppercase group"
              >
                The F-B-T approach 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          {/* Right Column: Presuppositions */}
          <div className="space-y-6">
            {presuppositions.map((ps, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-[#FAF8F3] border border-[#EBE5D8] rounded-sm hover:border-[#C9A961]/40 transition-all duration-500"
              >
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#C9A961] uppercase mb-3">
                  NLP Presupposition {ps.num}
                </span>
                <h3 className="text-xl font-serif text-[#1A2B1C] mb-4 leading-tight">
                  {ps.title}
                </h3>
                <p className="text-sm text-[#7A8C7E] leading-relaxed font-serif">
                  {ps.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
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
    </div>
  );
}
