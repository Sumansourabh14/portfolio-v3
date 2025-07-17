import ProjectGrid from "@/components/grid/ProjectGrid";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  return (
    <section className="font-sans flex flex-col items-center max-w-[1400px] mx-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Hero />
        <section className="space-y-16">
          <WorkExperience />
          <ProjectGrid />
          <About />
          <Testimonials />
          <Contact />
        </section>
      </main>
    </section>
  );
}
