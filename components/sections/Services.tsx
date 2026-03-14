import ServiceCard from '@/components/ui/ServiceCard';
import { Flower2, MessageCircle, Sparkles } from 'lucide-react';

// Services section displaying three core offerings
// Each service card includes custom icon, description, and learn more link
export default function Services() {
  const services = [
    {
      icon: <Flower2 className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'Psychotherapy',
      subtitle: 'Emotional Healing',
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'Counselling',
      subtitle: 'Stress & Relationships',
    },
    {
      icon: <Sparkles className="w-10 h-10 text-[#C9A961]" strokeWidth={1.5} />,
      title: 'NLP Coaching',
      subtitle: 'Mindset & Growth',
    },
  ];

  return (
    <section className="bg-background py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12 text-balance">
          Services to Support Your Growth
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
