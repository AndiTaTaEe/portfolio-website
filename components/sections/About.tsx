import React from "react";

export const About = () => {
    return (
        <section id="about" className="bg-surface py-15 px-6">
            {/* container header */}
            <div className="max-w-7xl mx-auto">
                <h2 className="flex flex-col gap-2 font-sans text-3xl font-extrabold text-primary tracking-wide">
                    Learn more about me!
                </h2>
            </div>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
            {/* grid content container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mt-12">
                {/* left column */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-justify">
                    <p className="font-sans text-lg text-primary/80 leading-relaxed">
                    My engineering journey is rooted in a deep fascination with the intersection of software and hardware. After earning my Bachelor's degree in Computer Engineering from <b>"Transilvania" University of Brașov</b> and achieving the professional title of Engineer, I've focused my efforts on IoT architectures, cloud solutions and the development of intelligent systems.
                    </p>
                    <p className="font-sans text-lg text-primary/80 leading-relaxed">
                    Starting in October 2026, I will be pursuing a Master's program in Advanced Software Services at the <b>National University of Science and Technology "POLITEHNICA" of Bucharest</b>, where I aim to further deepen my knowledge and skills in distributed systems, cloud computing and software-hardware integration.
                    </p>
                    <p className="font-sans text-lg text-primary/80 leading-relaxed">
                    Beyond the IDE's and code snippets, I believe in the power of community, collaboration and continuous learning. Whether it's through actively directing strategic initiatives as the President of a student NGO in Brașov, organizing events, studying Modern Greek, or exploring my passion for music, I approach every challenge with the same dedication and curiosity that drives my engineering pursuits.
                    </p>
                </div>
                {/* right column */}
                <div className="lg:col-span-5">
                    <div className="bg-background rounded-xl border-t-4 border-accent shadow-md p-8 h-fit">
                        <div className="font-mono text-sm text-primary">
                            <div className="flex flex-col gap-1 mb-6">
                                <span className="font-semibold">&gt; whoami</span>
                                <span className="text-primary/80">Cilichidreanu Andi-Marian</span>
                            </div>
                            <div className="flex flex-col gap-1 mb-6">
                                <span className="font-semibold">&gt; current_title</span>
                                <span className="text-primary/80">Computer Engineer</span>
                            </div>
                            <div className="flex flex-col gap-1 mb-6">
                                <span className="font-semibold">&gt; upcoming_milestone</span>
                                <span className="text-primary/80">MSc. in Advanced Software Services (Oct '26)</span>
                                <span>National University of Science and Technology "POLITEHNICA" of Bucharest</span>
                            </div>
                            <div className="flex flex-col gap-1 mb-6">
                                <span className="font-semibold">&gt; leadership_experience</span>
                                <span className="text-primary/80">President @ BEST Brașov (Sep '25 - Aug '26), "Transilvania" University of Brașov</span>
                                <span className="text-primary/80">Vicepresident & Marketing Department Coordinator @ BEST Brașov (Sep '24 - Aug '25), "Transilvania" University of Brașov</span>
                            </div>
                            <div className="flex flex-col gap-1 mb-6">
                                <span className="font-semibold">&gt; languages_spoken</span>
                                <span className="text-primary/80"> [ 'Romanian': 'Native', 'English': 'Fluent', 'French': 'Beginner/Intermediate', 'Modern Greek': 'Beginner' ]</span>
                            </div>
                            <div className="flex flex-col gap-1 mb-6">
                                <span className="font-semibold">&gt; offscreen_activities</span>
                                <span className="text-primary/80"> [ 'Music', 'Travelling', 'Cooking' ]</span>
                            </div>
                        </div>
                        <div className="inline-block w-2.5 h-5 bg-primary animate-pulse align-middle"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}