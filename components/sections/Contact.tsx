'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Linkedin, Youtube, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    focusArea: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone) {
      // Validates format like 1-1234567890 or +1-1234567890
      if (!/^\+?[0-9]+-[0-9]+$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please use format: countrycode-number (e.g., 1-1234567890)';
      }
    }

    if (!formData.focusArea || formData.focusArea === 'Select a focus area') {
      newErrors.focusArea = 'Please select a focus area';
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please let us know what's on your mind";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // For phone field, restrict input to valid characters
    if (name === 'phone') {
      const sanitizedValue = value.replace(/[^0-9+\s\-()]/g, '');
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const submitData = new FormData();
      
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      
      if (!accessKey) {
        throw new Error('Our messaging service is currently undergoing maintenance. Please try again in a few minutes or contact us directly via email.');
      }

      submitData.append("access_key", accessKey);
      submitData.append("firstName", formData.firstName);
      submitData.append("lastName", formData.lastName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("focusArea", formData.focusArea);
      submitData.append("message", formData.message);
      // Optional: Add a subject for the email
      submitData.append("subject", `New Intro Call Request from ${formData.firstName} ${formData.lastName}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        focusArea: '',
        message: ''
      });

      // Redirect to Calendly after a short delay to show the success message
      setTimeout(() => {
        window.location.href = 'https://calendly.com/shreyasanghvi/new-meeting';
      }, 2000);

    } catch (error: any) {
      console.error('Submission error:', error);
      setErrors({ submit: error.message || 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-[#3A5244]/10 rounded-full flex items-center justify-center mx-auto text-[#3A5244]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-[#1A2B1C] mb-2">Request Sent!</h3>
                  <p className="text-[#7A8C7E] mb-4">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <p className="text-sm text-[#C9A961] font-medium animate-pulse">
                    Redirecting you to schedule your call...
                  </p>
                </div>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-[#C9A961] font-bold text-xs uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-2xl font-serif text-[#1A2B1C] mb-3">Book your free intro call</h3>
                  <p className="text-sm text-[#7A8C7E] leading-relaxed">
                    Tell us briefly what's going on—nothing you write here is part of your clinical record. It is just a starting point.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormGroup 
                      label="First Name" 
                      type="text" 
                      placeholder="Your name" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                    />
                    <FormGroup 
                      label="Last Name" 
                      type="text" 
                      placeholder="Family name" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                    />
                  </div>
                  <FormGroup 
                    label="Email Address" 
                    type="email" 
                    placeholder="your@email.com" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <FormGroup 
                    label="Phone (Optional)" 
                    type="tel" 
                    placeholder="1-1234567890" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required={false}
                  />
                  
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-[#C9A961]">
                      Focus Area <span className="text-red-500 opacity-50">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="focusArea"
                        value={formData.focusArea}
                        onChange={handleChange}
                        className={`w-full bg-[#FAF8F3] border ${errors.focusArea ? 'border-red-500' : 'border-[#EBE5D8]'} rounded-sm p-4 text-sm focus:outline-none focus:border-[#C9A961] transition-colors appearance-none`}
                      >
                        <option value="">Select a focus area</option>
                        <option value="NLP & individual counselling">NLP & individual counselling</option>
                        <option value="Relationship counselling">Relationship counselling</option>
                        <option value="Leadership & career coaching">Leadership & career coaching</option>
                        <option value="Corporate wellness enquiry">Corporate wellness enquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-[#7A8C7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {errors.focusArea && (
                      <div className="flex items-center gap-1.5 text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <p className="text-[10px] font-medium">{errors.focusArea}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-[#C9A961]">
                      Briefly, what's on your mind? <span className="text-red-500 opacity-50">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-[#FAF8F3] border ${errors.message ? 'border-red-500' : 'border-[#EBE5D8]'} rounded-sm p-4 text-sm focus:outline-none focus:border-[#C9A961] transition-colors`}
                      placeholder="A sentence or two is enough to help me prepare..."
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1.5 text-red-500 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <p className="text-[10px] font-medium">{errors.message}</p>
                      </div>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-sm flex items-center gap-3 text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {errors.submit}
                    </div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-[#1A2B1C] text-white font-medium hover:bg-[#3A5244] transition-all duration-300 rounded-sm text-sm tracking-wide flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send my request — I'll respond within 24 hours"
                    )}
                  </button>

                  <p className="text-[10px] text-[#7A8C7E] text-center leading-relaxed">
                    Your information is kept completely confidential. <br />
                    CRPO registration in progress.
                  </p>
                </form>
              </>
            )}
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

function FormGroup({ 
  label, 
  type, 
  placeholder, 
  name, 
  value, 
  onChange, 
  error, 
  required = true 
}: { 
  label: string; 
  type: string; 
  placeholder: string; 
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] uppercase tracking-widest font-bold text-[#C9A961]">
        {label} {required && <span className="text-red-500 opacity-50">*</span>}
      </label>
      <input 
        name={name}
        value={value}
        onChange={onChange}
        type={type} 
        placeholder={placeholder}
        className={`w-full bg-[#FAF8F3] border ${error ? 'border-red-500' : 'border-[#EBE5D8]'} rounded-sm p-4 text-sm focus:outline-none focus:border-[#C9A961] transition-colors`}
      />
      {error && (
        <div className="flex items-center gap-1.5 text-red-500 mt-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <p className="text-[10px] font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}