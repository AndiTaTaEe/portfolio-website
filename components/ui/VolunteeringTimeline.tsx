import React from "react";

export const VolunteeringTimeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-12 px-4">
      {/* vertical central line*/ }
      <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-accent md:-translate-x-1/2"></div>

      {/* timeline item row - 1st item left */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
        <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-surface border-2 border-accent md:-translate-x-1/2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>

        {/* left side content box*/}
        <div className="w-full md:w-[45%] pl-16 md:pl-0 md:text-right mt-2 md:mt-0">
          <h3 className="font-mono text-xs font-semibold text-primary/80 mb-2">
            [ 2025 - PRESENT ]
          </h3>
          <h2 className="font-sans text-lg font-bold text-primary mb-2">
            President @ BEST Brașov
          </h2>
        </div>
        <div className="hidden md:block md:w-[45%]"></div>
      </div>

      {/* timeline item row - 2nd item right */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
        {/* vertical line dot */ }
        <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-surface border-2 border-accent md:-translate-x-1/2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>
        {/* left side space*/}
        <div className="hidden md:block md:w-[45%]"></div>

        {/* right side content box */}
        <div className="w-full md:w-[45%] pl-16 md:pl-0 md:text-left mt-2 md:mt-0">
          <h3 className="font-mono text-xs font-semibold text-primary/80 mb-2">
            [ Apr 2025 - May 2025 ]
          </h3>
          <h2 className="font-sans text-lg font-bold text-primary mb-2">
            Project Manager Apprentice @ METAMINDS
          </h2>
        </div>
      </div>

      {/* timeline item row - 3rd item left */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
        <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-surface border-2 border-accent md:-translate-x-1/2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>
        {/* left side content box*/}
        <div className="w-full md:w-[45%] pl-16 md:pl-0 md:text-right mt-2 md:mt-0">
          <h3 className="font-mono text-xs font-semibold text-primary/80 mb-2">
            [ 2024 - 2025 ]
          </h3>
          <h2 className="font-sans text-lg font-bold text-primary mb-2">
            Vicepresident & Marketing Department Coordinator @ BEST Brașov
          </h2>
        </div>
        <div className="hidden md:block md:w-[45%]"></div>
      </div>

      {/* timeline item row - 4th item right */}
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16">
        {/* vertical line dot */ }
        <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-surface border-2 border-accent md:-translate-x-1/2 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
        </div>
        {/* left side space*/}
        <div className="hidden md:block md:w-[45%]"></div>

        {/* right side content box */}
        <div className="w-full md:w-[45%] pl-16 md:pl-0 md:text-left mt-2 md:mt-0">
          <h3 className="font-mono text-xs font-semibold text-primary/80 mb-2">
            [ 2023 - 2024 ]
          </h3>
          <h2 className="font-sans text-lg font-bold text-primary mb-2">
            Brand Awareness Team member @ BEST
          </h2>
        </div>
      </div>
    </div>
  );
};
