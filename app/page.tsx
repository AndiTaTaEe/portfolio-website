import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

// TODO: add switching languages button: from en to ro and vice versa
// TODO: dark mode based on laptop settings

export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      </>
  );
}
