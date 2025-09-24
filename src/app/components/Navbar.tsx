"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`py-6 px-8 fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${
        activeSection === "home" ? "bg-transparent" : "bg-white/80 shadow-md"
      }`}
    >
      <div className="flex flex-row justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-start">
          <h1 className="text-xl md:text-2xl font-medium text-[#F95353]">
            Sanni Mistura
          </h1>
        </div>

        {/* Nav Links */}
        <div className="flex items-end px-12">
          <ul className="flex gap-8 md:gap-12">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className={`text-xl transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-[#F95353]"
                      : activeSection === "home"
                      ? "text-white hover:text-[#F95353]" 
                      : "text-black hover:text-[#F95353]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
