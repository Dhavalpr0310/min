import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Automation from "@/components/Automation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Automation />
      <Contact />
    </main>
  );
}
