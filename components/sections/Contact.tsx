'use client';

import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Youtube, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-[#FAF8F3] py-20 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Information & Details */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#C9A961]"></div>
                <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                  Get in touch
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#1A2B1C] leading-[1.1]">
                Let's begin the<br />
                <span className="italic text-[#7A8C7E]">conversation</span>
              </h2>
              <div className="space-y-4 text-[#3D5E44] font-serif text-lg leading-relaxed max-w-xl">
                <p>
                  The free 15-minute intro call is genuinely free and genuinely introductory. No intake forms, no clinical questionnaires, no commitment required. 
                </p>
                <p>
                  Both of us decide whether it is the right fit for where you are right now. If it's not — we will point you toward something that is.
                </p>
              </div>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              <ContactLink 
                icon={<MapPin className="w-5 h-5" />} 
                label="Location" 
                value="Downtown Toronto · George Brown area (200 King St E) · Online across Ontario" 
              />
              <ContactLink 
                icon={<Mail className="w-5 h-5" />} 
                label="Email" 
                value="hello@neurom.in" 
              />
              <ContactLink 
                icon={<Instagram className="w-5 h-5" />} 
                label="Instagram" 
                value="@neuromco · @sunrockshreya" 
              />
              <ContactLink 
                icon={<Linkedin className="w-5 h-5" />} 
                label="LinkedIn" 
                value="Neurom · Shreya Sanghvi" 
              />
              <ContactLink 
                icon={<Youtube className="w-5 h-5" />} 
                label="YouTube" 
                value="Educational content on NLP, relationships, and leadership" 
              />
            </div>

            {/* Availability / Small Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-[#EBE5D8]">
              {[
                "Individual sessions — 7 days a week",
                "Hindi sessions available on request",
                "Corporate response within 2 business days",
                "Sliding scale & settlement referrals",
                "Neurom Circle — Monthly community group",
                "Online sessions across Ontario"
              ].map((note, i) => (
                <div key={i} className="flex items-center gap-3 text-[13px] text-[#7A8C7E]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                  {note}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#EBE5D8]">
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-2xl font-serif text-[#1A2B1C] mb-3">Book your free intro call</h3>
              <p className="text-sm text-[#7A8C7E] leading-relaxed">
                Tell us briefly what's going on—nothing you write here is part of your clinical record. It is just a starting point.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="First Name" type="text" placeholder="Your name" />
                <FormGroup label="Last Name" type="text" placeholder="Family name" />
              </div>
              <FormGroup label="Email Address" type="email" placeholder="your@email.com" />
              <FormGroup label="Phone (Optional)" type="tel" placeholder="+1 (416)" />
              
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-[#C9A961]">Focus Area</label>
                <select className="w-full bg-[#FAF8F3] border border-[#EBE5D8] rounded-sm p-4 text-sm focus:outline-none focus:border-[#C9A961] transition-colors appearance-none">
                  <option>Select a focus area</option>
                  <option>NLP & individual counselling</option>
                  <option>Relationship counselling</option>
                  <option>Leadership & career coaching</option>
                  <option>Corporate wellness enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest font-bold text-[#C9A961]">Briefly, what's on your mind?</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#FAF8F3] border border-[#EBE5D8] rounded-sm p-4 text-sm focus:outline-none focus:border-[#C9A961] transition-colors"
                  placeholder="A sentence or two is enough to help me prepare..."
                />
              </div>

              <button className="w-full py-5 bg-[#1A2B1C] text-white font-medium hover:bg-[#3A5244] transition-all duration-300 rounded-sm text-sm tracking-wide">
                Send my request — I'll respond within 24 hours
              </button>

              <p className="text-[10px] text-[#7A8C7E] text-center leading-relaxed">
                Your information is kept completely confidential. <br />
                CRPO registration in progress.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper Components
function ContactLink({ icon, label, value }) {
  return (
    <div className="flex gap-5 group">
      <div className="w-10 h-10 rounded-full bg-[#3A5244]/5 flex items-center justify-center text-[#7A8C7E] group-hover:bg-[#C9A961] group-hover:text-white transition-all duration-500 shrink-0">
        {icon}
      </div>
      <div>
        <span className="block text-[10px] uppercase tracking-widest font-bold text-[#C9A961] mb-1">{label}</span>
        <span className="text-[15px] text-[#1A2B1C] font-serif leading-snug">{value}</span>
      </div>
    </div>
  );
}

function FormGroup({ label, type, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] uppercase tracking-widest font-bold text-[#C9A961]">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-[#FAF8F3] border border-[#EBE5D8] rounded-sm p-4 text-sm focus:outline-none focus:border-[#C9A961] transition-colors"
      />
    </div>
  );
}