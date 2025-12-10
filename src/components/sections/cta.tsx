import { ArrowButton } from '@/components/shared/arrow-button';

interface CtaProps {
    href: string;
    text: string;
}

export default function Cta({ href, text }: CtaProps) {
  return (
    <section className="w-full py-16 text-center">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8">
        <ArrowButton href={href} className="inline-flex" isExternal>
          {text}
        </ArrowButton>
      </div>
    </section>
  );
}
