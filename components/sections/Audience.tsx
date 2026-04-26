'use client';

import React from 'react';
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
  return (
    <section className="bg-white py-20 md:py-32" id="audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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