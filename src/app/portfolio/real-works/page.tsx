import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Cta from '@/components/sections/cta';
import Link from 'next/link';
import Image from 'next/image';

const mailtoLink = "mailto:miguelmendia22@gmail.com?subject=Professional inquiry from your portfolio&body=Hi Miguel, I've seen your work and I would like to get in touch regarding a potential collaboration.";

const realWorks = [
  { id: 1, title: 'Barter Energy', href: '/portfolio/real-works/work-1', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/barter%20negro.png?alt=media&token=f9d85a3a-03dd-41e1-bdc7-1eccd4017785' },
  { id: 2, title: 'Cicciobella', href: '/portfolio/real-works/work-2', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/C%20de%20ciccio.png?alt=media&token=852e0df3-847f-42a8-86a4-a26e4457e99e' },
  { id: 3, title: 'tuSpeaking', href: '/portfolio/real-works/work-3', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Sin%20t%C3%ADtulo.png?alt=media&token=ddf4b81e-112e-4ef3-9737-1a14f761b733' },
];

export default function RealWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl text-center">Real Works</h1>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                A showcase of real projects and their outcomes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              {realWorks.map((work) => (
                <Link key={work.id} href={work.href}>
                  <div className="group aspect-square relative flex items-center justify-center bg-black border-4 border-transparent hover:border-primary transition-colors duration-300 cursor-pointer overflow-hidden rounded-full">
                    {work.imageUrl ? (
                      <div className="relative w-full h-full p-4 transition-transform duration-300 group-hover:scale-105 rounded-full">
                          <Image
                              src={work.imageUrl}
                              alt={work.title}
                              fill
                              className="object-contain"
                          />
                      </div>
                    ) : (
                        <h2 className="font-headline text-2xl text-center text-secondary-foreground z-10 p-4 group-hover:text-primary transition-colors">
                          {work.title}
                        </h2>
                    )}
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
