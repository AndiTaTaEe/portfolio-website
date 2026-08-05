interface ExperienceCardProps {
  periodTime: string;
  title: string;
  description: string;
  acquiredSkills: string[];
}

const ExperienceCard = ({
  periodTime,
  title,
  description,
  acquiredSkills,
}: ExperienceCardProps) => {
  return (
    <div className="bg-background border-l-4 border-accent p-8 rounded-r-xl shadow-sm flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300">
      <p className="font-mono text-sm font-semibold text-accent">
        {periodTime}
      </p>
      <h3 className="font-sans text-2xl font-bold text-primary">{title}</h3>
      <p className="font-sans text-base text-primary/80 leading-relaxed">
        {description}
      </p>
      {/* skills container*/}
      <div className="mt-2 flex w-full flex-col items-center gap-3">
        <p className="font-mono text-accent text-sm font-bold">
          &gt; acquired_skills:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {acquiredSkills.map((skill, index) => (
            <span
              key={index}
              className="font-mono text-xs text-surface bg-primary px-4 py-2 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
