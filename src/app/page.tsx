import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div >
       <Navbar />
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects/>
        <Contact/>
    </div>
  );
}
