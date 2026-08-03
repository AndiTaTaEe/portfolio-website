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
        <div className="flex flex-col items-start md:items-center lg:items-start md:text-center lg:text-left">
          {/* main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans text-primary leading-tight md:min-h-[160px]">
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
          <p className="text-lg md:text-xl text-primary/80 max-w-lg leading-relaxed font-light mt-5 font-sans md:mx-auto lg:mx-0">
            Specialized in Computer Engineering with a strong passion for
            building intelligent systems, that integrate both software and
            hardware components. I am driven by the challenges of creating
            efficient systems that leverage the power of IoT and cloud
            technologies. My expertise lies in developing innovative solutions
            that easily integrate into people's lives, improving their daily
            experiences.
          </p>
          {/* action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-3 p-6 justify-center md:justify-center lg:justify-start w-full">
            {/* see projects buttons */}
            <a
              href="#projects"
              className="bg-accent text-surface font-semibold px-7 py-3 rounded-lg hover:bg-amber-400 transition-colors shadow-md shadow-gray-300 text-center w-full sm:w-auto"
            >
              See my projects
              <ChevronDown className="w-5 h-5 inline-block ml-2" />
            </a>
            {/* contact me button */}
            <a
              href="#contact"
              className="bg-surface text-primary font-semibold px-7 py-3 rounded-lg border border-primary hover:bg-primary hover:text-surface transition-colors shadow-md shadow-gray-300 text-center w-full sm:w-auto"
            >
              Get in touch
              <MessagesSquare className="w-5 h-5 inline-block ml-2" />
            </a>
          </div>
        </div>
        {/* right column */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center transform transition-transform hover:-translate-y-2 duration-500">
          <Image
            src={photoAndi}
            alt="Andi's photo"
            width={500}
            height={500}
            className="object-cover p-5 rounded-lg shadow-lg shadow-gray-300"
            priority
          />
        </div>
      </div>
    </section>
  );
};
