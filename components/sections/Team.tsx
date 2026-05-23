'use client'

import React, { useState } from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog'

const TEAM = [
    { 
        id: '1', 
        name: 'Dr. Mehak Jain(PT)', 
        designation: 'DHA-licensed Physiotherapist', 
        profilePic: '/mehak_profile.png',
        description: "Dr. Mehak Jain is a DHA-licensed Physiotherapist and MSOTPT-registered rehabilitation professional with clinical experience across India and Dubai in neurological, musculoskeletal, sports, pediatric, and community-based rehabilitation. She specializes in evidence-based physiotherapy, advanced therapeutic modalities, functional recovery planning, and patient-centered rehabilitation programs. \n\nA University Gold Medallist in Bachelor of Physiotherapy from Pravara Institute of Medical Sciences, she has worked in both clinical and home-based rehabilitation settings, delivering customized treatment plans for complex neurological and orthopedic conditions. Her expertise includes dry needling, robotic spinal decompression, Tecar therapy, shockwave therapy, cupping, IASTM, and exercise prescription. \n\nDr. Jain has contributed to multidisciplinary rehabilitation programs at Atharv Ability and Physioridham, while also mentoring physiotherapy interns and collaborating with healthcare teams to improve patient outcomes. \n\nShe further strengthened her clinical exposure through a neuro and sports rehabilitation observership at Sir H. N. Reliance Foundation Hospital and participation in rural spine rehabilitation initiatives with SEARCH Foundation.Her profile reflects a strong blend of clinical excellence, rehabilitation technology exposure, academic achievement, and compassionate patient care, making her well-suited for advanced physiotherapy and rehabilitation roles globally."
    },
    { 
        id: '2', 
        name: 'Gregg Hannah', 
        designation: 'NeuroLinguistic Programming Practitioner', 
        profilePic: '/gregg_profile.jpg',
        description: "\tGregg Hannah was born and raised in Winnipeg, Manitoba. He joined the Canadian Forces in 1971 and attended Royal Roads Military College and the Royal Military College of Canada. He graduated in 1975 with a Bachelor of Arts (Honours), majoring in English and Philosophy. He received his Master of Arts in Defence Studies with a specialization in the Ethics of War, from King's College, University of London, England in 1995. \n\n\tBeing from the prairies, Gregg felt that a life at sea was only proper so he joined the Naval Element of the Canadian Forces. After being awarded his bridge watchkeeping certificate, Gregg held appointments at sea in HMC Ships Algonquin, Margaree, Terra Nova, and Fort Steele. He qualified as a Shipboard Air Controller, Destroyer Weapons Officer, Combat Control Officer, and Advanced Communications Electronic Warfare Officer, and has an Advanced Surface Warfare Qualification from the Royal Navy. He has held appointments as Executive Officer of HMC Ships, Margaree, Algonquin, and Terra Nova and Commanding Officer of HMCS Porte St. Jean. During the Gulf War in 1990-1991, he served ashore as the Executive Officer of the Canadian Maritime Logistics Detachment in Manama, Bahrain, from mid-September until November 1990 and was then posted afloat as the Task Group Operations Officer on the staff of the Commander, Canadian Naval Task Group Middle East for the duration of the war. \n\n\tGregg has held appointments ashore in Maritime Command Headquarters in Halifax as the Executive Assistant to the Chief of Staff Operations and Staff Officer for Officer Professional Development; in the Maritime Warfare Center, Halifax as the coordinator of national maritime operational exercises and as the Senior Instructor, Anti-Submarine Warfare; as the Deputy Commandant of the Naval Operations School, Halifax, and as a staff officer on the Maritime Staff in National Defence Headquarters, Ottawa as a Naval Requirements desk officer and as a Naval Force Development desk officer. He has had two exchange postings with the Royal Navy, one as an instructor of surface warfare tactics at HMS Dryad, School of Maritime Operations near Portsmouth, and the other as a student on the Royal Naval Staff Course at Greenwich. \n\n\tIn 1999, Gregg was appointed to the faculty of the Royal Military College of Canada, where he taught courses in ethics, military history, defence policy, the history of science and technology, and strategy. He was appointed to the faculty of the Canadian Forces College, Toronto in 2004 where he was the Senior Curriculum Developer officer responsible for developing and teaching curriculum in Leadership and Ethics, and Command and Management, and was the College subject matter expert in leadership, ethics, professional ethics, and the Law of Armed Conflict. Gregg retired from the Royal Canadian Navy in 2013 with the Rank of Commander."
    }
]

export default function Team() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<any | null>(null)

    function handleLearnMore(member: any) {
        setSelected(member)
        setOpen(true)
    }

    // Shared style config matching your requirements: bg-3A5244, text-FDFDFD, hover:text-C9A961
    const targetButtonStyle = "px-4 py-2 bg-[#3A5244] text-[#FDFDFD] rounded-md text-sm font-medium hover:text-[#C9A961] transition-colors duration-200"

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="w-8 h-[1px] bg-[#C9A961]"></div>
                    <span className="text-[#C9A961] font-bold tracking-[0.3em] text-xs uppercase">
                        Team
                    </span>
                </div>
                <div className="flex flex-row justify-center text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-serif text-primary">
                        The team who makes it <span className="italic text-[#7A8C7E]">possible</span>
                    </h2>
                </div>

                {/* Mobile carousel (horizontal scroll snap) */}
                <div className="md:hidden mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4">
                    {TEAM.map((m) => (
                        <div key={m.id} className="snap-center min-w-[80%]">
                            <TeamMemberCard 
                                member={m} 
                                showLearnMore={false} 
                                learnMoreClassName={targetButtonStyle}
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop grid */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {TEAM.map((m) => (
                        <TeamMemberCard
                            key={m.id}
                            member={m}
                            showLearnMore={true}
                            onLearnMore={handleLearnMore}
                            learnMoreClassName={targetButtonStyle}
                        />
                    ))}
                </div>

                {/* Dialog for desktop Learn more */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="max-w-md md:max-w-2xl">
                        <DialogTitle className="text-2xl font-serif">{selected?.name}</DialogTitle>
                        <DialogDescription asChild>
                            <div>
                                <p className="mb-4 font-medium text-primary">{selected?.designation}</p>
                                
                                {/* Scrollable, line-break honoring container */}
                                <div className="max-h-[55vh] overflow-y-auto pr-2 whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                                    {selected?.description || 'A brief introduction about this team member will appear here.'}
                                </div>
                            </div>
                        </DialogDescription>
                        <div className="mt-4 flex justify-end">
                            <DialogClose className={targetButtonStyle}>
                                Close
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}