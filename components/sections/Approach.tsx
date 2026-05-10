'use client';

import React from 'react';
import { ArrowRight, Zap, RefreshCw, Layers, Target, CircleSlash } from 'lucide-react';

const methods = [
  {
    title: "NLP Anchoring — access peak states on demand",
    desc: "Used by athletes, executives, and performers worldwide. Set intentionally at the peak of a genuinely experienced positive state, fired reliably at the moments you most need access to your best self.",
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "Submodality work — change how memory feels",
    desc: "Your brain encodes every experience with qualities — size, brightness, distance. Changing those qualities changes how the experience affects you. Make the image smaller, darker — the emotional charge reduces.",
    icon: <RefreshCw className="w-5 h-5" />
  },
  {
    title: "Parts integration — resolving internal conflict",
    desc: "When part of you wants to change and part of you doesn't. Parts work finds a new strategy that meets both sets of needs. Not compromise — synthesis. When it works, change becomes effortless.",
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: "The NLP meta-model — precision language",
    desc: "A set of questions that recover the specific truth beneath generalisations and distortions in language. Precision changes the cognitive landscape immediately.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "The STOP process — interrupting triggers",
    desc: "Stop. Take a slow breath. Observe. Proceed with intention. A four-step process for catching yourself between stimulus and response. Simple to learn. Transformative with practice.",
    icon: <CircleSlash className="w-5 h-5" />
  }
];

export default function Approach() {
  return (
    <section className="bg-white md:py-3" id="approach">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row md:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Theory & Narrative */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#C9A961]"></div>
              <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                The framework
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2B1C] leading-tight">
            <span className="italic text-[#C9A961]">The Feeling Always Comes First </span><br />
            </h2>

            <div className="space-y-6 text-[#3D5E44] font-serif text-lg leading-relaxed">
              <p>
                Most therapy starts with the thought. We start with the feeling. The deepest behaviours do not live in the rational brain  they live in the nervous system, in patterns formed long before you had language to describe them.
<br/><br/>
We have spent decades treating ourselves and our workplaces like machines to be optimized. In the pursuit of efficiency, we’ve sterilized our professional lives until they feel flat, mechanical, and disconnected from the vibrancy of being human. My work begins with a simple provocation: there is a world of difference between not being dead and being alive.
              </p>  
              <p className="border-l-2 border-[#C9A961]/30 pl-6 py-2 italic text-[#1A2B1C]">
                We often try to think our way into a new life, but the feeling always comes first. My work reverses the traditional script through the F-B-T Approach: meeting the nervous system before the mind. By anchoring the body through the mechanics of NLP, we settle the pulse so that behavior and eventually thought can finally shift.
              </p>
              <p>
                I act as a philosopher of the human condition and a permission giver, bridging the gap between ancient intuitive wisdom and modern innovation. Whether for the collective or the individual, I do not offer clinical diagnoses or simplistic solutions. I offer a pathway to dismantle stasis and reclaim the courage to be truly, vibrantly alive.
              </p>
            </div>

            <a 
              href="https://calendly.com/shreyasanghvi/new-meeting" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A2B1C] text-white rounded-sm hover:bg-[#3A5244] transition-colors duration-300 font-medium group"
            >
              EXPERIENCE IT FOR YOURSELF
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="block md:hidden mt-8">
              <img
                src="/fbtapproach.png"
                alt="F-B-T Approach"
                className="w-fit h-fit rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-12">
            <div className=" flex flex-col align-center justify-center hidden md:block">
              <img
                src="/fbtapproach.png"
                alt="F-B-T Approach"
                className="md:w-500 md:h-200 rounded-xl"
              />
            </div>

            {/* Method Boxes Grid */}
            {/* <div className="grid grid-cols-1 gap-4">
              {methods.map((method, i) => (
                <div key={i} className="p-6 bg-[#FAF8F3] border border-[#EBE5D8] rounded-sm hover:border-[#C9A961]/40 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="text-[#C9A961] mt-1">{method.icon}</div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-[#1A2B1C] text-sm leading-tight">
                        {method.title}
                      </h5>
                      <p className="text-[13px] text-[#7A8C7E] leading-relaxed">
                        {method.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}