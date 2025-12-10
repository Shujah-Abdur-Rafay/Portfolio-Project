import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clientColumn1 = [
  'Hubspot',
  'Google Analytics 4',
  'LinkedIn',
  'Figma',
];
const clientColumn2 = [
  'Salesforce',
  'Semrush',
  'Apperstreet',
  'Office 365',
];
const clientColumn3 = [
  'Mailchimp',
  'Instagram',
  'Buffer',
  'Asana',
];

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-miguel');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {aboutImage && (
          <div className="w-full h-[60vh] md:h-[80vh] relative">
            <Image
              src={aboutImage.imageUrl}
              alt="Miguel López"
              fill
              className="object-cover object-[50%_50%]"
              data-ai-hint="portrait professional"
              priority
            />
             <div className="absolute inset-0 bg-black/20" />
          </div>
        )}

        <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h5 className="font-body italic text-muted-foreground text-lg">My Story</h5>
            <div className="mt-4 space-y-4 text-foreground/80">
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8">
                <h2 className="font-headline text-4xl md:text-5xl text-center uppercase tracking-wider">Crafting Content for World-Class Leaders</h2>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16">
                
                {/* Column 1 */}
                <div className="border-t border-border">
                    {clientColumn1.map((client) => (
                    <div key={client} className="border-b border-border py-4 h-[60px] flex items-center transition-colors duration-300 group">
                        <p className="text-muted-foreground text-lg group-hover:text-accent">{client}</p>
                    </div>
                    ))}
                </div>

                {/* Column 2 */}
                <div className="border-t border-border">
                    {clientColumn2.map((client) => (
                    <div key={client} className="border-b border-border py-4 h-[60px] flex items-center transition-colors duration-300 group">
                        <p className="text-muted-foreground text-lg group-hover:text-accent">{client}</p>
                    </div>
                    ))}
                </div>

                {/* Column 3 */}
                <div className="border-t border-border">
                    {clientColumn3.map((client) => (
                    <div key={client} className="border-b border-border py-4 h-[60px] flex items-center transition-colors duration-300 group">
                        <p className="text-muted-foreground text-lg group-hover:text-accent">{client}</p>
                    </div>
                    ))}
                </div>

                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
