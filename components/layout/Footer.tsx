import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:items-center md:justify-between md:text-left">
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

          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full overflow-hidden bg-[#F5F3F0]">
              <img
                src="/logo.png"
                alt="Shreya Sanghvi Logo"
                className="w-7/8 h-7/8 object-contain"
              />
            </div>
            <p className="text-xl sm:text-2xl font-serif text-white">Shreya Sanghvi</p>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <a href="/home#contact" className="w-full md:w-auto">
              <button
                className="flex w-full md:w-auto items-center justify-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
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
