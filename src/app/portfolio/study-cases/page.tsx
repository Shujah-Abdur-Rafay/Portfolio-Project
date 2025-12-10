import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Cta from '@/components/sections/cta';
import Link from 'next/link';
import Image from 'next/image';

const mailtoLink = "mailto:miguelmendia22@gmail.com?subject=Professional inquiry from your portfolio&body=Hi Miguel, I've seen your work and I would like to get in touch regarding a potential collaboration.";

const studyCases = [
  { id: 1, title: 'Study Case 1', href: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Case%20Study%201.pdf?alt=media&token=15193746-1433-42b6-a1a2-3149f224adc1', isExternal: true, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Portada%20Study%20Case%201.png?alt=media&token=846c688e-a3b5-49a4-863a-f2eab222b819' },
  { id: 2, title: 'Study Case 2', href: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/LTD%201.pdf?alt=media&token=2fa25579-0b12-4b6f-9dfc-6704d46fe2ed', isExternal: true, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Portada%20Study%20case%202.png?alt=media&token=11fb6718-bb98-4949-9681-f0cca2370e1a' },
  { id: 3, title: 'Study Case 3', href: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Study%20Case%203%20-%20Organic%20User%20Path.pdf?alt=media&token=da5e1ecb-0328-4b37-a49a-134b2529a7a4', isExternal: true, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/PortadaSC3.png?alt=media&token=9ab75ff3-6dae-4fed-805f-df62546c71f5' },
  { id: 4, title: 'Study Case 4', href: '/portfolio/study-cases/case-4' },
  { id: 5, title: 'Study Case 5', href: '/portfolio/study-cases/case-5' },
  { id: 6, title: 'Study Case 6', href: '/portfolio/study-cases/case-6' },
];

export default function StudyCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl text-center">Study Cases</h1>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                In-depth study cases of different projects, showing the process and results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              {studyCases.map((study) => (
                <Link key={study.id} href={study.href} target={study.isExternal ? '_blank' : undefined} rel={study.isExternal ? 'noopener noreferrer' : undefined}>
                  <div className={`group aspect-square relative flex items-center justify-center border-4 border-transparent hover:border-primary transition-colors duration-300 cursor-pointer overflow-hidden ${study.id <= 3 ? 'bg-white' : 'bg-secondary'}`}>
                    {study.imageUrl ? (
                       <div className="relative w-full h-full p-4 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={study.imageUrl}
                            alt={study.title}
                            fill
                            className="object-contain"
                        />
                       </div>
                    ) : (
                        <h2 className="font-headline text-2xl text-center text-secondary-foreground z-10 p-4 group-hover:text-primary transition-colors">
                          {study.title}
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
