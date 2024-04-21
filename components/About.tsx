import Image from "next/image";
import Section from "./Section";
import SectionSlider from "./SectionSlider";
import AboutMeSteps from "./AboutMeSteps";
import AboutHeading from "./AboutHeading";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <Section>
      <SectionSlider title="About me" heading />

      <div className="flex max-xl:flex-col  items-center max-xl:items-start justify-between max-xl:gap-32">
        <div className="text-lg flex flex-col gap-16  basis-1/2 max-xl:w-4/5 max-sm:w-full">
          <AboutHeading />
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
