'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const careerTimelineData = [
  {
    year: 'All 2024',
    company: 'Barter Energy',
    role: 'Marketing Executive',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/barter%20negro.png?alt=media&token=f9d85a3a-03dd-41e1-bdc7-1eccd4017785',
    link: 'https://www.barterenergy.es/'
  },
  {
    year: '2020-2022',
    company: 'Cicciobella',
    role: 'Marketing Assistant',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Ciccio%20fondo%20negro.png?alt=media&token=d80682dc-4d78-4f1b-9285-dbff3dc0d3f9',
    link: 'https://cicciobella.es/'
  },
  {
    year: '2018-2020',
    company: 'tuSpeaking',
    role: 'Role Title',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Sin%20t%C3%ADtulo.png?alt=media&token=ddf4b81e-112e-4ef3-9737-1a14f761b733',
    link: 'https://tuspeaking.com/'
  },
  {
    year: '2016-2018',
    company: 'EDP',
    role: 'Role Title',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/NeoEDP.png?alt=media&token=982bebc6-483a-424d-a1ef-d06a0f1f16dc',
    link: 'https://www.edp.com/en'
  },
  {
    year: '2014-2016',
    company: 'EDP',
    role: 'Junior Role',
    logoUrl: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/NeoEDP.png?alt=media&token=982bebc6-483a-424d-a1ef-d06a0f1f16dc',
    link: 'https://www.edp.com/en'
  },
];

const degreesTimelineData = [
    {
      year: '2012-2014',
      company: 'University of Dublin',
      role: 'Master in Digital Marketing',
      logoUrl: 'https://picsum.photos/seed/degree1/40/40',
    },
    {
      year: '2008-2012',
      company: 'University of Madrid',
      role: 'Bachelor in Communication',
      logoUrl: 'https://picsum.photos/seed/degree2/40/40',
    },
];

const TimelineItem = ({ data, index }: { data: typeof careerTimelineData[0], index: number }) => {
  const isRight = index % 2 !== 0;

  const content = (
    <div className={cn('flex flex-col', isRight ? 'items-start' : 'items-end')}>
        <p className="font-headline text-sm text-accent">{data.year}</p>
        <div className={cn('mt-2', isRight ? 'text-left' : 'text-right')}>
            <h3 className="font-headline text-lg text-accent"></h3>
            <p className="text-lg text-muted-foreground">{data.role}</p>
        </div>
    </div>
  );

  const imageContent = (
    <div className="flex items-center justify-center w-36 h-20 [transform-style:preserve-3d]">
        {data.logoUrl && data.logoUrl.startsWith('http') ? (
            <Image 
                src={data.logoUrl} 
                alt={`${data.company} logo`} 
                width={144}
                height={80}
                className={cn(
                  "object-contain transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(360deg)]",
                   data.company === 'tuSpeaking' && "w-[90%]",
                   (data.company === 'EDP' || data.company === '') && "w-[85%]"
                )}
            />
        ) : (
            <div className="w-full h-full bg-muted/20 border-2 border-dashed border-border" />
        )}
    </div>
  );

  const imageLink = (data as any).link;
  const image = imageLink ? (
    <a href={imageLink} target="_blank" rel="noopener noreferrer" className="block group">
      {imageContent}
    </a>
  ) : <div className="group">{imageContent}</div>;


  return (
    <div className="relative flex w-full min-h-[100px]">
      {/* Left Column */}
      <div className="w-1/2 pr-8 flex justify-end items-center">
        {!isRight && content}
        {isRight && image}
      </div>
      
      {/* Center line and dot */}
      <div className="relative w-px bg-border">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
      </div>

      {/* Right Column */}
      <div className="w-1/2 pl-8 flex justify-start items-center">
        {isRight && content}
        {!isRight && image}
      </div>
    </div>
  );
};

const Timeline = ({ items }: { items: typeof careerTimelineData }) => (
  <div className="relative flex flex-col items-center">
    <div className="w-full">
      {items.map((item, index) => (
        <TimelineItem key={index} data={item} index={index} />
      ))}
    </div>
  </div>
);

