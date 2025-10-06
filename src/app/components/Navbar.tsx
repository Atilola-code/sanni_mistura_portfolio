"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // hamburger & close icons

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // mobile toggle

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md ${
        activeSection === "home" ? "bg-transparent" : "bg-white/80 shadow-md"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        {/* Logo / Portfolio Name */}
        <h1
          className={`text-xl md:text-2xl font-semibold ${
            activeSection === "home" ? "text-[#F95353]" : "text-[#F95353]"
          }`}
        >
          Sanni Mistura
        </h1>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-[#F95353] md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className={`text-lg transition-colors duration-300 ${
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0F0D2C] backdrop-blur-2xl text-center py-8 space-y-6 transition-all duration-500 rounded-bl-full">
          {links.map((link) => (
            <div key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)} // close menu when a link is clicked
                className={`block text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-[#F95353]"
                    : "text-white hover:text-[#F95353]"
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
