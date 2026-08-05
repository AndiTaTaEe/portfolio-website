import Link from "next/link";
import {ExperienceCarousel} from "@/components/ui/ExperienceCarousel";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencesPage() {
  return (
    <main className="bg-background pt-10 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 px-6">
            <Link href="/" className="font-mono text-sm text-surface transition-colors self-start inline-block px-3 py-2 rounded-lg bg-accent hover:bg-amber-400 transition-colors">
            &larr; ./return_to_main_page 
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
                My professional & volunteering journey
            </h1>
            <p className="text-lg pb-6 text-primary/80 max-w-2xl leading-relaxed">
                Here you can find a detailed overview of my professional and volunteering experiences, showing my growth, skills and contributions in various roles, from leadership positions to hands-on volunteering activities. Each experience has helped me develop both my technical thinking and my interpersonal skills, shaping me into a well-rounded future professional in the field of computer engineering and intelligent systems.
            </p>
        </div>
        {/* photo carousel */}
        <ExperienceCarousel />
        {/* experiences reports */}
        <div className="bg-surface py-24 px-6">
            {/* content container */}
            <div className="text-center flex flex-col items-center gap-4">
                <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-primary mb-3">My experiences throughout my studies</h2>
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            periodTime={experience.periodTime}
                            title={experience.title}
                            description={experience.description}
                            acquiredSkills={experience.acquiredSkills}
                        />
                    ))}
            </div>
        </div>
    </main>
  )
}
