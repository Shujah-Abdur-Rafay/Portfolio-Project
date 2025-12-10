import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Work2Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-grow">
         <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-16">
              
              {/* Left Column - Image Gallery */}
              <div className="space-y-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-black">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/TIRAMISU.jpg?alt=media&token=e4f20eb9-7b70-46df-9824-dcc3b476fdac"
                    alt="Cicciobella project main image"
                    fill
                    className="object-contain"
                    data-ai-hint="fashion website"
                    quality={100}
                  />
                </div>
                
                <div className="relative aspect-[1000/667] w-full overflow-hidden rounded-lg border bg-black">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/hongo.jpg?alt=media&token=156e077b-e88c-4e70-ab27-f38b1a49aa48"
                    alt="Hongo"
                    width={1000}
                    height={667}
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </div>

              {/* Right Column - Project Details */}
              <div className="md:sticky md:top-24 h-fit">
                <a href="https://www.instagram.com/la_cicciobella/" target="_blank" rel="noopener noreferrer">
                  <div className="relative h-48 w-full mb-8 flex justify-center items-center mx-auto">
                      <Image
                          src="https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Ciccio%20fondo%20negro.png?alt=media&token=d80682dc-4d78-4f1b-9285-dbff3dc0d3f9"
                          alt="Cicciobella Logo"
                          fill
                          className="object-contain"
                      />
                  </div>
                </a>
                <p className="mt-6 text-foreground/80 text-justify">
                  Cicciobella is an established local eatery specializing in high-quality pizza, known for its dedication to local ingredients and fostering an intimate, familiar ambiance.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>Brand Strategy</span>
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
                    <span>Ecommerce and web development</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 space-y-12 text-foreground/90">
              {/* Section 1 */}
              <div>
                <h3 className="font-headline text-3xl text-primary mb-6">1. Context and challenge</h3>
                <div className="space-y-4">
                  <h4 className="font-headline text-xl text-accent">Project summary</h4>
                  <p className="text-justify">Creating the marketing automation and data infrastructure to support the strategic opening of a new location, focusing the investment on customer retention and customer lifetime value (CLV).</p>
                  <h4 className="font-headline text-xl text-accent mt-4">Initial situation:</h4>
                  <p className="text-justify">Cicciobella faced the opening of a second location. The core challenge was to centralize the customer database and create coherent communication that would transform one-time buyers into loyal or VIP Customers. The ecommerce initial database stood at 4,000 customers, and the goal was to scale this number and monetize it quickly.</p>
                   <h4 className="font-headline text-xl text-accent mt-4">Project objectives:</h4>
                   <ul className="space-y-2 text-justify">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Integration and stability:</span> Implement a centralized data structure (ecommerce, web and 2 locations) for unified segmentation with a loyalty program and an email marketing strategy.</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Accelerated growth:</span> Increase the first customer database from 4.000 to 6.000 leads in 4 months (50% growth).</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Initial impact:</span> Design and launch a pilot newsletter campaign to initiate loyalty and gather performance data.</span></li>
                    </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="font-headline text-3xl text-primary mb-6">2. Strategy and actions</h3>
                <p className="mb-6 text-justify">My role focused on information architecture and the execution of communication strategy.</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-headline text-2xl text-accent mb-4">A. Data structure and loyalty framework</h4>
                    <h5 className="font-headline text-lg font-bold mt-4">New data capture:</h5>
                    <ul className="space-y-2 text-justify mt-4">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Priority:</span> Collect name, phone, postal code and email through a landing page that transmit the data to Mailchimp.</span></li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">How?:</span> Creating our own customer community called “La familia”</span></li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Platforms involved:</span> Instagram, new web, ecommerce and Mailchimp.</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Incentive:</span> The first newsletter "Queremos darte la bienvenida a la familia" (We want to welcome you to the family) incentive was used with a QR code linked to the Mailchimp landing page to encourage the first interaction or purchase.</span></li>
                    </ul>
                    
                    <h5 className="font-headline text-lg font-bold mt-6">Loyalty program development and launch:</h5>
                     <ul className="space-y-2 text-justify mt-4">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 shrink-0 text-primary" />
                        <span>
                          <span className="font-bold">Segmentation:</span> The 6,000-customer base was firstly divided into loyal customers (regular purchase frequency) and VIP Customers (high spend/frequency).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 shrink-0 text-primary" />
                        <span>
                          <span className="font-bold">Incentives for registration:</span>
                          <ul className="list-disc list-inside space-y-1 text-justify pl-4 mt-2">
                            <li>5% purchase discount in the first month as a family member.</li>
                            <li>3€ for each referral.</li>
                            <li>Exclusive offers via email.</li>
                            <li>Special discount on customers' birthdays.</li>
                            <li>Weekly newsletter access</li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4">
                     <h4 className="font-headline text-2xl text-accent mb-4">B. Newsletter campaign development and launch</h4>
                      <h5 className="font-headline text-lg font-bold">Content creation and development:</h5>
                      <p className="text-justify my-4">Three key pillars were established:</p>
                     <ul className="list-decimal list-inside space-y-1 text-justify">
                        <li><span className="font-bold">Themes:</span> Doing benchmark, using content curators and searching in Google Trends topics as inspiration for creative content.</li>
                        <li><span className="font-bold">Elaboration:</span> Using the available information plus AI tools to help us generate content, planning it after.</li>
                        <li><span className="font-bold">Scheduling:</span> Use a Calendar for consistent send planning.</li>
                     </ul>

                     <h5 className="font-headline text-lg font-bold mt-6">Technical implementation (Ecommerce & Mailchimp):</h5>
                     <div className="my-4"/>
                      <ul className="space-y-2 text-justify">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 shrink-0 text-primary" />
                          <span>
                            <span className="font-bold">Mailchimp account setup:</span> The Mailchimp account was created, authenticated and configured. The workflow automation was designed and created. The database was imported and updated via CSV each week, having already around 4000 customers within the ecommerce store.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 shrink-0 text-primary" />
                           <span>
                            <span className="font-bold">Pizza box QR implementation:</span> Including on each pizza box a QR code that leads to the landing page for data collection that will lead within Mailchimp.
                           </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 shrink-0 text-primary" />
                           <span>
                            <span className="font-bold">On site commercial action:</span> Suggesting them to scan the QR on the counter and join the family.
                           </span>
                        </li>
                      </ul>

                     <h5 className="font-headline text-lg font-bold mt-6">First newsletter campaign:</h5>
                     <ul className="space-y-2 text-justify">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Name:</span> "Presentamos CiccioBella News!!!" (Introducing CiccioBella News!!!)</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Observation:</span> The campaign was launched early for high impact. The key takeaway was: "We received some messages wishing us luck. We managed to spark the feeling despite being a pilot edition. This is a good starting point."</span></li>
                     </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="font-headline text-3xl text-primary mb-6">3. Data and results</h3>
                <div className="space-y-4">
                  <h4 className="font-headline text-xl text-accent">Infrastructure and Business Metrics:</h4>
                  <ul className="space-y-2 text-justify">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Lead capture rate:</span> The new digital infrastructure achieved more than 50% database growth in 4 months (from around 4,000 to + 6,000 customers), exceeding the consolidation goal.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Consolidated database:</span> I finalized the creation of a centralized database of 6,000 active and segmented customers, a crucial asset for expansion.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Loyalty Boost:</span> The loyalty program incentive and automated communication resulted in a 28% increase in the Repeat Purchase Rate among initial customers.</span></li>
                  </ul>
                  
                  <h4 className="font-headline text-xl text-accent mt-4">Key email marketing metrics:</h4>
                  <ul className="space-y-2 text-justify">
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Open rate:</span> The pilot campaign achieved a 52.8% Open Rate (far exceeding the 10-15% industry benchmark), validating the database quality and content relevance.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Click-Through rate (CTR) and Segmentation:</span> Approximately 14% of opens resulted in a click, and 175 new subscriptions were completed. This proves the effectiveness of the CTA.</span></li>
                    <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-1 shrink-0 text-primary" /><span><span className="font-bold">Click behavior:</span> The top clicks were to: "Cicciobella" (49 clicks), "Pizza del verano" (45 clicks), and the "Fuentemoral" link (47 clicks). This informs future segmentation and content preference.</span></li>
                  </ul>
                   <h4 className="font-headline text-xl text-accent mt-4">Campaign conclusion:</h4>
                  <p className="text-justify">"The campaign was satisfactory; we created a solid community and achieved much more new sign-ups into the family and impacted half of the audience."</p>

                  <h4 className="font-headline text-xl text-accent mt-4">Strategic conclusion:</h4>
                  <p className="text-justify">The project not only achieved the expansion goal by providing Cicciobella with a base of 6,000 active customers, but it also validated the communication infrastructure with a 52.8% Open Rate on the first campaign. This demonstrates that the brand now possesses a scalable and efficient retention and monetization channel, ready to support the second store opening.</p>
                </div>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
