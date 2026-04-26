'use client';

import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: "01 · Individual",
    title: "NLP & Counselling Sessions",
    description: "One-to-one sessions combining NLP techniques with counselling depth. We work at the level where behaviour actually lives — in the nervous system, in emotional patterns, in the identity stories you tell about who you are.",
    outcomeLabel: "WHAT CLIENTS TYPICALLY EXPERIENCE",
    outcomes: [
      "The inner critic becomes significantly quieter — and less threatening",
      "Trigger responses become shorter and more navigable",
      "Access to confidence, calm, or focus in moments when it was previously unavailable",
      "Clarity about the pattern underneath the recurring problem"
    ],
    tags: ["NLP", "Anchoring", "Reframing", "Parts work", "Submodalities", "Timeline"],
    for: "Individuals experiencing stuck patterns, anxiety, people-pleasing, imposter syndrome, inner critic, confidence challenges, behavioural loops, or simply wanting to understand themselves at a deeper level."
  },
  {
    id: "02 · Relationships",
    title: "Relationship Counselling",
    description: "For individuals or couples navigating conflict cycles, attachment patterns, communication breakdown, or the slow erosion of connection over time. We work with the underlying structure of the problem.",
    outcomeLabel: "WHAT SHIFTS IN RELATIONSHIP WORK",
    outcomes: [
      "The conflict cycle becomes visible — and breakable",
      "Attachment patterns become understandable — not just frustrating",
      "Communication tools that work even when you're activated",
      "Repair becomes possible — even after significant damage"
    ],
    tags: ["Attachment", "Conflict", "Gottman", "Repair", "Boundaries"],
    for: "Individuals and couples navigating the same argument, the pursuer-withdrawer dynamic, attachment anxiety or avoidance, boundary challenges, post-conflict repair."
  },
  {
    id: "03 · Leadership",
    title: "Leadership & Change Coaching",
    description: "Leadership is an internal state problem before it is a skills problem. Coaching for leaders navigating burnout, team dynamics, performance anxiety, or the gap between knowing and doing.",
    outcomeLabel: "LEADERSHIP OUTCOMES",
    outcomes: [
      "Access to regulated, clear-headed state in high-stakes moments",
      "Understanding of own emotional contagion and how it affects the team",
      "Framework for giving feedback without triggering threat responses",
      "Clearer leadership identity — who you are, not just what you do"
    ],
    tags: ["Leadership", "Burnout", "EI", "State management", "SCARF"],
    for: "Leaders, managers, and professionals in transition. Particularly effective for South Asian professionals navigating dual-identity pressure and performance anxiety."
  },
  {
    id: "04 · Corporate",
    title: "Corporate Wellness & L&D",
    description: "Workplace mental health programmes that combine clinical depth with evidence-based adult learning design. Workshops, lunch-and-learns, and EAP partnerships for organisations ready to address the emotional layer of performance.",
    outcomeLabel: "CORPORATE PROGRAMME OUTCOMES",
    outcomes: [
      "EAP utilisation increases among South Asian employees",
      "Teams leave with tools they can actually use",
      "Leadership teams understand the emotional climate they are creating",
      "Measurable reduction in conflict-related absenteeism"
    ],
    tags: ["EAP", "Workshops", "Bloom's Taxonomy", "Andragogy", "Gamification"],
    for: "HR directors, L&D teams, and People & Culture leaders in Toronto."
  },
  {
    id: "05 · Career",
    title: "Career Counselling",
    description: "For professionals at genuine transition points — newcomers navigating Canadian pathways or experienced leaders questioning their next chapter. Combines career methodology with NLP tools.",
    outcomeLabel: "CAREER WORK OUTCOMES",
    outcomes: [
      "Clear values-based direction under pressure",
      "Interview confidence built through NLP anchoring",
      "Clarity on transferable skills for internationally trained professionals",
      "A concrete next step that feels right, not just correct"
    ],
    tags: ["Career transitions", "Values clarity", "Newcomers", "Identity", "Interview prep"],
    for: "International professionals, newcomers to Canada, and anyone at a meaningful career crossroads."
  },
  {
    id: "06 · Gratitude",
    title: "Gratitude Practice & Workshops",
    description: "A research-grounded guide to gratitude as a transformative daily practice. Group workshops combining neuroscience with NLP anchoring and practical daily tools.",
    outcomeLabel: "WHAT PARTICIPANTS LEAVE WITH",
    outcomes: [
      "A specific daily gratitude practice ritual",
      "A gratitude anchor set using NLP",
      "Understanding of why gratitude rewires the brain",
      "Community — other people doing the same practice"
    ],
    tags: ["Gratitude", "Mindfulness", "Neuroscience", "Group work", "Resilience"],
    for: "Individuals seeking an entry point into wellbeing and teams building a culture of appreciation."
  }
];

export default function Services() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-20">
          <p className='text-[#C9A961] font-bold tracking-[0.2em] text-xs uppercase'>WHAT WE OFFER</p>
          <h2 className="text-4xl lg:text-6xl md:text-5xl font-serif text-primary text-center leading-tight text-balance">
            Work that meets you
            <br />where you 
            <span className='text-[#7A8C7E] italic'> actually are</span>
          </h2>
          <p className="max-w-2xl text-[#7A8C7E] text-center text-lg font-serif leading-relaxed mt-2">
            Every service begins with a free 15-minute intro call to offer meaningful support at a pace that works for you.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-black/10 pt-12">
          {services.map((svc, index) => (
            <div 
              key={index} 
              className="group flex flex-col space-y-6 p-8 -m-8 rounded-2xl transition-all duration-500 hover:bg-[#3A5244]/5 border border-transparent"
            >
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#7A8C7E] block font-medium">
                  {svc.id}
                </span>
                <div className="w-12 h-[1px] bg-[#C9A961] transition-all duration-700 group-hover:w-24" />
                <h3 className="text-3xl font-serif text-primary leading-tight font-bold transition-colors duration-500 group-hover:text-[#7A8C7E]">
                  {svc.title}
                </h3>
              </div>

              <p className="text-black text-[15px] leading-relaxed font-serif">
                {svc.description}
              </p>

              <div className="space-y-4 py-4">
                <p className="text-[10px] font-bold tracking-widest text-[#C9A961] uppercase">
                  {svc.outcomeLabel}
                </p>
                <ul className="space-y-3 font-serif">
                  {svc.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-[#C9A961] mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="text-[14px] text-primary leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {svc.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 border border-black/20 rounded-sm text-[10px] uppercase tracking-wider text-[#7A8C7E] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[13px] leading-relaxed text-primary pt-4 border-t border-black/10 font-serif italic mt-auto">
                <strong className="text-primary not-italic font-bold">For: </strong>
                {svc.for}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}