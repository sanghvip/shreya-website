import Image from 'next/image';
import { Check } from 'lucide-react';

// "Who I Work With" section featuring illustration and client checklist
// Displays target audience segments and the types of challenges addressed
export default function WhoIWorkWith() {
  const clientTypes = [
    'Professionals facing burnout',
    'Relationship challenges',
    'Life transitions',
    'Emotional overwhelm'
  ];

  return (
    <section className="bg-background py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Illustration */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm aspect-square bg-secondary rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="People in therapy session"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
              Who I Work With
            </h2>

            {/* Checklist */}
            <ul className="space-y-3">
              {clientTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-center gap-3 text-foreground text-base"
                >
                  <Check className="w-5 h-5 text-[#C9A961] flex-shrink-0" strokeWidth={3} />
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
