import Image from 'next/image';

const servicesData = [
  {
    title: 'Digital Strategy',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/AZmQXIT_xCKgm1YwsSaS3w-AZmQXIT_3ymswElPz6--NQ.mp4?alt=media&token=74e451f8-0d7a-4655-b5bb-b924fde8182b',
    description: "I design and execute comprehensive digital strategies, integrating new and existing channels to build cohesive brand narratives that resonate with target audiences and drive measurable growth."
  },
  {
    title: 'Social Media',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/853988-hd_1920_1080_25fps.mp4?alt=media&token=891679a8-85b3-4ba8-a7a9-691d481f3ac1',
    description: "I create customized social media strategies that elevate brand awareness, foster community trust, and convert followers into loyal customers through engaging, platform-specific content."
  },
  {
    title: 'Content',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/7677311-hd_1920_1080_25fps.mp4?alt=media&token=0f7dbada-360d-49e0-a3f5-c8fc7239324b',
    description: "I develop data-driven yet creative content that stands out, crafting memorable stories your community will discuss, share, and connect with on a deeper level."
  },
  {
    title: 'Data Analysis',
    videoSrc: 'https://firebasestorage.googleapis.com/v0/b/pruebasmangel.firebasestorage.app/o/Analisis%20video.mp4?alt=media&token=b46d8fc3-7a0a-4ef8-8354-07428bdcbdd6',
    description: "I leverage analytical models and CRM insights to develop segmentation strategies, leading to higher customer lifetime value and optimized loyalty programs."
  },
];

const ServiceCard = ({ title, videoSrc, imageUrl, description }: { title: string, videoSrc?: string, imageUrl?: string, description?: string }) => (
    <div className="group h-64 [perspective:1000px]">
        <div className="relative h-full w-full rounded-lg shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
                <div className="relative h-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300 rounded-lg">
                    {videoSrc && (
                        <video
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    )}
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <h4 className="font-headline text-3xl text-primary-foreground">{title}</h4>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-lg bg-secondary px-6 py-4 text-center text-secondary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-base">{description}</p>
                </div>
            </div>
        </div>
    </div>
);

export default function Services() {
  return (
    <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-16 md:py-24">
      <div className="text-center mb-8">
        <div className="max-w-3xl mx-auto flex flex-col items-end">
            <h2 className="font-headline text-2xl md:text-4xl mt-4 italic text-center w-full">
                "Marketing without data is like driving with your eyes closed."
            </h2>
            <h3 className="text-lg text-accent font-body italic mt-2">
                — Dan Zarrella.
            </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
        {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
