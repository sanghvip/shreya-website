// Quick reference for your @/components/ui/EventCard setup
interface EventCardProps {
  event: any
  showButton: boolean
  buttonClassName: string
}

export default function EventCard({ event, showButton, buttonClassName }: EventCardProps) {
  return (
    <div className="flex flex-col h-full rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img src={event.image} alt={event.title} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col flex-grow p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A961] mb-1">{event.date}</span>
        <h3 className="font-serif text-xl line-clamp-2 mb-3 text-primary">{event.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-grow">{event.description}</p>
        
        {showButton && (
          <a 
            href={event.url || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${buttonClassName} w-full text-center mt-auto`}
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  )
}