'use client';

import { CheckCircle } from 'lucide-react';

export default function Credentials() {
  const credentials = [
    {
      title: 'Registered Psychotherapist',
      issuer: 'Psychotherapy Regulatory Board of Ontario',
      year: '2020',
    },
    {
      title: 'NLP Certification',
      issuer: 'International Association of NLP',
      year: '2021',
    },
    {
      title: 'Master of Applied Psychology',
      issuer: 'University of Toronto',
      year: '2019',
    },
    {
      title: 'Certification in Trauma-Informed Practice',
      issuer: 'ISSTD - International Society for the Study of Trauma and Dissociation',
      year: '2022',
    },
    {
      title: 'CCPA Member',
      issuer: 'Canadian Counselling and Psychotherapy Association',
      year: '2020-Present',
    },
    {
      title: 'IBM Project Manager Professional Certificate',
      issuer: 'Coursera',
      year: 'Professional Certificate',
    },
    {
      title: 'GenAI for Learning and Development',
      issuer: 'Coursera',
      year: 'Certificate',
    },
    {
      title: 'Certificate in Workplace Learning and Adult Education',
      issuer: 'George Brown College, Toronto',
      year: 'Dec 2025 – Nov 2026 · In progress',
      details:
        'Coursework: Learning Facilitation & Delivery, Instructional Design & Development, Adult Learning Evaluation, Learning Needs Assessment, and eLearning.',
    },
    {
      title: 'Certificate in Project Management',
      issuer: 'Schulich School of Business, York University',
      year: 'Oct 2026 – Jan 2027 · Part-time · In progress',
    },
  ];

  return (
    <section className="bg-secondary py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center text-balance">
          Credentials & Qualifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {credentials.map((credential) => (
            <div key={credential.title} className="flex min-w-0 items-start gap-3 sm:gap-4">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#C9A961] sm:h-6 sm:w-6" />
              <div className="min-w-0 flex-1">
                <h3 className="break-words font-semibold text-foreground">{credential.title}</h3>
                <p className="text-muted-foreground text-sm">{credential.issuer}</p>
                <p className="mt-1 break-words text-xs text-muted-foreground">{credential.year}</p>
                {'details' in credential && (
                  <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground">
                    {credential.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
