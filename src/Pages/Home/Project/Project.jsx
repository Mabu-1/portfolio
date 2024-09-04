import React from 'react';
import { FaLaptop, FaTools, FaUserGraduate } from 'react-icons/fa';

const projects = [
  {
    name: 'RentRight',
    description: (
      <ul className="list-none pl-6">
        <li><FaLaptop className="inline-block mr-2 text-lime-600" />Launch of a comprehensive Property Management Website 🏠</li>
        <li><FaLaptop className="inline-block mr-2 text-lime-600" />User-friendly platform for buying, renting, and exploring real estate</li>
        <li><FaTools className="inline-block mr-2 text-lime-600" />Advanced Search: Find properties by location, price, and more</li>
        <li><FaTools className="inline-block mr-2 text-lime-600" />Services: Tailor services to fit your needs with ease</li>
        <li><FaLaptop className="inline-block mr-2 text-lime-600" />Real-Time Updates: Stay informed with the latest listings and notifications</li>
      </ul>
    ),
    website: 'https://rentright-a088e.web.app/',
    image: 'https://i.ibb.co/1zkCP0N/Whats-App-Image-2024-09-02-at-11-50-20-8a4f4315.jpg',
  },
  {
    name: 'ResiCraft',
    description: (
      <ul className="list-none pl-6">
        <li><FaLaptop className="inline-block mr-2 text-lime-600" />Elevate your apartment living experience</li>
        <li><FaTools className="inline-block mr-2 text-lime-600" />Comprehensive apartment management features</li>
      </ul>
    ),
    website: 'https://resicraft-b4fdb.web.app/',
    image: 'https://i.ibb.co/BGTvhnS/Screenshot-2024-09-04-180757.png',
  },
  {
    name: 'eStudy',
    description: (
      <ul className="list-none pl-6">
        <li><FaUserGraduate className="inline-block mr-2 text-lime-600" />Start your journey with our Online Study platform</li>
        <li><FaUserGraduate className="inline-block mr-2 text-lime-600" />Collaborative learning hub to enhance your academic journey</li>
        <li><FaTools className="inline-block mr-2 text-lime-600" />Join study groups, share resources, and achieve academic excellence</li>
        <li><FaLaptop className="inline-block mr-2 text-lime-600" />Seamlessly connect with peers, submit assignments, and track progress</li>
        <li><FaUserGraduate className="inline-block mr-2 text-lime-600" />Elevate your learning experience with us</li>
      </ul>
    ),
    website: 'https://estudy-33d78.web.app/',
    image: 'https://i.ibb.co/pXhRmqf/Screenshot-2024-09-04-181059.png',
  },
];

const Project = () => {
  return (
    <section className="py-12" id="projects">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">My Projects</h2>
        <p className="text-xl font-medium text-center text-gray-700 mb-8">
          Crafting innovative and user-friendly web applications with
          <span className="ml-2 text-2xl font-bold text-lime-600">
            cutting-edge technologies
          </span>
        </p>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-orange-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-pink-300"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto rounded-lg shadow-lg border-4"
                />
              </div>
              <div className="md:w-1/2 md:ml-8">
                <h3 className="text-3xl text-lime-600 font-semibold mb-4">{project.name}</h3>
                <div className="text-gray-700 mb-4">{project.description}</div>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-lime-600 text-white font-medium rounded-md hover:bg-lime-700 transition duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
