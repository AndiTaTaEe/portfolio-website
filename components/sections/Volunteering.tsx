"use client";

import react from "react";
import { VolunteeringTimeline } from "../ui/VolunteeringTimeline";
import { Ellipsis } from "lucide-react";

export const Volunteering = () => {
  return (
    <section id="volunteer" className="bg-surface py-15 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex flex-col gap-2 font-sans text-3xl font-extrabold text-primary tracking-wide">
          My volunteering journey
        </h2>
        </div>
        <div className="h-1 w-16 bg-accent rounded-full mb-3"></div>
        <VolunteeringTimeline />
      {/* action buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-3 p-6 justify-center md:justify-center lg:justify-center w-full">
        {/* see projects buttons */}
        <a
          href="#volunteeringexperiences"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-surface font-semibold px-7 py-3 rounded-lg hover:bg-amber-400 transition-colors shadow-md shadow-gray-300 text-center w-full sm:w-auto"
        >
          See my volunteering experiences
          <Ellipsis className="w-5 h-5 inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};
