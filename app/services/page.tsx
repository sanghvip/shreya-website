import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceList from '@/components/sections/Services';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
