"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Footer = () => {

  const pathname = usePathname();
  // helper function for generating section hrefs based on the current pathname
  const sectionHref = (id: string) => {
    if (pathname === "/") {
      return `#${id}`;
    }
    return `/#${id}`;
  }


  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* top row footer content - socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* andimarian logo from the navbar */}
          <Link href="/" className="text-xl font-bold text-surface font-sans">
            &lt;AndiMarian/&gt;
          </Link>
          {/* social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AndiTaTaEe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-surface/70 transition-colors hover:text-secondary"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/andi-marian-cilichidreanu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-surface/70 transition-colors hover:text-secondary"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:ciliandimarian@gmail.com"
              aria-label="Email"
              className="text-surface/70 transition-colors hover:text-secondary"
            >
              <IoMail size={24} />
            </a>
          </div>
        </div>
        {/* middle row footer content - pages */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          <Link
            href={sectionHref("about")}
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            About
          </Link>
          <Link
            href={sectionHref("projects")}
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            Projects
          </Link>
          <Link
            href={sectionHref("experience")}
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            Experience
          </Link>
          <Link
            href={sectionHref("contact")}
            className="font-sans text-sm font-medium text-surface/80 hover:text-surface transition-colors"
          >
            Contact
          </Link>
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
