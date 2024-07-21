import Section from "./Section";

import WhatIOfferSteps from "./WhatIOfferSteps";

import OfferImages from "./OfferImages";
import WorkWithMeContextProvider from "@/context/WorkWithMeContextProvider";

export default function WhyWorkWithMe() {
  return (
    <WorkWithMeContextProvider>
      <Section id="whyWorkWithMe">
        <h2 className="mb-16 text-3xl">
          {/* <Typer
            strings={["What sets me apart"]}
            className="text-gray-500 text-3xl"
          /> */}
          What sets me apart
        </h2>
        <div className="flex gap-20 items-center max-xl:flex-col">
          {/* left side */}
          <div className="basis-1/2 flex flex-col gap-16">
            <h3 className="text-4xl text-gray-300 leading-normal font-semibold">
              Delivering <span className="skewtext">hard performing</span> and{" "}
              <span className="skewtext">sales driving</span> websites.
            </h3>
            <WhatIOfferSteps />
          </div>
          {/* right side */}
          <OfferImages />
        </div>
      </Section>
    </WorkWithMeContextProvider>
  );
}
