'use client';

import React, { useEffect, useRef, useState } from 'react';
import { User, Users, GraduationCap, Briefcase, Check } from 'lucide-react';

const audiences = [
  {
    title: "Individuals",
    icon: <User className="w-6 h-6" />,
    desc: "Adults and young people navigating the challenges of everyday life — from quiet struggles that are hard to name to acute crises that feel impossible to face alone.",
    list: [
      "Anxiety, worry, and panic attacks",
      "Depression and low mood",
      "Relationship difficulties",
      "Life transitions and identity",
      "Burnout and career stress",
      "Low self-esteem",
      "Life transitions-career relocation, divorce",
      "Anger and emotional regulation",
    ]
  },
  {
    title: "Families & Parents",
    icon: <Users className="w-6 h-6" />,
    desc: "Families navigating change, parents learning to support teenagers, and anyone who wants to build emotionally intelligent homes where people feel seen.",
    list: [
      "Parenting adolescents",
      "Co-parenting & family communication",
      "Supporting a child's emotional difficulties",
      "Understanding behaviour & boundaries",
      "Building emotional safety at home",
        "Navigating big family transitions",
        "Rebuilding parent teen connection",
        "Understanding behaviour in children"
    ]
  },
  {
    title: "Organisations & Teams",
    icon: <Briefcase className="w-6 h-6" />,
    desc: "Teams who understand that the most valuable investment they can make is in the mental health of the people who make the organisation what it is.",
    list: [
      "Employee wellbeing workshops",
      "Stress and burnout prevention",
      "Emotionally intelligent leadership",
      "Psychologically safe team culture",
      "Communication training",
      "Conflict Resolution & Communication",
      "Soft Skill Training Program",

    ]
  }
];

export default function Audience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = children.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: el, threshold: 0.6 }
    );

    children.forEach((c) => observer.observe(c));

    // On first load show the second card (Families & Parents)
    setTimeout(() => {
      const start = children[1] as HTMLElement | undefined;
      start?.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
    }, 60);

    return () => observer.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <section className="bg-white py-20 md:py-32" id="audience">
      <div className="max-w-8xl md:ml-30 md:mr-30 px-4 sm:px-6 lg:px-2">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
            Who I work with
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A2B1C] leading-tight">
            A space for <span className="italic text-[#7A8C7E]">everyone</span><br />
            in their making
          </h2>
        </div>

        {/* Mobile carousel (shows one card at a time) */}
        <div className="md:hidden">
          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto px-4 -mx-4 snap-x snap-mandatory touch-pan-x scrollbar-hide"
            role="list"
          >
            {audiences.map((aud, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-full max-w-[92%] mx-auto p-6 bg-[#FAF8F3] border border-[#EBE5D8] rounded-2xl"
                role="listitem"
              >
                <div className="flex flex-col space-y-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C9A961] border border-[#EBE5D8]">
                    {aud.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-[#1A2B1C]">{aud.title}</h3>
                    <p className="text-[#7A8C7E] text-[15px] leading-relaxed font-serif">{aud.desc}</p>
                  </div>
                  <ul className="pt-4 border-t border-[#EBE5D8] grid grid-cols-1 gap-y-3">
                    {aud.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" />
                        <span className="text-[13px] text-[#3D5E44] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {audiences.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${i === active ? 'bg-[#C9A961]' : 'bg-[#D9D9D9]'}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-12">
          {audiences.map((aud, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-12 bg-[#FAF8F3] border border-[#EBE5D8] rounded-2xl transition-all duration-500 hover:shadow-sm hover:border-[#C9A961]/30"
            >
              <div className="flex flex-col space-y-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C9A961] border border-[#EBE5D8] group-hover:bg-[#C9A961] group-hover:text-white transition-all duration-500">
                  {aud.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#1A2B1C]">
                    {aud.title}
                  </h3>
                  <p className="text-[#7A8C7E] text-[15px] leading-relaxed font-serif">
                    {aud.desc}
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-6 border-t border-[#EBE5D8]">
                  {aud.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" />
                      <span className="text-[13px] text-[#3D5E44] leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}