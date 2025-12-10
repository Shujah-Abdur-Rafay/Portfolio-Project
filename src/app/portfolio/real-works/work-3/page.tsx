import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Work3Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-grow">
         <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <h1 className="font-headline text-5xl md:text-7xl text-center"></h1>
            <div className="grid md:grid-cols-2 gap-16">
              
              {/* Left Column - Image Gallery */}
              <div className="space-y-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-black">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/tuspeaking%20payasos.jpg?alt=media&token=6ac82084-7348-452e-85da-f0b2f9caf47f"
                    alt="tuSpeaking team laughing"
                    fill
                    className="object-cover"
                    data-ai-hint="team presentation"
                    quality={100}
                  />
                </div>
                
                <div className="relative aspect-[1000/667] w-full overflow-hidden rounded-lg border bg-black">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/chorba%20loka.jpeg?alt=media&token=626af136-3554-4811-a2cf-033b19e36018"
                    alt="tuSpeaking secondary image"
                    width={1000}
                    height={667}
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </div>

              {/* Right Column - Project Details */}
              <div className="md:sticky md:top-24 h-fit">
                <a href="https://tuspeaking.com/" target="_blank" rel="noopener noreferrer">
                  <div className="relative h-48 w-full mb-8 flex justify-center items-center mx-auto">
                      <Image
                          src="https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Sin%20t%C3%ADtulo.png?alt=media&token=ddf4b81e-112e-4ef3-9737-1a14f761b733"
                          alt="tuSpeaking Logo"
                          fill
                          className="object-contain"
                      />
                  </div>
                </a>
                <p className="mt-6 text-foreground/80 text-justify">
                  TuSpeaking specializes in online language training delivered exclusively to B2B clients and corporations. They offer flexible programs with native, live teachers and an interactive e-learning platform. All their customized courses are eligible for FUNDAE funding and focus on specific business needs.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Data analysis</span>
                  </div>
                   <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Content Creation</span>
                  </div>
                   <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Email marketing strategy</span>
                  </div>
                   <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Automations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 space-y-12 text-foreground/90">
              {/* Section 1 */}
              <div>
                <h3 className="font-headline text-3xl text-primary mb-6">1. Context and challenge</h3>
                <div className="space-y-4">
                  <h4 className="font-headline text-xl text-accent">Project summary:</h4>
                  <p className="text-justify">Design and implementation of a new B2B prospecting and content strategy targeting key sectors (Renewables, Logistics, Industry), focusing on Lead Nurturing efficiency and communication scalability (email and calls).</p>
                  <h4 className="font-headline text-xl text-accent mt-4">Initial situation:</h4>
                  <p className='text-justify'>TuSpeaking, a professional language training company, aimed to scale its B2B client portfolio within specific high-value sectors (renewables, logistics and engineering industry among others). The challenge was threefold:</p>
                    <ul className="list-decimal list-inside space-y-1 text-justify pl-4">
                        <li>Lack of specific and automated content for Sales Navigator.</li>
                        <li>Inconsistency in measuring and managing lead communication flows.</li>
                        <li>Need for precise segmentation to enable sales teams to conduct effective cold-calling.</li>
                    </ul>
                   <h4 className="font-headline text-xl text-accent mt-4">Project objectives:</h4>
                   <ul className="space-y-2 text-justify">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">B2B content design:</span> Create optimized content for LinkedIn Sales Navigator and automate its publication.</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Market segmentation:</span> Identify and segment key sectors with a customized telemarketing pitch.</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Communication architecture:</span> Design an automated lead nurturing flow to improve the sales team's efficiency.</span></li>
                    </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="font-headline text-3xl text-primary mb-6">2. Strategy and actions</h3>
                <p className="mb-6 text-justify">My role centered on prospecting architecture, creating a new email marketing campaign and the execution of B2B content.</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-headline text-2xl text-accent mb-4">A. Content strategy and automation (Buffer & LinkedIn)</h4>
                    <h5 className="font-headline text-lg font-bold mt-4">Content for Sales Navigator:</h5>
                     <p className='text-justify mt-2'>I created 10 pieces of original, value-driven content focused on talent and upskilling trends specific to the Renewables and Industry sectors.</p>
                    
                    <h5 className="font-headline text-lg font-bold mt-6">Content automation:</h5>
                     <p className='text-justify mt-2'>Buffer was implemented to schedule and publish the content, ensuring a constant and professional presence on LinkedIn Sales Navigator without daily manual intervention.</p>
                     
                     <h5 className="font-headline text-lg font-bold mt-6">Key content metrics:</h5>
                     <p className='text-justify mt-2'>I defined and tracked essential metrics: engagement rate, link CTR, and content-generated leads.</p>
                  </div>

                  <div className="pt-4">
                     <h4 className="font-headline text-2xl text-accent mb-4">B. Market segmentation and telemarketing</h4>
                      <h5 className="font-headline text-lg font-bold">B2B segmentation:</h5>
                      <p className="text-justify my-2">I analyzed the market to focus efforts on renewables, logistics and industry, segmenting based on company size and the need for specialized business English.</p>

                     <h5 className="font-headline text-lg font-bold mt-6">Telemarketing pitch:</h5>
                     <p className='text-justify mt-2'>I designed 3 unique pitches, adapting the language to the specific pain points of each sector.</p>
                  </div>
                  
                  <div className="pt-4">
                     <h4 className="font-headline text-2xl text-accent mb-4">C. Flow architecture (email and calls)</h4>
                      <h5 className="font-headline text-lg font-bold">Email marketing workflow (Mailchimp):</h5>
                      <p className="text-justify my-2">I designed a nurturing flow activated after a B2B resource download. The flow aimed to warm up the lead before the sales call.</p>

                     <h5 className="font-headline text-lg font-bold mt-6">Call workflow (CRM/Sales):</h5>
                     <p className='text-justify mt-2'>I created a workflow for the sales team, defining when and how the call was made:</p>
                      <ul className="list-disc list-inside space-y-1 text-justify pl-4 mt-2">
                        <li><span className="font-bold">High Priority:</span> Leads who opened the last email and visited the pricing page.</li>
                        <li><span className="font-bold">Medium Priority:</span> Leads who opened 3 out of 5 emails.</li>
                      </ul>
                      <p className='text-justify mt-2'>The tailored pitch was applied only to high priority leads, optimizing team time.</p>

                     <h5 className="font-headline text-lg font-bold mt-6">Newsletter and measurement:</h5>
                     <p className='text-justify mt-2'>I created and launched new posts for the newsletter to maintain top-of-mind awareness, measuring the open rate and clicks toward core services.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="font-headline text-3xl text-primary mb-6">3. Results</h3>
                <div className="space-y-4">
                  <h4 className="font-headline text-xl text-accent">Content and Communication Metrics:</h4>
                  <ul className="space-y-2 text-justify">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">LinkedIn engagement rate:</span> The new, automated content via Buffer increased the engagement rate on sales navigator by 3.2%, significantly enhancing the sales team's visibility.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Newsletter efficiency:</span> The newsletter achieved an Open Rate (OR) of 22.3% and a CTR of 3.6%, demonstrating message effectiveness.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Successful segmentation:</span> Segmentation allowed the sales team to reduce time spent on unqualified leads, focusing efforts on higher potential accounts.</span></li>
                  </ul>
                  
                  <h4 className="font-headline text-xl text-accent mt-4">Key call workflow metrics:</h4>
                  <ul className="space-y-2 text-justify">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Lead-to-opportunity conversion:</span> The call workflow increased the conversion rate from lead to sales qualified opportunity by 18.1% in the targeted sectors.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Resource optimization:</span> Prioritization based on email engagement reduced failed call attempts, improving team morale and time efficiency.</span></li>
                  </ul>
                   <h4 className="font-headline text-xl text-accent mt-4">Strategic conclusion:</h4>
                  <p className="text-justify">The project transformed TuSpeaking's prospecting from an irregular activity into a multichannel, automated nurturing system. By aligning LinkedIn content with call prioritization and email nurturing, I established a more predictable, efficient, and targeted B2B sales machine, clearly focused on the most profitable sectors.</p>
                </div>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
