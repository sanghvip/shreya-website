'use client';

import { Phone, Zap, Lightbulb, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-3" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase block mb-6">
            The process
          </span>
          <h2 className="text-4xl md:text-6xl font-comic sans text-[#1A2B1C] leading-[1.1] mb-8">
            What happens ?<br />
            <span className="italic text-[#7A8C7E]">when you work with me</span>
          </h2>
          <p className="text-lg md:text-xl text-[#7A8C7E] font-comic sans leading-relaxed max-w-2xl">

Every session is a curated framework a deliberate process designed to meet specific needs, guided by the stewardship of industry experts.</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
          {[
            {
              num: "01",
              icon: Phone,
              title: "The free intro call",
              desc: "15 Minutes. We bypass the paperwork to focus on your objectives and evaluate our alignment. If we aren’t a strategic fit, I will provide a direct referral to the specific expert or resource you need."
            },
            {
              num: "02",
icon: Zap,
              title: "The Internal State",
              desc: <>We analyze your challenges to pinpoint your actual, lived experience. Through a <strong>customized approach</strong>, we ensure you feel safe and grounded before addressing the raw emotions necessary for your <strong>power shift</strong>.</>,
            },
            {
              num: "03",
              icon: Lightbulb,
              title: "The Mechanics of Change",
              desc: "Once your current patterns are identified, I introduce a cognitive shift technique curated to your needs—anchoring, submodality shift, or parts integration. You experience the change directly, rather than just discussing it."},
            {
              num: "04",
              icon: TrendingUp,
              title: "The change between sessions",
              desc: "Transformation happens between sessions. Every meeting ends with a targeted practice to turn immediate shifts into permanent habits, creating the compounding momentum needed for lasting change."
            }
          ].map((step, idx) => {
            const IconComponent = step.icon;
            return (
            <div key={idx} className="group flex flex-col space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl md:text-4xl font-comic text-[#C9A961]/40 group-hover:text-[#C9A961] transition-colors duration-500">
                  {step.num}
                </span>
                <div className="h-[1px] flex-grow bg-[#C9A961]/20 group-hover:bg-[#C9A961]/50 transition-all duration-700" />
              </div>
              <h3 className="text-xl font-comic text-[#1A2B1C] leading-tight min-h-[3rem]">
                {step.title}
              </h3>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A961]/10 group-hover:bg-[#C9A961]/20 transition-colors duration-500 mx-auto mb-2">
                <IconComponent className="w-8 h-8 text-[#C9A961] group-hover:text-[#3A5244] transition-colors duration-500" />
              </div>
              <p className="text-[#3D5E44] text-sm leading-relaxed font-comic">
                {typeof step.desc === 'string' ? step.desc : step.desc}
              </p>
            </div>
            );
          })}
        </div>

        {/* Note Box - Updated for full width and readability */}
        {/* <div className="mt-20 md:mt-32 p-8 md:p-12 lg:p-16 bg-[#3A5244]/5 border border-[#3A5244]/10 rounded-2xl w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start">
            <h4 className="text-[#C9A961] font-bold tracking-widest text-xs uppercase whitespace-nowrap pt-1.5">
              A note on how long it takes
            </h4>
            <div className="max-w-5xl">
              <p className="text-[#3D5E44] text-base md:text-lg lg:text-xl font-comic leading-relaxed italic">
                I prioritize efficient results, delivering rapid shifts within 4 sessions or deeper transformations through 12. My commitment is to provide the precise duration necessary for sustainable outcomes, ensuring integrity and focused progress.
              </p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}