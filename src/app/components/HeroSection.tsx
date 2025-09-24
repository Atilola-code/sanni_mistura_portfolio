"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between min-h-[100vh] px-8 md:px-32 pt-8 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat relative gap-8">
      <div className="absolute inset-0 bg-black/60 "></div>
      <div className="flex-1 md:flex-none max-w-xl md:max-w-2xl relative z-10">
        <p className="text-xl md:text-xl font-semibold uppercase text-[#F95353] mb-4">Hello!</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug mb-4">
          I am {" "}
          <TypeAnimation
            sequence={[
            "Sanni Mistura",
            2000,
            "",
            "a Web Developer",
            2000,
            "",
            "a Product Designer",
            2000,
            "",
            "a Backend Developer",
            2000,
            "",
          ]}
          wrapper="span"
          cursor={true}
          speed={50}
          deletionSpeed={40}
          repeat={Infinity}
          className="text-[#F95353]"
          />
        </h1>
        <div className="mt-6 max-w-lg text-md text-white leading-relaxed space-y-2">
        <p>
          I am a passionate fullstack web developer with a keen interest in creating beautiful and functional web applications.
        </p>
        <p>I love turning design concepts into seamless digital experiences using tools like React, Next.js, Tailwind CSS and Figma</p>
        </div>
        <a
          href="#contact"
          className="inline-block mt-12 px-6 py-3 border-2 text-[#FBFDFE] border-[#F95353] font-medium rounded-2xl mr-6 relative overflow-hidden group transition-all"
          >
          <span className="absolute inset-0 bg-[#F95353] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact Info</span>
        </a>
        <a
          href="#contact"
          className="inline-block mt-12 px-6 py-3 border-2 text-[#FBFDFE] border-[#F95353] font-medium rounded-2xl relative overflow-hidden group transition-all"
          >
          <span className="absolute inset-0 bg-[#F95353] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Works</span>
        </a>
            </div>

        {/* Portfolio Image */}
        <Image
          src="/portfolio.png"
          alt="A personal portfolio image"
          width={400}
          height={400}
          className="relative object-contain w-[280px] sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[500px] h-auto"
          priority
        />
    </section>
  );
}

