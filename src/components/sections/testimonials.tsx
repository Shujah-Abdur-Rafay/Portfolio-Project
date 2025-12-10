"use client";

const QuoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="11.214" viewBox="0 0 14 11.214"><path d="M2.273,18.739.5,7.525H6.722L5.384,18.739Zm7.778,0L8.278,7.525H14.5L13.161,18.739Z" transform="translate(-0.5 -7.525)" fill="currentColor"/></svg>
)

export default function Testimonials() {
  return (
    <section className="w-full bg-secondary py-16 md:py-24">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
            <h4 className="font-headline text-2xl mb-4">Barter Energy</h4>
            <QuoteIcon className="mx-auto my-4" />
            <p className="font-body text-base md:text-xl italic leading-relaxed text-muted-foreground">
                "Miguel Ángel excels at problem-solving efficiently and creatively, possesses excellent  communication skills, and demonstrates a strong ability to adapt to new situations. His  commitment enabled him to successfully overcome the challenges that arose throughout  his time in our department. "
            </p>
            <QuoteIcon className="mx-auto my-4 rotate-180" />
            <p className="mt-6 font-headline text-lg">Candido García</p>
            <p className="text-sm text-muted-foreground font-bold">Barter Energy COO</p>
        </div>
      </div>
    </section>
  );
}
