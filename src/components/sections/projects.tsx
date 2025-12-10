"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'DEW IQ',
    href: '/portfolio/dew-iq',
    imageId: 'project-dew-iq',
  },
  {
    id: 2,
    title: 'Edenrowe',
    href: '/portfolio/edenrowe',
    imageId: 'project-edenrowe',
  },
  {
    id: 3,
    title: 'Saul Good Gifts',
    href: '/portfolio/saul-good',
    imageId: 'project-saul-good',
  },
  {
    id: 4,
    title: 'Courtquarters',
    href: '/portfolio/courtquarters',
    imageId: 'project-courtquarters',
  },
  {
    id: 5,
    title: 'Terra Hale',
    href: '/portfolio/terra-hale',
    imageId: 'project-terra-hale',
  },
];

export default function Projects() {
  const [activeImageId, setActiveImageId] = useState(projects[0].imageId);
  const activeImage = PlaceHolderImages.find(p => p.id === activeImageId);

  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
      <h3 className="text-muted-foreground text-center md:text-left mb-8">Select Projects</h3>
      <div className="relative flex flex-col md:flex-row md:min-h-[500px]">
        <ul className="flex-1 space-y-2 md:space-y-0 border-t border-border">
          {projects.map((project) => (
            <li key={project.id} className="border-b border-border">
              <Link
                href={project.href}
                onMouseEnter={() => setActiveImageId(project.imageId)}
                className="flex items-center justify-between py-6 md:py-8 text-3xl md:text-5xl font-headline uppercase transition-colors hover:text-accent"
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">0{project.id}</span>
                  {project.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:w-1/2 md:pl-8 lg:pl-16 mt-8 md:mt-0 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[300px] md:max-w-full">
            <AnimatePresence mode="wait">
              {activeImage && (
                <motion.div
                  key={activeImage.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage.imageUrl}
                    alt={activeImage.description}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                    data-ai-hint={activeImage.imageHint}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
}
