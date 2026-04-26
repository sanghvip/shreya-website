'use client';

export default function HowItWorks() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-32" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase block mb-6">
            The process
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A2B1C] leading-[1.1] mb-8">
            What happens<br />
            <span className="italic text-[#7A8C7E]">when you work with us</span>
          </h2>
          <p className="text-lg md:text-xl text-[#7A8C7E] font-serif leading-relaxed max-w-2xl">
            Every session follows a deliberate structure — not a script, but a framework that ensures the work goes to the level where change actually happens.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
          {[
            {
              num: "01",
              title: "The free intro call",
              desc: "15 minutes. No forms, no pressure. You tell us briefly what's going on. We explain what Neurom does and how. Both of us decide if it's the right fit. If it isn't — we'll tell you honestly who would serve you better."
            },
            {
              num: "02",
              title: "Session one: the feeling",
              desc: "The first session begins with the F-B-T Link: we start at the feeling. Not a questionnaire — a real conversation. What is the emotional state that is most getting in your way? The session stays here until we understand it."
            },
            {
              num: "03",
              title: "The NLP work",
              desc: "Once the feeling is understood, we introduce the specific NLP technique relevant to you — anchoring, submodality shift, or parts integration. You experience it, not just understand it."
            },
            {
              num: "04",
              title: "The change between sessions",
              desc: "The 23 hours between sessions are where real change happens. Every session ends with a specific homework practice. You bring what you noticed back. The work compounds. This is how lasting change is built."
            }
          ].map((step, idx) => (
            <div key={idx} className="group flex flex-col space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl md:text-4xl font-serif text-[#C9A961]/40 group-hover:text-[#C9A961] transition-colors duration-500">
                  {step.num}
                </span>
                <div className="h-[1px] flex-grow bg-[#C9A961]/20 group-hover:bg-[#C9A961]/50 transition-all duration-700" />
              </div>
              <h3 className="text-xl font-serif text-[#1A2B1C] leading-tight min-h-[3rem]">
                {step.title}
              </h3>
              <p className="text-[#3D5E44] text-sm leading-relaxed font-serif">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note Box - Updated for full width and readability */}
        <div className="mt-20 md:mt-32 p-8 md:p-12 lg:p-16 bg-[#3A5244]/5 border border-[#3A5244]/10 rounded-2xl w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start">
            <h4 className="text-[#C9A961] font-bold tracking-widest text-xs uppercase whitespace-nowrap pt-1.5">
              A note on how long it takes
            </h4>
            <div className="max-w-5xl">
              <p className="text-[#3D5E44] text-base md:text-lg lg:text-xl font-serif leading-relaxed italic">
                "Some patterns shift noticeably in 3–4 sessions. Others — particularly deep attachment patterns, identity-level beliefs, or long-standing emotional responses — require 8–12 sessions to work properly. We will always be honest about what we think the work requires. We do not prolong sessions unnecessarily. We do not cut them short when they need more time."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}