const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = parentRef.current;
        if (!canvas || !parent) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const mouse = { x: -200, y: -200, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            createParticles();
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };
        
        const handleMouseLeave = () => {
            mouse.x = -200;
            mouse.y = -200;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = 200;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: Math.random() * 1 - 0.5,
                    speedY: Math.random() * 1 - 0.5,
                });
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                let totalForceX = 0;
                let totalForceY = 0;

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    totalForceX = -forceDirectionX * force * 2;
                    totalForceY = -forceDirectionY * force * 2;
                }
                
                p.x += p.speedX + totalForceX;
                p.y += p.speedY + totalForceY;

                if (p.x > canvas.width || p.x < 0) {
                    p.speedX *= -1;
                    if (p.x > canvas.width) p.x = canvas.width;
                    if (p.x < 0) p.x = 0;
                }
                if (p.y > canvas.height || p.y < 0) {
                    p.speedY *= -1;
                    if (p.y > canvas.height) p.y = canvas.height;
                    if (p.y < 0) p.y = 0;
                }

                ctx.fillStyle = 'hsla(43, 74%, 56%, 0.5)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
            animationFrameId = requestAnimationFrame(animate);
        };
        
        resizeCanvas();
        animate();

        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(parent);

        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            if (parent) {
                parent.removeEventListener('mousemove', handleMouseMove);
                parent.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={parentRef} className="absolute inset-0 z-0 w-full h-full">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};


export default function CvTimeline() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [currentTitle, setCurrentTitle] = React.useState('Career Journey');
  const titles = ['Career Journey', 'Degrees & Certificates'];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      setCurrentTitle(titles[newIndex]);
    };
    
    api.on('select', onSelect);
    onSelect(); // Set initial title

    return () => {
      api.off('select', onSelect);
    };
  }, [api, titles]);
  
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);


  return (
    <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        <Particles />
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-8">
            <div className="flex items-center justify-center text-center mb-12">
                <Button variant="ghost" size="icon" onClick={scrollPrev}>
                    <ChevronLeft />
                </Button>
                <div className="w-auto flex items-center justify-center">
                  <div className="bg-transparent border-2 border-accent rounded-lg p-4 px-6 shadow-[0_0_15px_rgba(208,175,55,0.5)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(208,175,55,0.8)]">
                    <h2 className="font-headline text-3xl md:text-4xl text-center text-accent whitespace-nowrap">
                        {currentTitle}
                    </h2>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={scrollNext}>
                    <ChevronRight />
                </Button>
            </div>
            
            <Carousel setApi={setApi} opts={{ loop: true }}>
              <CarouselContent>
                <CarouselItem>
                    <div className="hidden md:block">
                        <Timeline items={careerTimelineData} />
                    </div>
                    <div className="md:hidden">
                        {careerTimelineData.map((item, index) => (
                            <div key={index} className="text-center mb-8">
                                <p className="font-headline text-sm text-accent">{item.year}</p>
                                <div className="mt-4 flex justify-center">
                                    {item.logoUrl && (
                                        <a href={(item as any).link} target="_blank" rel="noopener noreferrer" className="block group">
                                            <div className="flex items-center justify-center w-36 h-20 [transform-style:preserve-3d]">
                                                <Image 
                                                    src={item.logoUrl} 
                                                    alt={`${item.company} logo`} 
                                                    width={144}
                                                    height={80}
                                                    className={cn(
                                                        "object-contain transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(360deg)]",
                                                        item.company === 'tuSpeaking' && "w-[90%]",
                                                        (item.company === 'EDP' || item.company === '') && "w-[85%]"
                                                    )}
                                                />
                                            </div>
                                        </a>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <h3 className="font-headline text-lg"></h3>
                                    <p className="text-lg text-muted-foreground">{item.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="hidden md:block">
                      <Timeline items={degreesTimelineData as any} />
                    </div>
                    <div className="md:hidden">
                      {degreesTimelineData.map((item, index) => (
                        <div key={index} className="p-4 text-left mb-4">
                          <p className="font-headline text-accent">{item.year}</p>
                          <h3 className="font-headline text-xl mt-2 text-accent">{item.company}</h3>
                          <p className="text-sm text-muted-foreground">{item.role}</p>
                        </div>
                      ))}
                    </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
        </div>
    </section>
  );
}
