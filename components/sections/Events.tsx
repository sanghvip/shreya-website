'use client'

import React from 'react'
import EventCard from '@/components/ui/EventCard'

const EVENTS = [
    {
        id: '1',
        title: 'Luma Events',
        image: '/events/physio_seminar.jpg',
        url: 'https://luma.com/calendar/manage/cal-lI5QqXO9B0PRsoQ',
        description: "Join our comprehensive seminar covering advanced therapeutic modalities, evidence-based sports injury recovery, and patient-centered treatment design.\n\nLed by industry experts, this session focuses on integrating dry needling, modern decompression technologies, and active mobility training into daily routines. Perfect for practitioners, athletes, and anyone recovering from chronic injuries looking to optimize physical wellness."
    },
    {
        id: '2',
        title: 'Mind & Communication Mastering with NLP',
        image: '/events/nlp_workshop.jpg',
        url: '#', // Fallback URL until ready
        description: "Unlock your cognitive potential with our high-impact Neuro-Linguistic Programming immersive bootcamp.\n\nThis intensive training is designed to reframe internal narratives, build unbreakable confidence, and elevate organizational communication tactics. Learn time-tested psychological strategies used by top leaders to handle high-stress environments and foster breakthrough personal development."
    },
    {
        id: '3',
        title: 'Community Wellness & Spinal Health Drive',
        image: '/events/spinal_health.jpg',
        url: '#', // Fallback URL until ready
        description: "A public, community-focused initiative bringing preventative spinal health guidelines and ergonomic evaluations directly to you.\n\nOur team will be providing complimentary posture analysis, interactive stretching workshops, and guided strategies for mitigating lower back stress caused by modern desk environments. Open to participants of all ages and fitness backgrounds."
    },
    {
        id: '4',
        title: 'Leadership Ethics & Tactical Strategy Summit',
        image: '/events/leadership_summit.jpg',
        url: '#', // Fallback URL until ready
        description: "An executive-level seminar exploring strategic command structures, ethical decision-making, and crisis management frameworks.\n\nDrawing inspiration from historical milestones, defense policies, and real-world executive scenarios, this session provides a deep dive into driving corporate accountability, building team trust, and thriving through rapid industrial transitions."
    }
]

export default function Events() {
    // Shared style config matching your design requirements
    const targetButtonStyle = "px-4 py-2 bg-[#3A5244] text-[#FDFDFD] rounded-md text-sm font-medium hover:text-[#C9A961] transition-colors duration-200 inline-block text-center"

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {/* Visual Accent Category Header */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="w-8 h-[1px] bg-[#C9A961]"></div>
                    <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                        Events
                    </span>
                </div>

                {/* Main Page Title */}
                <div className="flex flex-row justify-center text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-serif text-primary">
                        Upcoming learning <span className="italic text-[#7A8C7E]">experiences</span>
                    </h2>
                </div>

                {/* Mobile Carousel (Horizontal Scroll Snap) */}
                <div className="md:hidden mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 scrollbar-none">
                    {EVENTS.map((e) => (
                        <div key={e.id} className="snap-center min-w-[85%] sm:min-w-[60%]">
                            <EventCard 
                                event={e} 
                                showButton={true} 
                                buttonClassName={targetButtonStyle}
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {EVENTS.map((e) => (
                        <EventCard
                            key={e.id}
                            event={e}
                            showButton={true}
                            buttonClassName={targetButtonStyle}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}