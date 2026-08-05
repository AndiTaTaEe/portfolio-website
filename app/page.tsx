import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import {About} from "@/components/sections/About";
import {Volunteering} from "@/components/sections/Volunteering";
import {Contact} from "@/components/sections/Contact";
// TODO: add switching languages button: from en to ro and vice versa
// TODO: dark mode based on laptop settings

export default function Home() {
  return (
      <>
      <Hero />
      <About />
      <Projects />
      <Volunteering />
      <Contact />
      </>
  );
}
