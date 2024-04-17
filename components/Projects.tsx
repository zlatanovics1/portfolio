import { projects } from "@/static-data";
import ProjectItem from "./ProjectItem";
import Section from "./Section";
import SectionSlider from "./SectionSlider";

export default function Projects() {
  return (
    <Section>
      <SectionSlider title="Browse through my projects" />
      <ul className="flex flex-col gap-48 overflow-x-hidden">
        {projects.map((project, i) => (
          <ProjectItem
            key={project.title}
            {...project}
            reverse={!Boolean(i % 2)}
          />
        ))}
      </ul>
      <div className="w-full h-96" />
    </Section>
  );
}
