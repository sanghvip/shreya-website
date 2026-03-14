import React from 'react';
import { Flower2, MessageCircle, Brain } from 'lucide-react';

// Service card component displaying individual service offerings
// Each card includes icon, title, description, and learn more link
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function ServiceCard({ icon, title, subtitle }: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Icon Container */}
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 flex items-center justify-center">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground text-center mb-2">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-muted-foreground text-center mb-4">{subtitle}</p>

      {/* Learn More Link */}
      <div className="text-center">
        <a
          href="#"
          className="text-primary hover:text-primary/80 transition-colors text-sm font-medium inline-flex items-center gap-1"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
