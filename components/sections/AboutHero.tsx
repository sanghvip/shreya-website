'use client';

import Image from 'next/image';
import CustomButton from '../ui/CustomButton';
import { Mail, Instagram, ArrowRight, Mic } from 'lucide-react';
// import Team from './Team';


export default function AboutHero() {
  const credentials = [
    {
      title: "NLP Certification — International Association of NLP",
      desc: "Certified in 2021, with training in anchoring, submodalities, parts work, and timeline work."
    },
    {
      title: "Certified Career Counsellor",
      desc: "Specialist in career transitions, newcomer pathway navigation, and professional identity building."
    },
    {
      title: "IBM Project Manager Professional Certificate",
      desc: "Professional certificate completed through Coursera."
    },
    {
      title: "Certificate in Workplace Learning and Adult Education",
      desc: "George Brown College, Toronto · In progress (Dec 2025–Nov 2026). Coursework includes Learning Facilitation & Delivery, Instructional Design & Development, Adult Learning Evaluation, Learning Needs Assessment, and eLearning."
    },
    {
      title: "Certificate in Project Management",
      desc: "Schulich School of Business, York University · Part-time, in progress (Oct 2026–Jan 2027)."
    },
    {
      title: "TEDx Circle Speaker",
      desc: "Speaker on authenticity, growth, and the internal conditions that make transformation possible."
    },
  ];

  const tags = ["NLP", "F-B-T Link", "Adult Learning", "Bloom's Taxonomy", "Andragogy", "Career Counselling", "Attachment Theory", "Gottman Method", "Polyvagal Theory", "Hindi · English"];
  return (
    <div>
      <section className="bg-[#FAF8F3] py-20 md:py-20" id="practitioner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Image & Badge (Span 5) */}
            <div className="lg:col-span-5 relative">
              {/* Main Container Box with 1A2B1C/40 background */}
              <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-primary/40 rounded-2xl gap-8 group">

                {/* Image Section */}
                <div className="relative w-full max-w-md md:max-w-lg aspect-square">
                  <Image
                    src="/personalshotdesk.jpeg"
                    alt="Shreya Sanghvi - Psychotherapist and NLP Coach"
                    width={600}
                    height={600}
                    priority
                    className="rounded-lg object-cover w-full h-full shadow-lg"
                  />
                </div>

                {/* Quote Section - Now in flow below the image */}
                <div className="text-center text-white max-w-sm">
                  <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                    "From chaos to calm — juggling life, work & everything in between."
                  </p>
                </div>
              </div>

              {/* Location Badge - Kept relative to the outer container */}
              {/* <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-6 rounded-xl shadow-lg border border-[#EBE5D8] max-w-[180px] z-20">
                <div className="text-xl font-serif text-[#1A2B1C] leading-none mb-1">Toronto</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#C9A961]">
                  Downtown · Online
                </div>
              </div> */}
            </div>

            {/* Right Column: Bio & Credentials (Span 7) */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-[#C9A961]"></div>
                  <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                    The practitioner
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-primary">
                  Shreya <span className="italic text-[#7A8C7E]">Sanghvi</span>
                </h2>
                <div className="space-y-6 text-[#3D5E44] font-serif text-lg leading-relaxed">
                  <p>
                    Shreya Sanghvi is a certified NLP practitioner, and adult learning specialist.
                    She is currently completing the Workplace Learning programme at George Brown College and is a TEDx Circle Speaker on authenticity and growth.
                  </p>
                  <p>
                    Originally from India, where she founded India's first web-based psychology services platform,
                    Shreya now works with individuals and couples in Toronto. Her practice sits at a rare intersection:
                    clinical depth, cultural fluency, and the lived experience of navigating two worlds.
                  </p>
                </div>
              </div>

              <section className="border-t border-[#EBE5D8] pt-8" aria-labelledby="about-credentials-heading">
                <h3
                  id="about-credentials-heading"
                  className="mb-6 font-serif text-2xl text-primary sm:text-3xl"
                >
                  Credentials &amp; Qualifications
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                {credentials.map((cred) => (
                  <div key={cred.title} className="group flex min-w-0 gap-3 sm:gap-4">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A961] transition-transform duration-300 group-hover:scale-150" />
                    <div className="min-w-0 space-y-1">
                      <h4 className="text-sm font-bold uppercase leading-tight tracking-wide text-[#1A2B1C]">
                        {cred.title}
                      </h4>
                      <p className="break-words text-[13px] leading-relaxed text-[#7A8C7E]">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                ))}
                </div>
              </section>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#EBE5D8] rounded-sm text-[10px] uppercase tracking-widest text-[#7A8C7E] bg-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <Team/> */}
      <section className="relative overflow-hidden bg-[#1A2B1C] py-20 md:py-32">
        {/* Subtle Background Texture/Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7A8C7E] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8">

            <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
              The First Step
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              You do not have to wait<br />
              until things get <span className="italic text-[#7A8C7E]">worse</span>
            </h2>

            <p className="text-lg md:text-xl text-[#A8C4AE] font-serif leading-relaxed">
              Reaching out is not a sign of weakness. It is one of the most courageous things a person can do for themselves and those they love.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-4 w-full sm:w-auto">
              <a
                href="/home#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-3 bg-white text-[#1A2B1C] hover:bg-[#FAF8F3] transition-all duration-300 rounded-sm font-medium text-sm group"
              >
                <Mail className="w-4 h-4" />
                Email me directly
              </a>

              <a
                href="/home?speaker=true#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-3 bg-[#3A5244] text-white hover:bg-[#4A6354] transition-all duration-300 rounded-sm font-medium text-sm border border-[#7A8C7E]/20 group"
              >
                <Mic className="w-4 h-4" />
                Book me as a speaker
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://www.instagram.com/neuromco/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-6 py-3 bg-[#1A2B1C] text-white hover:bg-[#4A6354] transition-all duration-300 rounded-sm font-medium text-sm border border-[#7A8C7E]/20 group"
              >
                <Instagram className="w-4 h-4" />
                DM on Instagram
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="text-[11px] text-[#7A8C7E] tracking-widest uppercase mt-8">
              Response time: within 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
