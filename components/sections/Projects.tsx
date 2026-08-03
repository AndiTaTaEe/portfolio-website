import React from "react";
import ProjectCard from "../ui/ProjectCard";
import { featuredProjects } from "@/data/projects";

export const Projects = () => {
    return (
        <section id="projects" className="bg-background py-20 px-6">
            {/* container */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* header area */}
                <div className="text-center flex flex-col items-center gap-4">
                    <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-primary">My projects</h2>
                    <p className="font-sans text-lg text-primary/80 max-w-2xl text-center">Here are some of the projects I've worked on during my studies.</p>
                </div>
                {/* projects grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            projectLink={project.projectLink}
                            documentationLink={project.documentationLink}
                            documentationLinkText={project.documentationLinkText}
                            projectLinkText={project.projectLinkText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}