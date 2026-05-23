import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Member {
  id: string
  name: string
  designation: string
  bio?: string
  profilePic: string
}

interface Props {
  member: Member
  showLearnMore?: boolean
  onLearnMore?: (m: Member) => void
  learnMoreClassName?: string
}

export default function TeamMemberCard({ member, showLearnMore = true, onLearnMore, learnMoreClassName }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 rounded-md mb-4 overflow-hidden">
        <Image
          src={member.profilePic}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <h4 className="text-base font-semibold text-foreground">{member.name}</h4>
      <p className="text-sm text-muted-foreground mb-4">{member.designation}</p>

      {showLearnMore && (
        <Button
          variant="default"
          size="sm"
          onClick={() => onLearnMore && onLearnMore(member)}
          className= {learnMoreClassName}
        >
          Learn more
        </Button>
      )}
    </div>
  )
}
