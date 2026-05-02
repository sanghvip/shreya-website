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
          <div className="flex flex-col items-center gap-2">
            <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden bg-[#F5F3F0]">
              <img
                src="/logo.png"
                alt="Shreya Sanghvi Logo"
                className="w-7/8 h-7/8 object-contain"
              />
            </div>
          </div>
          <div>
            <p className="text-2xl lg:text-2xl lg:font-semibold font-serif text-white">Shreya Sanghvi</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/home" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:opacity-80 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:opacity-80 transition-opacity">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          {/* <div>
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
          </div> */}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/home#contact" className="hover:opacity-80 transition-opacity">
                  Email
                </a>
              </li>
            </ul>
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/home#contact">
              <button
                className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
                aria-label="Ask a question on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#C9A961]" />
                <span>Ask a Question</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
