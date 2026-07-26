'use client';
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col items-start">
                <h1 className="text-5xl md:text-6xl font-extrabold text-primary min-h-[160px] md:min-h-[180px]">
                   Hi, I'm <span className="text-accent">Andi</span>! <br />
                   <span className="text-primary"> I'm passionate of </span>
                   <span className="text-accent inline-bloc">
                    <Typewriter
                        options={{
                            strings: ["developing intelligent systems.", "IoT architectures.", "software-hardware integration.", "cloud solutions."],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                        }}
                        />
                   </span>
                   <br />
                </h1> 
                <p className="text-lg md:text-xl text-primary/80 max-w-lg leading-relaxed font-light">
                        Specialized in Computer Engineering with a strong passion for building intelligent systems, that integrate both software and hardware components. I am driven by the challenges of creating efficient systems that leverage the power of IoT and cloud technologies. My expertise lies in developing innovative solutions that easily integrate into people's lives, improving their daily experiences.
                </p>               
            </div>
        </div>
    </section>
  );
};
