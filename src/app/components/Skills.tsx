"use client";
import { useState } from "react";
import { 
  FaReact, FaFigma, FaHtml5, FaCss3Alt, FaDatabase, FaPython, 
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiTailwindcss, SiAdobephotoshop, SiPostman, SiNetlify, SiVercel } from "react-icons/si";

const skillsData = [
  // Frontend
  { id: 1, category: "Frontend", name: "React", icon: <FaReact size={80} className="text-blue-500" /> },
  { id: 2, category: "Frontend", name: "Next.js", icon: <SiNextdotjs size={80} className="text-black" /> },
  { id: 3, category: "Frontend", name: "HTML5", icon: <FaHtml5 size={80} className="text-orange-500" /> },
  { id: 4, category: "Frontend", name: "CSS3", icon: <FaCss3Alt size={80} className="text-blue-600" /> },
  { id: 5, category: "Frontend", name: "TailwindCSS", icon: <SiTailwindcss size={60} className="text-sky-500" /> },

  // Backend
  { id: 6, category: "Backend", name: "Python", icon: <FaPython size={80} className="text-yellow-500" /> },
  { id: 7, category: "Backend", name: "Django", icon: <SiDjango size={80} className="text-green-700" /> },
  { id: 8, category: "Backend", name: "Databases", icon: <FaDatabase size={70} className="text-gray-600" /> },

  // UI/UX
  { id: 9, category: "UI/UX", name: "Figma", icon: <FaFigma size={80} className="text-pink-500" /> },

    // Tools
  { id: 10,  category: "Tools", name: "Postman", icon: <SiPostman size={80} className="text-orange-500" /> },
  { id: 11, category: "Tools", name: "Git",  icon: <FaGitAlt size={80} className="text-red-600" /> },
    { id: 12, category: "Tools", name: "GitHub", icon: <FaGithub size={80} className="text-gray-800" /> },
    { id: 13, category: "Tools", name: "Netlify", icon: <SiNetlify size={80} className="text-green-500" /> },
  { id: 14, category: "Tools", name: "Vercel", icon: <SiVercel size={80} className="text-black" /> },

];

const categories = ["All", "Frontend", "Backend", "UI/UX", "Tools"]


export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 px-8 bg-gray-50 min-h-screen mt-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-800">
          My Skills
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-500 ${
                selectedCategory === category
                  ? "bg-[#F95353] text-white shadow-xl"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium text-gray-800">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
