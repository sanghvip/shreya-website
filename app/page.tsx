import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Services from '@/components/sections/Services';
import WhoIWorkWith from '@/components/sections/WhoIWorkWith';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import SectionSeparator from '@/components/ui/SectionSeparator';

export const metadata: Metadata = {
  title: 'Shreya Sanghvi | Psychotherapist & NLP Coach',
  description:
    'Find clarity, healing, and transformation. Online therapy and coaching sessions across Canada with Shreya Sanghvi, a registered psychotherapist and NLP certified coach.',
};

// Main landing page for Shreya Sanghvi psychotherapy practice
// Combines all modular components in a cohesive, responsive layout
export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* Impact Section */}
      <Impact />


      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* Services Section */}
      <Services />

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* Who I Work With Section */}
      <WhoIWorkWith />

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
