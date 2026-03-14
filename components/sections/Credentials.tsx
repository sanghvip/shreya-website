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
  ];

  return (
    <section className="bg-secondary py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center text-balance">
          Credentials & Qualifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((credential, index) => (
            <div key={index} className="flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-[#C9A961] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{credential.title}</h3>
                <p className="text-muted-foreground text-sm">{credential.issuer}</p>
                <p className="text-muted-foreground text-xs mt-1">{credential.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
