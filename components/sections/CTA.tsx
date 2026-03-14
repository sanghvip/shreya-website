import CustomButton from '@/components/ui/CustomButton';

// CTA (Call-To-Action) footer section with dark green background
// Prompts users to begin their healing journey with booking options
export default function CTA() {
  return (
    <section className="bg-primary py-12 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-3 text-balance">
          Ready to Begin Your Healing Journey?
        </h2>

        {/* Description */}
        <p className="text-lg text-primary-foreground mb-8">
          Book a confidential session today.
        </p>

        {/* CTA Button */}
        <CustomButton
          variant="dark"
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-opacity-90"
        >
          Book Session →
        </CustomButton>
      </div>
    </section>
  );
}
