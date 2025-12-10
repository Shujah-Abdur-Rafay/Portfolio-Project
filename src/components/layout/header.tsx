"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/about', label: 'ABOUT' },
  { href: '/portfolio', label: 'PORTFOLIO' },
  { href: 'https://mailchi.mp/959ea2a38611/weblandingcontact', label: 'CONTACT', isExternal: true },
  { href: 'https://www.linkedin.com/in/miguel-%C3%A1ngel-l%C3%B3pez-mend%C3%ADa-bb5141212/', label: 'LINKEDIN', isExternal: true },
];

const portfolioSubLinks = [
  { href: '/portfolio/real-works', label: 'Real Works' },
  { href: '/portfolio/study-cases', label: 'Study Cases' },
  { href: '/portfolio/seo', label: 'SEO' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 flex h-20 items-center justify-between">
        
        <Link href="/" className="font-headline text-lg tracking-wider uppercase">
            MIGUEL LÓPEZ
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-16">
          <Link href="/about" className="font-headline text-lg tracking-wider uppercase reveal-text text-primary" data-text="ABOUT">
            <span>ABOUT</span>
          </Link>
          <div className="relative group">
            <Link href="/portfolio" className="font-headline text-lg tracking-wider uppercase reveal-text text-primary" data-text="PORTFOLIO">
              <span>PORTFOLIO</span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-background border border-border rounded-md shadow-lg w-60">
                <div className="p-2">
                  {portfolioSubLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <a href="https://mailchi.mp/959ea2a38611/weblandingcontact" target="_blank" rel="noopener noreferrer" className="font-headline text-lg tracking-wider uppercase reveal-text" data-text="CONTACT">
            <span>CONTACT</span>
          </a>
          <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-l%C3%B3pez-mend%C3%ADa-bb5141212/" target="_blank" rel="noopener noreferrer" className="font-headline text-lg tracking-wider uppercase reveal-text" data-text="LINKEDIN">
            <span>LINKEDIN</span>
          </a>
        </nav>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col h-full p-6 pt-12">
                  <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => {
                      const LinkComponent = link.isExternal ? 'a' : Link;
                      return link.label === 'PORTFOLIO' ? (
                        <div key={link.label}>
                          <Link
                            href={link.href}
                            className="font-headline text-lg tracking-wider uppercase transition-colors hover:text-accent text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                          <div className="flex flex-col space-y-4 pl-4 mt-2">
                            {portfolioSubLinks.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="text-foreground transition-colors hover:text-accent"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <LinkComponent
                          key={link.label}
                          href={link.href}
                          target={link.isExternal ? '_blank' : undefined}
                          rel={link.isExternal ? 'noopener noreferrer' : undefined}
                          className="font-headline text-lg tracking-wider uppercase transition-colors hover:text-accent text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </LinkComponent>
                      );
                    })}
                  </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
