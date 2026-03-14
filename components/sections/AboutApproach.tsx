'use client';

import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function AboutApproach() {
  const approaches = [
    {
      icon: <Heart className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'Compassionate Care',
      description: 'I prioritize creating a safe, non-judgmental space where you can explore your innermost thoughts and feelings without fear.',
    },
    {
      icon: <Award className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'Evidence-Based Methods',
      description: 'All interventions are grounded in research and best practices, including CBT, NLP, and psychodynamic approaches.',
    },
    {
      icon: <Users className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'Client-Centered',
      description: 'Your unique needs, values, and goals guide our therapeutic journey. I work collaboratively to create personalized solutions.',
    },
    {
      icon: <Sparkles className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'Holistic Growth',
      description: 'I support not just symptom relief, but lasting transformation in your emotional, mental, and relational wellbeing.',
    },
  ];

  return (
    <section className="bg-background py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 text-center text-balance">
          My Therapeutic Approach
        </h2>
        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          I believe in meeting you where you are and working collaboratively towards meaningful change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">{approach.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{approach.title}</h3>
              </div>
              <p className="text-foreground leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
