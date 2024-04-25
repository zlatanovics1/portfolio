import Typer from "./Typer";
import Section from "./Section";
import WhatIOfferSteps from "./WhatIOfferSteps";

import OfferImages from "./OfferImages";
import WorkWithMeContextProvider from "@/context/WorkWithMeContextProvider";

export default function WhyWorkWithMe() {
  return (
    <WorkWithMeContextProvider>
      <Section id="whyWorkWithMe">
        <h2 className="mb-16">
          <Typer
            strings={["What sets me apart"]}
            className="text-gray-500 text-3xl"
          />
        </h2>
        <div className="flex gap-20 items-center max-xl:flex-col">
          {/* left side */}
          <div className="basis-1/2 flex flex-col gap-16">
            <h3 className="text-4xl text-gray-300 leading-normal font-semibold">
              Delivering{" "}
              <span className="default-gradient bg-clip-text text-transparent">
                Hard Performing
              </span>{" "}
              and{" "}
              <span className="default-gradient bg-clip-text text-transparent">
                Sales Driving
              </span>{" "}
              websites.
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
