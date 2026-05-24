import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Events from '@/components/sections/Events';

export default function Initiative() {
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
