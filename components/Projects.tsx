import { projects } from "@/utils/static-data";
import ProjectItem from "./ProjectItem";
import Section from "./Section";
// import Typer from "./Typer";

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="mb-24 text-2xl">
        {/* <Typer
          className="text-gray-500 text-3xl"
          strings={["Browse through my projects"]}
        /> */}
        Handpicked projects
      </h2>
      <ul className="flex flex-col gap-80 overflow-x-hidden">
        {projects.map((project, i) => (
          <ProjectItem
            key={project.title}
            {...project}
            reverse={Boolean(i % 2)}
          />
        ))}
      </ul>
    </Section>
  );
}
