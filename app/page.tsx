import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/app/services/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import SectionSeparator from '@/components/ui/SectionSeparator';
import Bio from '@/components/sections/Bio';
import HowItWorks from '@/components/sections/HowItWorks';
import Approach from '@/components/sections/Approach';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Shreya Sanghvi | Psychotherapist & NLP Coach',
  description:
    'Find clarity, healing, and transformation. Online therapy and coaching sessions across Canada with Shreya Sanghvi, a registered psychotherapist and NLP certified coach.',
};

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Section Separator */}
      <SectionSeparator variant="line" />
      
      {/* Bio Section */}
      <Bio/>

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* Services Section */}
      <HowItWorks />

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      {/* Services Section */}
      <Services />

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      <Approach/>

      {/* Section Separator */}
      <SectionSeparator variant="line" />

      <Contact/>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
