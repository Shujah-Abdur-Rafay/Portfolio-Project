import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Cta from '@/components/sections/cta';

const mailtoLink = "mailto:miguelmendia22@gmail.com?subject=Professional inquiry from your portfolio&body=Hi Miguel, I've seen your work and I would like to get in touch regarding a potential collaboration.";

export default function ContentCreationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl text-center">Content Creation</h1>
            <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                A collection of content created for different brands and channels.
            </p>
        </div>
        <Cta href={mailtoLink} text="Start a Project" />
      </main>
      <Footer />
    </div>
  );
}
