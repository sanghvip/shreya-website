import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceList from '@/components/sections/Services';

export default function Events() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header Navigation */}
      <Header />
      <Events/>
      {/* Footer */}
      <Footer />
    </main>
  );
}
