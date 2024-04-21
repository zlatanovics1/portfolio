import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Offerings from "@/components/Offerings";
import Projects from "@/components/Projects";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <SocialProof />
      {/* <Offerings /> */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}
