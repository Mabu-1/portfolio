// Skills.jsx
import React from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaShopify } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const SkillCard = ({ icon: Icon, name }) => (
  <div
    role="img"
    aria-label={`Skill: ${name}`}
    title={name}
    tabIndex={0}
    className="group relative flex items-center justify-center w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-md transform transition-all duration-300
               hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
  >
    <div className="flex flex-col items-center">
      <Icon
        aria-hidden="true"
        className="text-3xl sm:text-4xl md:text-5xl text-lime-400 transition-transform duration-300 group-hover:scale-105"
        style={{ filter: "drop-shadow(0 0 10px rgba(163,230,53,0.28))" }}
      />
      <span className="mt-1 text-xs sm:text-sm font-medium text-white">{name}</span>
    </div>

    {/* hidden text for screen readers */}
    <span className="sr-only">{name}</span>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiBootstrap, name: "Bootstrap" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: FaReact, name: "ReactJS" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiExpress, name: "ExpressJS" },
    { icon: FaNodeJs, name: "NodeJS" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: FaShopify, name: "Shopify" },
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading" className="my-10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">
            My Skills
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-300">
            Crafting beautiful and functional web experiences with{" "}
            <span className="ml-2 text-xl sm:text-2xl font-bold text-lime-400">modern technologies</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
