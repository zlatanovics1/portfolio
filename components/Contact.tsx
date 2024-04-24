import Section from "./Section";
import EmailMe from "./EmailMe";
import ContactForm from "./ContactForm";
import LinkedIn from "./LinkedIn";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid relative grid-cols-[2fr,3fr] max-xl:grid-cols-1  border-2 border-violet-700 rounded-xl lg:w-4/5 m-auto">
        <div className=" py-10 px-5 border-violet-600 flex flex-col gap-20">
          <h3 className="text-3xl font-semibold leading-normal text-gray-300">
            Let&apos;s create
            <br />
            <span className="default-gradient bg-clip-text text-transparent">
              {" "}
              &lt;SomethingAmazing /&gt;{" "}
            </span>
            <br /> together!
          </h3>
          <div className="mt-auto space-y-3">
            <LinkedIn />
            <EmailMe />
          </div>
        </div>
        <div className="xl:hidden bg-gray-800 mx-5 h-[2px]" />

        <ContactForm />
        <div className="hidden xl:block absolute left-[39%] top-10 bottom-10 w-[2px] bg-gray-800" />
      </div>
    </Section>
  );
}
