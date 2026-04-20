import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationContactSection from "@/components/EducationContactSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col">
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationContactSection />
      </main>
    </>
  );
}
