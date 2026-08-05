"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* top row footer content - socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* andimarian logo from the navbar */}
          <a href="#" className="text-xl font-bold text-surface font-sans">
            &lt;AndiMarian/&gt;
          </a>
          {/* social links */}
          <div className="flex items-center gap-6">
            <FaGithub
              size={24}
              className="text-surface/70 transition-colors hover:text-secondary cursor-pointer"
              onClick={() =>
                window.open("https://github.com/AndiTaTaEe", "_blank")
              }
            />
            <FaLinkedin
              size={24}
              className="text-surface/70 transition-colors hover:text-secondary cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andi-marian-cilichidreanu/",
                  "_blank",
                )
              }
            />
            <IoMail
              size={24}
              className="text-surface/70 transition-colors hover:text-secondary cursor-pointer"
              onClick={() =>
                window.open("mailto:ciliandimarian@gmail.com", "_blank")
              }
            />
          </div>
        </div>
        {/* middle row footer content - pages */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          <a
            href="#about"
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            Projects
          </a>
          <a
            href="#volunteer"
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            Volunteering
          </a>
          <a
            href="#contact"
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="w-full border-t border-surface/70"></div>
        {/* bottom row footer content - copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-xs text-surface/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Andi-Marian Cilichidreanu. All
            rights reserved.
          </span>
          <span className="font-sans text-xs text-surface/50 text-center md:text-left">
            Built with Next.js and Tailwind CSS.
          </span>
        </div>
      </div>
    </footer>
  );
};
