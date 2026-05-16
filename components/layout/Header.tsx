'use client';

import { useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about'},
    { label: 'Services', href: '/services', dropdown: [
      { label: 'Counselling', href: '/counselling' },
      { label: 'Corporate Wellness Programs', href: '/corporate-wellness' },
      { label: 'Corporate Training and Workshops', href: '/corporate-training' }
    ]},
    { label: 'Resources', href: '/resources', dropdown: [
      { label: 'Articles', href: '/articles' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Newsletters', href: '/newsletters' },
      { label: 'Subscriptions', href: '/subscriptions' }
    ]},
    { label: 'FAQ', href: '/faq' },
    { label: 'Initiative', href: '/initiative', dropdown: [
      { label: 'Events', href: '/events' },
      { label: 'Workshops', href: '/workshops' },
      { label: 'Webinar', href: '/webinar' }
    ]}
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between font-comic sans">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-10">
            <div className="w-15 h-15 flex items-center justify-center rounded-full overflow-hidden">
              <img src="/logo.png" alt="Shreya Sanghvi Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-start items-center gap-1">
              <p className="text-xl lg:text-2xl text-foreground">Shreya Sanghvi</p>
              <p className="text-sm lg:text-sm text-foreground"> Emotional Regulation | Relationship | Leadership Coaching</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='flex flex-row'>
          <div className='flex flex-row justify-end mr-5 items-center'>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="text-foreground hover:text-primary hover:underline transition-colors text-sm font-medium cursor-pointer">
                    {link.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdown.map((subLink) => (
                      <DropdownMenuItem key={subLink.label} asChild>
                        <a href={subLink.href} className="cursor-pointer hover:bg-slate-100 transition-colors">
                          {subLink.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:underline transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
          </div>

          {/* Desktop CTA Button */}
          <div className='flex flex-row'>
            <a href='https://calendly.com/shreyasanghvi/new-meeting'>
          <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-opacity-80 hover:shadow-lg transition-all text-sm font-medium">
            BOOK A FREE CALL
          </button>
          </a>

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
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 px-4 sm:px-6 lg:px-8 xl:px-12">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <div className="text-foreground text-sm font-medium py-2">
                      {link.label}
                    </div>
                    {link.dropdown.map((subLink) => (
                      <a
                        key={subLink.label}
                        href={subLink.href}
                        className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2 pl-4"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                  >
                    {link.label}
                  </a>
                )}
              </div>
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
