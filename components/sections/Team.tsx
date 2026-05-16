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
    { id: '1', name: 'Member One', designation: 'Designation' },
    { id: '2', name: 'Member Two', designation: 'Designation' },
    { id: '3', name: 'Member Three', designation: 'Designation' },
    { id: '4', name: 'Member Four', designation: 'Designation' },
    { id: '5', name: 'Member Five', designation: 'Designation' },
]

export default function Team() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<any | null>(null)

    function handleLearnMore(member: any) {
        setSelected(member)
        setOpen(true)
    }

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
                            <TeamMemberCard member={m} showLearnMore={false} />
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
                        />
                    ))}
                </div>

                {/* Dialog for desktop Learn more */}
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogTitle>{selected?.name}</DialogTitle>
                        <DialogDescription>
                            <p className="mb-4">{selected?.designation}</p>
                            <p className="text-sm text-muted-foreground">
                                {selected?.bio || 'A brief introduction about this team member will appear here.'}
                            </p>
                        </DialogDescription>
                        <div className="mt-4">
                            <DialogClose className="inline-flex items-center">Close</DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}
