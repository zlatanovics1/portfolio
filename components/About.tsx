import Image from "next/image";
import Section from "./Section";
import AboutMeSteps from "./AboutMeSteps";
import AboutHeading from "./AboutHeading";
import AboutImages from "./AboutImages";
import Typer from "./Typer";

export default function About() {
  return (
    <Section id="about">
      <h2 className="mb-16">
        <Typer strings={["About me"]} className="text-gray-500 text-3xl" />
      </h2>

      <div className="flex max-xl:flex-col xl:flex-row-reverse  items-center max-xl:items-start justify-between max-xl:gap-32 overflow-hidden">
        <div className="text-lg flex xl:items-end flex-col gap-16  basis-1/2 max-xl:w-4/5 max-sm:w-full overflow-x-hidden">
          <AboutHeading
            words={["Where", "passion", "meets", "powerful", "collaboration"]}
          />
          <AboutMeSteps />
          <div className="flex flex-wrap gap-5 items-center">
            <div className="flex items-center">
              <div className="rounded-full relative border-[2px] border-violet-700  h-14 w-14 overflow-hidden">
                <Image
                  fill
                  src="/person1.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full -ml-5 relative border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person2.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person3.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person4.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person5.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person6.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
            </div>

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
