import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Cta from '@/components/sections/cta';
import Link from 'next/link';

const mailtoLink = "mailto:miguelmendia22@gmail.com?subject=Professional inquiry from your portfolio&body=Hi Miguel, I've seen your work and I would like to get in touch regarding a potential collaboration.";

const portfolioCategories = [
  { href: '/portfolio/real-works', label: 'Real Works' },
  { href: '/portfolio/study-cases', label: 'Study Cases' },
  { href: '/portfolio/content-creation', label: 'Content Creation' },
  { href: '/portfolio/analytics', label: 'Analytics' },
  { href: '/portfolio/seo', label: 'SEO' },
];

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl text-center">My Work</h1>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                A selection of projects that showcase my expertise in digital strategy, social media, and content creation. Each project reflects a commitment to building meaningful communities and delivering measurable results.
            </p>
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {portfolioCategories.map((category) => (
              <Link key={category.label} href={category.href}>
                <div className="group relative flex items-center justify-center h-64 bg-secondary border-4 border-transparent hover:border-primary transition-colors duration-300">
                  <h2 className="font-headline text-2xl text-center text-secondary-foreground z-10 p-4 group-hover:text-primary transition-colors">
                    {category.label}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <Cta href={mailtoLink} text="Start a Project" />
      </main>
      <Footer />
    </div>
  );
}
