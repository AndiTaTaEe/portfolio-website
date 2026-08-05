import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  imageSrc: string | StaticImageData; // can be a string (URL) or a StaticImageData object (imported image)
  title: string;
  description: string;
  tags: { name: string; highlighted?: boolean }[]; // highlighted - optional property - indicates if the tag should be highlighted
  documentationLink?: string;
  documentationLinkText?: string; // optional property - allows customization of the documentation link text, defaults to "View project's documentation" if not provided
  projectLink?: string;
  projectLinkText?: string; // optional property - allows customization of the link text, defaults to "View project repository" if not provided

}

const ProjectCard = ({
  imageSrc,
  title,
  description,
  tags,
  documentationLink,
  projectLink,
  documentationLinkText = "View project's documentation",
  projectLinkText = "View project repository",
}: ProjectCardProps) => {
  return (
    <div className="group bg-surface rounded-xl flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
      {/* image window */}
      <div className="relative bg-gray-100 w-full aspect-video">
        <Image src={imageSrc} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      {/* content window */}
      <div className="flex flex-col gap-3 p-6 grow">
        <h3 className="font-sans text-xl font-bold text-primary">{title}</h3>
        <p className="font-sans text-base text-primary/80 leading-relaxed">
          {description}
        </p>
        {/* tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) =>
            tag.highlighted ? (
              <span
                key={index}
                className="font-mono text-xs font-medium text-amber-700 bg-secondary/20 px-3 py-1 rounded-md"
              >
                {tag.name}
              </span>
            ) : (
              <span
                key={index}
                className="font-mono text-xs font-medium text-primary bg-gray-100 px-3 py-1 rounded-md"
              >
                {tag.name}
              </span>
            ),
          )}
        </div>
      </div>
      {/* action footer + separator */}
      <div className="mt-auto px-6 pb-6 pt-5 border-t border-gray-300 flex items-center justify-end">
        {/* if there is a documentation link, show it, otherwise show only the project link */}
        {(documentationLink && projectLink) ? (
          <>
        <a
          href={`/portfolio-website/${documentationLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold text-accent flex items-center gap-1 hover:text-blue-800 transition-colors"
        >
          {documentationLinkText}
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
        </a>
        <a
          href={`/portfolio-website/${projectLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold text-accent flex items-center gap-1 ml-6 hover:text-blue-800 transition-colors"
        >
          {projectLinkText}
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
        </a>
        </>
        ) : (
          <a
          href={`/portfolio-website/${projectLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm font-semibold text-accent flex items-center gap-1 hover:text-blue-800 transition-colors"
        >
          {projectLinkText}
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
        </a>
        )
      }
      </div>
    </div>
  );
};

export default ProjectCard;
