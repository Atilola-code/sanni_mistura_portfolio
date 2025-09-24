"use client";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import React, { JSX } from "react";

// Define the shape of a project
interface Project {
  id: number;
  name: string;
  description: string;
  video?: string;
  image?: string;
  tech: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "CareGlow E-commerce Website",
    description: `A modern skincare ecommerce platform designed with a clean UI/UX. 
    It features product listings, shopping cart, and checkout flow. 
    Built with performance and responsiveness in mind, it ensures a smooth shopping experience. 
    Includes product filtering, category pages, and mobile-first design.`,
    video: "/snippet.mp4",
    tech : ["Next.js", "React", "TailwindCSS", "JavaScript"],
    live: "https://careglow-skincare.vercel.app/",
    github: "https://github.com/Atilola-code/capstone-project",
  },
  {
    id: 2,
    name: "Coffee Shop Ecommerce",
    description: `An ecommerce website for a coffee brand with product showcase, 
    cart functionality, and order flow. 
    Designed with a warm coffee-inspired UI, focusing on usability and aesthetics. 
    Mobile-optimized to allow easy browsing and ordering on any device.`,
    video: "/coffee-shop.mp4",
    tech: ["React", "TailwindCSS", "Next.js", "TypeScript"],
    live: "https://coffee-shop-ecommerce-website.vercel.app/",
    github: "https://github.com/Atilola-code/coffee-shop",
  },
  {
    id: 3,
    name: "Admin Dashboard",
    description: `A responsive admin dashboard for managing users, analytics, and settings. 
    Includes charts, tables, and dark/light mode toggle. 
    Built with reusable components and scalable structure for enterprise use. 
    Perfect for tracking key business metrics and managing resources.`,
    video: "/admin-dashboard.mp4",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Recharts"],
    live: "https://admin-dashboard-eta-blond.vercel.app/",
    github: "https://github.com/Atilola-code/admin-dashboard",
  },
  {
    id: 4,
    name: "Flight Booking Form",
    description: `A multi-step flight booking form with input validation, 
    progress indicators, and a summary screen. 
    Built with React Hook Form and Zod for robust validation. 
    Designed with a smooth step-by-step experience to enhance usability.`,
    video: "/flight-booking.mp4",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "React Hook Form", "react-icons"],
    live: "https://flight-booking-form-validation.vercel.app/",
    github: "https://github.com/Atilola-code/flight_form_validation",
  },
  {
    id: 5,
    name: "Fitness Blog Website",
    description: `A blog platform tailored for fitness enthusiasts, 
    featuring posts, categories, and responsive layouts. 
    Designed with SEO and accessibility in mind. 
    Allows users to explore fitness articles in a visually engaging format.`,
    video: "/blog-post.mp4",
    tech: ["Next.js", "React", "TailwindCSS", "Typescript"],
    live: "https://mellifluous-scone-e6e1f6.netlify.app/",
    github: "https://github.com/Atilola-code/blog-post-viewer",
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="min-h-screen bg-[#f9fafb] px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">Projects</h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group"
          >
            {/* Video or Image with overlay */}
            <div className="relative w-full h-60">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    />
                ) : project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
                ) : null}

              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#F95353] px-4 py-2 rounded-lg flex items-center gap-2 mr-4 hover:bg-red-600 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.name}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-lg text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
