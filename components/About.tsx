import Section from "./Section";
import AboutMeSteps from "./AboutMeSteps";
import AboutHeading from "./AboutHeading";
import AboutImages from "./AboutImages";
import Typer from "./Typer";
import AboutAttenders from "./AboutAttenders";

export default function About() {
  return (
    <Section id="about">
      <h2 className="mb-16">
        <Typer strings={["About me"]} className="text-gray-500 text-3xl" />
      </h2>

      <div className="flex max-xl:flex-col xl:flex-row-reverse  items-center max-xl:items-start justify-between max-xl:gap-32 overflow-hidden">
        <div className="text-lg flex flex-col gap-16  basis-[45%] max-xl:w-4/5 max-sm:w-full overflow-x-hidden">
          <AboutHeading
            words={["Where", "passion", "meets", "powerful", "collaboration"]}
          />
          <AboutMeSteps />
          <div className="flex flex-wrap gap-5 items-center">
            <AboutAttenders />
            <p className="sm:text-xl">
              <span className="text-violet-700">30+</span> satisfied course
              attenders
            </p>
          </div>
        </div>
        <AboutImages />
      </div>
    </Section>
  );
}
