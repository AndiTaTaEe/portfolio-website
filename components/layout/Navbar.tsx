import React from "react";
import { Download } from "lucide-react";

// TODO: make the navbar responsive and add a hamburger menu for mobile view
export const Navbar = () => {
  return (
    <nav className="bg-surface border-b border-gray-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary font-bold text-xl">
          &lt;AndiMarian/&gt;
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-primary hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-primary hover:text-accent">
                Projects
              </a>
            </li>
            <li>
              <a href="#volunteer" className="text-primary hover:text-accent">
                Volunteering
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary hover:text-accent">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/CV_Cilichidreanu_Andi.pdf"
            download="CV_Cilichidreanu_Andi.pdf"
            className="flex items-center gap-2 bg-secondary text-primary font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors shadow-md shadow-gray-300"
          >
            <Download className="w-4 h-4" />
            <span>Download my resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
