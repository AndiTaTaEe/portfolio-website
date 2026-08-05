"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { RESUME_LINK } from "@/constants/links";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-surface/95 backdrop-blur border-b border-gray-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-6">
        <Link href="/#" className="text-xl font-bold text-primary font-sans">
          &lt;AndiMarian/&gt;
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/#about"
                className="text-primary transition-colors hover:text-accent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className="text-primary transition-colors hover:text-accent"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="text-primary transition-colors hover:text-accent"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-primary transition-colors hover:text-accent"
              >
                Contact
              </Link>
            </li>
          </ul>

          <a
            href={RESUME_LINK}
            download="CV_Cilichidreanu_Andi.pdf"
            className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-semibold text-primary shadow-md shadow-gray-300 transition-colors hover:bg-amber-400"
          >
            <Download className="h-4 w-4" />
            <span>Download my resume</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} border-t border-gray-200 bg-surface md:hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-3 items-center">
            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-primary transition-colors hover:bg-gray-100 hover:text-accent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-primary transition-colors hover:bg-gray-100 hover:text-accent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#volunteer"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-primary transition-colors hover:bg-gray-100 hover:text-accent"
              >
                Volunteering
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-primary transition-colors hover:bg-gray-100 hover:text-accent"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="/CV_Cilichidreanu_Andi.pdf"
            download="CV_Cilichidreanu_Andi.pdf"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 font-semibold text-primary shadow-md shadow-gray-300 transition-colors hover:bg-amber-400"
          >
            <Download className="h-4 w-4" />
            <span>Download my resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
