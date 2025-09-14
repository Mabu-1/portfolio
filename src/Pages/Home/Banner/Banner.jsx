import Lottie from "lottie-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import work from "../../../../src/assets/work.json";

const SocialMediaIcons = () => {
  return (
    <div className="hidden sm:flex flex-col items-center">
      {/* Vertical line */}
      <div className="h-24 my-8 border-l border-lime-500"></div>

      {/* Icons */}
      <div className="flex flex-col gap-5 mb-6">
        <a
          href="https://www.linkedin.com/in/md-mahtab-uddin-3a366b326/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="transition-transform hover:scale-110 hover:text-lime-400"
        >
          <FaLinkedin size={26} className="text-lime-500 drop-shadow" />
        </a>
        <a
          href="https://github.com/Mabu-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="transition-transform hover:scale-110 hover:text-lime-400"
        >
          <FaGithub size={26} className="text-lime-500 drop-shadow" />
        </a>
      </div>

      {/* Label */}
      <p className="rotate-90 font-semibold text-sm tracking-wider lg:mt-5 md:mt-2 sm:mt-0 text-lime-500">
        FOLLOW ME
      </p>
    </div>
  );
};

const Banner = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center gap-10 my-10">
      {/* Left: Social Icons + Animation */}
      <div className="flex flex-col sm:flex-row items-center flex-1">
        <div className="hidden sm:block w-1/5">
          <SocialMediaIcons />
        </div>
        <div className="w-full sm:w-auto max-w-md relative z-10">
          <Lottie animationData={work} loop style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex-1 text-center sm:text-left">
        {/* Name + Title */}
        <h1 className="text-3xl md:text-6xl text-lime-500 font-extrabold mb-2 animate-fade-in">
          Mahtab Uddin
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 font-medium mb-6 animate-fade-in">
          // Full Stack & Shopify Developer //
        </p>

        {/* Intro */}
        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl mx-auto sm:mx-0 mb-8">
          Crafting{" "}
          <span className="text-lime-500">high-performance website</span> and{" "}
          <span className="text-lime-500">Shopify solutions</span> with a focus on{" "}
          <span className="text-lime-500">clean design</span>,{" "}
          <span className="text-lime-500">scalability</span>, and{" "}
          <span className="text-lime-500">great user experience</span>. Skilled in{" "}
          <span className="text-lime-500">responsive interfaces</span>,{" "}
          <span className="text-lime-500">workflow optimization</span>, and delivering
          projects efficiently with{" "}
          <span className="text-lime-500">creativity</span> and{" "}
          <span className="text-lime-500">technical precision</span>.
        </p>

        {/* Mobile Social Icons */}
        <div className="flex flex-col items-center sm:hidden">
          <div className="flex items-center mb-4">
            <div className="border-t border-gray-500 w-20"></div>
            <p className="mx-4 font-bold text-lime-500">Follow Me</p>
            <div className="border-t border-gray-500 w-20"></div>
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/md-mahtab-uddin-3a366b326/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={26} className="text-lime-500" />
            </a>
            <a
              href="https://github.com/Mabu-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={26} className="text-lime-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
