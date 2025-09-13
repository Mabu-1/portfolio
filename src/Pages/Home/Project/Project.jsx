import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "TROLLEYBOSS",
    description: "Developed the TrolleyBoss e-commerce website, an online store for heavy-duty plant trolleys. Built a clean, user-friendly interface with focus on product showcase, easy navigation, and seamless shopping experience.",
    website: "https://trolleyboss.com/",
    image: "https://i.ibb.co.com/tMGLMzwk/Screenshot-26.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5", "E-commerce"],
  },
  {
    name: "BIGSWAG COLLECTION",
    description: "Built and designed the BigSwagCollection Shopify store, including custom sections for a unique look and feel. Set up marketing, shipping, and delivery features to create a fully functional e-commerce experience.",
    website: "https://bigswagcollection.store/",
    image: "https://i.ibb.co.com/j9TRQ0q7/Screenshot-27.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5", "E-commerce", "SEO Setup"],
  },
  {
    name: "NEEPETZ",
    description: "Designed and developed the Nepetz UK Shopify store with custom collections and filters to help customers easily find products. Optimized the store for a seamless e-commerce experience.",
    website: "https://www.nepetz.co.uk/",
    image: "https://i.ibb.co.com/xtrgDgRp/Screenshot-28.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5", "E-commerce"],
  },
  {
    name: "SENSES",
    description: "Developed The Senses Store using the Shopify Sense theme. Optimized for SEO, integrated Google Search Console, and set up domain ownership along with digital marketing tools.",
    website: "https://thesensesstore.com/",
    image: "https://i.ibb.co.com/ch4nR7cc/Screenshot-29.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5", "E-commerce", "SEO Setup"],
  },
    {
    name: "DINASMART",
    description: "Designed and developed the DINASMART   e-commerce website, an online store for smart watches. Built a clean, user-friendly interface with focus on product showcase, easy navigation, and seamless shopping experience",
    website: "https://dinasmart.com//",
    image: "https://i.ibb.co.com/LDJDzVkH/Screenshot-32.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3", "HTML5", "E-commerce"],
  },
  {
    name: "MovieDB",
    description: "Explore a movie database with dynamic search, detailed pages, comparison tools, and the ability to save favorites to a Watch List or share on social media.",
    website: "https://movie-db-dxhb.vercel.app/",
    github: "https://github.com/Mabu-1/MovieDB",
    image: "https://i.ibb.co/NyVM2gn/Screenshot-2024-12-24-124136.png",
    tags: ["Next.js", "Tailwind CSS", "API Integration", "MongoDB", "Axios", "Vercel"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting innovative and user-friendly web applications with{" "}
            <span className="ml-2 text-2xl font-bold text-lime-400">cutting-edge technologies</span>
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden hover:shadow-lime-500/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-lime-500/20 rounded-2xl"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 text-base mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full text-sm font-medium border border-lime-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-lime-500 to-lime-600 text-white font-medium rounded-lg hover:from-lime-600 hover:to-lime-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt /> <span>Website</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} code on GitHub`}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300"
                    >
                      <FaGithub /> <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="https://github.com/Mabu-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lime-500 text-white font-bold rounded-xl hover:bg-lime-600 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
