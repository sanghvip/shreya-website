'use client';

import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { submitContactForm } from '@/lib/web3forms';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  focusArea: string;
  message: string;
};

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  focusArea: 'NLP & individual counselling',
  message: '',
};

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const modalShown = window.sessionStorage.getItem('lead-modal-shown');
    if (modalShown) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 700);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const closeModal = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('lead-modal-shown', 'true');
    }
    setIsOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/[^0-9+\s\-()]/g, '') : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        formData.email
      )
    ) {
      nextErrors.email = 'Please enter a valid email address';
    }

    if (!formData.focusArea.trim()) {
      nextErrors.focusArea = 'Please select a focus area';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell us how we can help';
    }

    return nextErrors;
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
      await submitContactForm(
        formData,
        `New Lead Capture Form Submission from ${formData.firstName} ${formData.lastName}`.trim()
      );

      setIsSuccess(true);
      setFormData(initialForm);
      setTimeout(() => {
        closeModal();
      }, 1800);
    } catch (error) {
      console.error('Lead modal submission error:', error);
      setErrors({
        submit:
          error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#112E2B]/70 p-3 backdrop-blur-sm sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Lead capture form"
        className="relative w-full max-w-[31rem] max-h-[85vh] overflow-y-auto overscroll-contain rounded-[22px] border border-[#E7DFD4] bg-[#FAF8F3] shadow-[0_25px_80px_rgba(17,46,43,0.25)] sm:rounded-[28px] md:max-w-2xl"
      >
        <button
          type="button"
          aria-label="Close lead form"
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#E7DFD4] bg-white text-[#1A2B1C] transition-colors hover:border-[#C9A961] hover:text-[#C9A961] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="p-4 sm:p-8 md:p-10">
          {isSuccess ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#3A5244]/10 text-[#3A5244]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 font-serif text-3xl text-[#1A2B1C]">Request received</h3>
              <p className="max-w-md text-base leading-relaxed text-[#7A8C7E]">
                Thank you for reaching out. We will be in touch soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center md:text-left">
                <div className="mb-4 flex items-center justify-center gap-4 md:justify-start">
                  <div className="h-px w-10 bg-[#C9A961]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9A961]">
                    Let’s talk
                  </span>
                </div>
                <h2 className="font-serif text-3xl text-[#1A2B1C] sm:text-4xl md:text-5xl">
                  Book your free <span className="italic text-[#7A8C7E]">intro call</span>
                </h2>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    placeholder="Your first name"
                  />
                  <Field
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    placeholder="Your last name"
                  />
                </div>

                <Field
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="your@email.com"
                />

                <Field
                  label="Phone (Optional)"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="1-1234567890"
                  required={false}
                />

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A961]">
                    Focus Area
                  </label>
                  <div className="relative">
                    <select
                      name="focusArea"
                      value={formData.focusArea}
                      onChange={handleChange}
                      className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-[#1A2B1C] outline-none transition-colors focus:border-[#C9A961] ${
                        errors.focusArea ? 'border-red-500' : 'border-[#E7DFD4]'
                      }`}
                    >
                      <option value="NLP & individual counselling">NLP & individual counselling</option>
                      <option value="Relationship counselling">Relationship counselling</option>
                      <option value="Leadership & career coaching">Leadership & career coaching</option>
                      <option value="Corporate wellness enquiry">Corporate wellness enquiry</option>
                      <option value="Career Counselling">Career Counselling</option>
                      <option value="Speaking & workshops">Speaking & workshops</option>
                      <option value="Gratitude Practice & Workshops">Gratitude Practice & Workshops</option>
                    </select>
                  </div>
                  {errors.focusArea && (
                    <p className="flex items-center gap-1 text-[10px] text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.focusArea}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A961]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="A sentence or two is enough to help me prepare..."
                    className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-[#1A2B1C] outline-none transition-colors focus:border-[#C9A961] ${
                      errors.message ? 'border-red-500' : 'border-[#E7DFD4]'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-[10px] text-red-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {errors.submit && (
                  <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    {errors.submit}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-md bg-[#1A2B1C] px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-[#3A5244] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    'Send my request — I will respond within 24 hours'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
  required = true,
}: {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A961]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border bg-white px-4 py-3 text-sm text-[#1A2B1C] outline-none transition-colors focus:border-[#C9A961] ${
          error ? 'border-red-500' : 'border-[#E7DFD4]'
        }`}
      />
      {error && (
        <p className="flex items-center gap-1 text-[10px] text-red-500">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
