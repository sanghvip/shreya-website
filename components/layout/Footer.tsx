import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="flex flex-row justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 sm:align-center md:gap-40 mb-8">
          {/* Quick Links */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/home" className="hover:text-[#C9A961] transition-colors font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#C9A961] transition-colors font-bold">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#C9A961] transition-colors font-bold">
                  Services
                </a>
              </li>
            </ul>
          </div>
          {/* Logo Section */}
          <div className="flex flex-row items-center gap-2 justify-between">
            <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden bg-[#F5F3F0]">
              <img
                src="/logo.png"
                alt="Shreya Sanghvi Logo"
                className="w-7/8 h-7/8 object-contain"
              />
            </div>
            <div>
            <p className="flex flex-row text-2xl lg:text-2xl lg:font-semibold font-comic text-white">Shreya Sanghvi</p>
          </div>
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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <a href="/home#contact">
              <button
                className="flex flex-row items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
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
