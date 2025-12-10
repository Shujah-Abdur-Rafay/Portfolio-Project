export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center justify-center h-[60vh] md:h-[80vh]" id="top">
            <div className="absolute inset-0 z-0">
                <video
                    src="https://videos.pexels.com/video-files/3195441/3195441-hd_1920_1080_25fps.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover border-4 border-foreground"
                    data-ai-hint="team work"
                ></video>
                <div className="absolute inset-0 bg-black/20" />
            </div>
            

            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 flex flex-col items-center justify-center group relative z-20">
                <h1
                    className="font-headline text-primary text-[12vw] sm:text-[9vw] md:text-[100px] lg:text-[140px] xl:text-[180px] leading-[0.85] tracking-tighter uppercase whitespace-nowrap text-center transition-shadow duration-300"
                >
                    MIGUEL LÓPEZ
                </h1>
                <p className="font-headline mt-4 text-sm text-primary flex items-center">
                    Based in&nbsp;<span className="relative inline-block overflow-hidden group/dublin">
                        Dublin
                        <span className="absolute inset-0 w-full transform-gpu transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 group-hover/dublin:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25" preserveAspectRatio="none" className="w-full h-full">
                                <rect width="33.3" height="25" fill="#169B62"/>
                                <rect width="33.3" height="25" x="33.3" fill="#FFFFFF"/>
                                <rect width="33.4" height="25" x="66.6" fill="#FF883E"/>
                            </svg>
                        </span>
                    </span>, with roots in&nbsp;<span className="relative inline-block overflow-hidden group/spain">
                        Spain
                        <span className="absolute inset-0 w-full transform-gpu transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 group-hover/spain:translate-y-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                <rect width="100" height="25" y="0" fill="#C60B1E"/>
                                <rect width="100" height="50" y="25" fill="#FFC400"/>
                                <rect width="100" height="25" y="75" fill="#C60B1E"/>
                            </svg>
                        </span>
                    </span>
                </p>
            </div>
        </section>
    );
}
