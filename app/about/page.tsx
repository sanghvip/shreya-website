import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import AboutApproach from '@/components/sections/AboutApproach';
import Credentials from '@/components/sections/Credentials';
import PersonalJourney from '@/components/sections/PersonalJourney';
import CTA from '@/components/sections/CTA';
import SectionSeparator from '@/components/ui/SectionSeparator';

export const metadata: Metadata = {
  title: 'About Shreya Sanghvi | Psychotherapist & NLP Coach',
  description:
    'Learn about Shreya Sanghvi\'s journey, credentials, and approach to psychotherapy and NLP coaching. Discover how her experience and training can support your healing.',
};

export default function About() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* About Hero Section */}
      <AboutHero />

      {/* Section Separator */}
      <SectionSeparator variant="organic" />

      {/* Therapeutic Approach Section */}
      <AboutApproach />

      {/* Section Separator */}
      <SectionSeparator variant="gradient" />

      {/* Personal Journey Section */}
      <PersonalJourney />

      {/* Section Separator */}
      <SectionSeparator variant="organic" />

      {/* Credentials Section */}
      <Credentials />

      {/* Section Separator */}
      <SectionSeparator variant="dots" />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
