'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

const ContactHeader = () => (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 flex h-20 items-center justify-between">
        <Link href="/" className="font-headline text-lg tracking-wider uppercase">
          MIGUEL LÓPEZ
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="font-headline text-sm tracking-widest uppercase reveal-text" data-text="ABOUT">
              <span>ABOUT</span>
            </Link>
            <Link href="/portfolio" className="font-headline text-sm tracking-widest uppercase reveal-text" data-text="PORTFOLIO">
              <span>PORTFOLIO</span>
            </Link>
            <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-l%C3%B3pez-mend%C3%ADa-bb5141212/" target="_blank" rel="noopener noreferrer" className="font-headline text-sm tracking-widest uppercase reveal-text" data-text="LINKEDIN">
                <span>LINKEDIN</span>
            </a>
        </nav>
        {/* Mobile menu could be added here if needed */}
      </div>
    </header>
  );

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(`Hi Miguel,\n\nI've seen your experience in sales and marketing and I'd like to learn more about your profile for a job opportunity.\n\nSincerely yours,`);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = "Professional inquiry from your portfolio";
    const body = `${message}\n\nFrom: ${email}`;
    const mailtoLink = `mailto:miguelmendia22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ContactHeader />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left Column */}
            <div className="text-center">
              <h1 className="font-headline text-5xl md:text-6xl uppercase">
                Get in touch
              </h1>
              <div className="mt-8 text-foreground/80 space-y-4">
                <p className="font-headline">
                  Let's work together.
                </p>
                <p className="font-headline">
                  Let's talk about how to turn your ideas into results.
                </p>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="w-full">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder:text-muted-foreground transition-colors duration-300 hover:border-accent"
                  />
                </div>
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    rows={7}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="placeholder:text-muted-foreground text-card-foreground transition-colors duration-300 hover:border-accent"
                  />
                </div>
                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full rounded-none">
                    SEND
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
