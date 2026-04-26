import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceList from '@/app/services/Services';

export default function Services() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Header Navigation */}
      <Header />

      <ServiceList/>
      {/* Footer */}
      <Footer />
    </main>
  );
}
