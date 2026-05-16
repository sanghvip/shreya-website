import React from 'react'
import { Button } from '@/components/ui/button'

interface Member {
  id: string
  name: string
  designation: string
  bio?: string
}

interface Props {
  member: Member
  showLearnMore?: boolean
  onLearnMore?: (m: Member) => void
}

export default function TeamMemberCard({ member, showLearnMore = true, onLearnMore }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-muted border border-border rounded-md mb-4 flex items-center justify-center">
        {/* empty image box placeholder */}
      </div>

      <h4 className="text-base font-semibold text-foreground">{member.name}</h4>
      <p className="text-sm text-muted-foreground mb-4">{member.designation}</p>

      {showLearnMore && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onLearnMore && onLearnMore(member)}
        >
          Learn more
        </Button>
      )}
    </div>
  )
}
