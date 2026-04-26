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
    <section className="bg-white py-20 md:py-32" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Theory & Narrative */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#C9A961]"></div>
              <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                The framework
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#1A2B1C] leading-tight">
              The <span className="italic text-[#C9A961]">F-B-T Link</span> —<br />
              Feeling, Behaviour, Thought
            </h2>

            <div className="space-y-6 text-[#3D5E44] font-serif text-lg leading-relaxed">
              <p>
                Most therapeutic models follow the Cognitive Triangle: Thought → Feeling → Behaviour. 
                Change your thinking, and your emotions follow. This is theoretically sound — 
                and practically unhelpful for the majority of people who seek it.
              </p>
              <p>
                Because when you are triggered or flooded, your rational mind is the last thing available to you. 
                No amount of CBT worksheets can reach a nervous system in threat mode.
              </p>
              <p className="border-l-2 border-[#C9A961]/30 pl-6 py-2 italic text-[#1A2B1C]">
                The F-B-T Link reverses the sequence. Start at the Feeling. From that understanding, 
                the Behaviour becomes navigable. From the behavioural shift, the Thought transforms naturally.
              </p>
              <p>
                Every NLP technique works at the level of state before it works at the level of cognition. 
                The F-B-T Link makes this explicit and teachable.
              </p>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A2B1C] text-white rounded-sm hover:bg-[#3A5244] transition-colors duration-300 font-medium group"
            >
              Experience it — free intro call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: Steps & Methods */}
          <div className="space-y-12">
            
            {/* F-B-T Visual Steps */}
            <div className="space-y-4">
              {[
                { l: 'F', w: 'Feeling', t: 'The entry point. NLP begins here — in the nervous system response — before offering any technique.' },
                { l: 'B', w: 'Behaviour', t: 'The visible pattern. Interrupt automatic outbursts or withdrawal loops with structural shifts.' },
                { l: 'T', w: 'Thought', t: 'The natural transformation. Change occurs not through willpower, but through alignment.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl transition-all duration-500 hover:bg-[#3A5244]/5 border border-transparent hover:border-[#3A5244]/10 group">
                  <div className="text-4xl md:text-5xl text-primary/30 rounded-lg font-serif group-hover:text-[#C9A961] transition-colors duration-500 w-12 text-center">
                    {step.l}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#1A2B1C] uppercase tracking-widest text-xs">
                      {step.w}
                    </h4>
                    <p className="text-sm text-[#3D5E44] leading-relaxed font-serif">
                      {step.t}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Method Boxes Grid */}
            <div className="grid grid-cols-1 gap-4">
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}