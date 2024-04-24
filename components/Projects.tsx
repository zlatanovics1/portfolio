import { projects } from "@/static-data";
import ProjectItem from "./ProjectItem";
import Section from "./Section";
import Typer from "./Typer";

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="mb-16">
        <Typer
          className="text-gray-500 text-3xl"
          strings={["Browse through my projects"]}
        />
      </h2>
      <ul className="flex flex-col gap-48 overflow-x-hidden">
        {projects.map((project, i) => (
          <ProjectItem
            key={project.title}
            {...project}
            reverse={!Boolean(i % 2)}
          />
        ))}
      </ul>
    </Section>
  );
}
