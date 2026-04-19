'use client';

import { useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

// Header component featuring logo, navigation menu, and CTA button
// Includes mobile hamburger menu that toggles navigation visibility
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  return (
    <header className="bg-background border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <Flower2 className="w-8 h-8 text-[#C9A961]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Shreya Sanghvi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-opacity-90 transition-all text-sm font-medium">
            Book a Session
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-opacity-90 transition-all text-sm font-medium mt-2">
              Book a Session
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
