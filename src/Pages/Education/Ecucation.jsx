import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
       <h2 className="text-3xl md:text-4xl font-bold text-center text-lime-400 mb-12 relative">
  Education
  <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full"></div>
</h2>

        {/* Education Card */}
        <div className="relative overflow-hidden flex flex-col items-center gap-6 rounded-2xl p-10 bg-slate-900/80 border-2 border-lime-400/30 backdrop-blur-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-lime-400/20">
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-7 h-7 border-2 border-lime-400/30 border-r-0 border-b-0 rounded-tl-2xl"></div>
          <div className="absolute top-3 right-3 w-7 h-7 border-2 border-lime-400/30 border-l-0 border-b-0 rounded-tr-2xl"></div>
          <div className="absolute bottom-3 left-3 w-7 h-7 border-2 border-lime-400/30 border-r-0 border-t-0 rounded-bl-2xl"></div>
          <div className="absolute bottom-3 right-3 w-7 h-7 border-2 border-lime-400/30 border-l-0 border-t-0 rounded-br-2xl"></div>

          {/* Glow effects */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-lime-500/20 rounded-full blur-3xl"></div>

          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/pYy5skr/Png-Item-5916871.png"
              alt="University Logo"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white p-2 shadow-lg object-contain"
            />
          </div>

          {/* Details */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              B.Sc. in Computer Science and Engineering
            </h3>
            <p className="text-lime-400 text-lg font-medium mb-6">
              International Islamic University Chittagong
            </p>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-lime-400" />
                <span>April 2020 — June 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-lime-400" />
                <span>CGPA — 3.51 / 4.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
