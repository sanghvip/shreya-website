import { Flower2, MessageCircle } from 'lucide-react';

// Footer component with deep forest green background
// Displays logo, navigation links, certifications, and social contact options
export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Flower2 className="w-6 h-6 text-[#C9A961]" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-semibold">LOGO</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Therapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Relationship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Online Sessions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-6">
          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs">RP • NLP Certified • CCPA Member</p>
            <button
              className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
              aria-label="Ask a question on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#C9A961]" />
              <span>Ask a Question</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
