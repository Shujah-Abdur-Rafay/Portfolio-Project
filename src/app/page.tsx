import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import SubHeader from '@/components/sections/sub-header';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import Cta from '@/components/sections/cta';
import { ArrowButton } from '@/components/shared/arrow-button';
import Link from 'next/link';
import CvTimeline from '@/components/sections/cv-timeline';

const mailtoLink = "https://mailchi.mp/959ea2a38611/weblandingcontact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SubHeader />
        <CvTimeline />
        <Services />
        <Cta href="https://mailchi.mp/959ea2a38611/weblandingcontact" text="Get in touch" />
        <Testimonials />
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16">
          <h2 className="font-headline text-4xl md:text-6xl text-center">
            Let's get started
          </h2>
          <div className="text-center mt-8">
            <a href="https://mailchi.mp/959ea2a38611/weblandingcontact" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-lg font-headline uppercase tracking-wider text-primary hover:text-accent transition-colors">
              <span className="text-[1.5em]">Get in touch</span>
              <svg
                className="w-10 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                viewBox="0 0 40 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeMiterlimit="10"
              >
                <line y1="12.5" x2="40" y2="12.5"></line>
                <path d="M40,12.5C28.69,12.5,28,25,28,25"></path>
                <path d="M28,0s.69,12.5,12,12.5"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
