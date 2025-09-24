"use client";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#EBF4FA] flex items-center justify-center px-6 md:px-20 py-12">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-16 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="rounded-xl shadow-2xl transform md:-translate-y-3">
            <div className="bg-white rounded-lg p-3">
              <div className="rounded-md overflow-hidden border-[6px] border-white bg-[#FDBDAE]">
                <Image
                  src="/aboutMe.png"
                  alt="A personal portfolio image for about me section"
                  width={320}   
                  height={420}
                  className="object-cover w-[200px] sm:w-[250px] md:w-[300px] lg:w-[380px] h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: content */}
          <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            I am a Modern <span className="text-[#F95353]">Fullstack Developer</span>
          </h3>

          <p className="text-gray-800 leading-relaxed mb-6 max-w-2xl">
            I build scalable, user-friendly web applications that solve real problems.
            With a strong foundation in both frontend and backend development, I
            turn ideas into polished products using React, Next.js, Tailwind CSS,
            Node.js and modern cloud tooling. I care deeply about performance,
            accessibility, and delightful UX — and I enjoy working closely with
            designers and product teams to ship impact-driven features.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-gray-700 mb-8">
            <div>
              <p className="text-sm text-gray-700">Name</p>
              <p className="font-medium">Sanni Mistura</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">Phone</p>
              <p className="font-medium">+234 9028464243</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">Email</p>
              <p className="font-medium">sannimistura1211@gmail.com</p>
            </div>
          </div>

          <div>
            <a
              href="/Sanni_Mistura_resume.pdf"    
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F95353] text-white font-medium rounded-2xl shadow-md hover:bg-[#eb6565] transition duration-500"
              >
              <FaDownload /> Download CV
            </a>
          </div>
         </div>
      </div>
        </div>
    </section>
  );
}
