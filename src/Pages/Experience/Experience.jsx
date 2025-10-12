import React from "react";
import { FaBuilding, FaTools, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Liquid",
    "Shopify",
    "App Integration",
    "Client Management",
  ];

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Wrapper card */}
        <div className="relative overflow-hidden flex flex-col items-center text-center gap-6 p-10 rounded-2xl border-2 border-lime-500/30 bg-slate-900/80 backdrop-blur-lg transition-all duration-500 ease-out shadow-xl hover:scale-[1.02] hover:shadow-lime-500/20">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-lime-400/30 border-r-0 border-b-0 rounded-tl-2xl"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-2 border-lime-400/30 border-l-0 border-b-0 rounded-tr-2xl"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-lime-400/30 border-r-0 border-t-0 rounded-bl-2xl"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-lime-400/30 border-l-0 border-t-0 rounded-br-2xl"></div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4 relative inline-block">
            Experience
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400"></span>
          </h2>

          {/* Company Logo */}
          <div className="flex items-center justify-center relative mb-6">
            <div className="absolute -inset-6 bg-gradient-radial from-lime-400/20 via-lime-400/5 to-transparent rounded-full animate-pulse"></div>
            <img
              src="./sm_technology_logo.jpg"
              alt="SM Technology Logo"
              className="relative w-32 h-32 md:w-44 md:h-44 rounded-full object-cover shadow-lg ring-4 ring-lime-400/40 transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Job Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Web Developer
          </h3>

          {/* Company */}
          <div className="flex items-center justify-center gap-2 text-lime-400 text-lg md:text-xl font-semibold mb-2">
            <FaBuilding className="text-xl" />
            <span>SM TECHNOLOGY</span>
          </div>

          {/* Time Period */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 text-sm md:text-base text-slate-300 px-5 py-2 bg-lime-400/10 rounded-2xl border border-lime-400/30 shadow-sm">
              <FaCalendarAlt className="text-lime-400 text-lg" />
              <span className="font-medium">Feb 2025 – Present</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl mb-6">
            Delivered custom Shopify e-commerce solutions for clients worldwide.
            Led projects from concept to completion, focusing on{" "}
            <span className="text-lime-400">theme development</span>,{" "}
            <span className="text-lime-400">app integration</span>, and{" "}
            <span className="text-lime-400">client management</span> to ensure
            successful delivery.
          </p>

          {/* Skills */}
          <h4 className="flex items-center justify-center gap-2 text-white text-xl font-semibold mb-4">
            <FaTools className="text-lime-400" />
            Key Skills
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-2 bg-lime-400/10 text-lime-400 rounded-2xl text-sm md:text-base font-medium border border-lime-400/30 transition-all duration-300 hover:bg-lime-400/20 hover:-translate-y-1 hover:shadow-md hover:shadow-lime-400/30"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
