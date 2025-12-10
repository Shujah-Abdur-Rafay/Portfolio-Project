import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function Work1Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
         <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl text-center">Barter Energy</h1>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                Content for Barter Energy project.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
