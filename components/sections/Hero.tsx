"use client";
import Typewriter from "typewriter-effect";
import { ChevronDown, MessagesSquare, ArrowDown } from "lucide-react";
import Image from "next/image";
import photoAndi from "../../public/image_andi.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* left column*/}
        <div className="flex flex-col items-start">
          {/* main headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold font-sans text-primary min-h-[160px] md:min-h-[180px]">
            Hi, I'm <span className="text-accent font-mono">Andi</span>! <br />
            <span className="text-primary"> I'm passionate of </span>
            <span className="text-accent inline-block font-mono">
              <Typewriter
                options={{
                  strings: [
                    "developing intelligent systems.",
                    "IoT architectures.",
                    "software-hardware integration.",
                    "cloud solutions.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
            <br />
          </h1>
          {/* sub headline */}
          <p className="text-lg md:text-xl text-primary/80 max-w-lg leading-relaxed font-light mt-5 font-sans">
            Specialized in Computer Engineering with a strong passion for
            building intelligent systems, that integrate both software and
            hardware components. I am driven by the challenges of creating
            efficient systems that leverage the power of IoT and cloud
            technologies. My expertise lies in developing innovative solutions
            that easily integrate into people's lives, improving their daily
            experiences.
          </p>
          {/* action buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-6">
            {/* see projects buttons */}
            <a
              href="#projects"
              className="bg-accent text-surface font-semibold px-7 py-3 rounded-lg hover:bg-amber-400 transition-colors shadow-md shadow-gray-300 mr-5 mb-4 ml-4"
            >
              See my projects
              <ChevronDown className="w-5 h-5 inline-block ml-2" />
            </a>
            {/* contact me button */}
            <a
              href="#contact"
              className="bg-surface text-primary font-semibold px-7 py-3 rounded-lg border border-primary hover:bg-primary hover:text-surface transition-colors shadow-md shadow-gray-300 mb-4 ml-4 mr-5"
            >
              Get in touch
              <MessagesSquare className="w-5 h-5 inline-block ml-2" />
            </a>
          </div>
        </div>
        {/* right column */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-sqaure flex items-center justify-center transform transition-transform hover:-translate-y-2 duration-500">
          <Image
            src={photoAndi}
            alt="Andi's photo"
            width={500}
            height={500}
            className="object-contain p-6"
            priority
          />
          <div className="absolute top-10 right-10 w-4 h-4 bg-secondary rounded-full blur-sm opacity-50"></div>
          <div className="absolute bottom-12 left-12 w-3 h-3 bg-accent rounded-full blur-sm opacity-60"></div>
        </div>
      </div>
      {/* background down arrow -> to projects */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a
          href="#projects"
          className="text-accent hover:text-blue-800 transition-colors p-2"
          aria-label="Scroll to my projects"
        />
        <ArrowDown className="w-8 h-8 text-accent" />
      </div>
    </section>
  );
};
