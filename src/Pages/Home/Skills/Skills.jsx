import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiJavascript, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const SkillCard = ({ icon: Icon, name, level }) => (
  <div className="relative p-6 overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-[#FFF7F3] to-[#FFE4D8] transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-orange-300"></div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-pink-300"></div>
    <div className='text-center sm:text-center md:text-left'>
      <Icon className="text-5xl mb-3 text-lime-600" />
      <h3 className="font-semibold text-md md:text-xl text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600">{level}</p>
    </div>
    <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-1/3 -translate-y-1/3 bg-orange-200 rounded-full opacity-30"></div>
    <div className="absolute bottom-0 left-0 w-20 h-20 transform -translate-x-1/3 translate-y-1/3 bg-pink-200 rounded-full opacity-30"></div>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: 'HTML5', level: 'Expert' },
    { icon: FaCss3Alt, name: 'CSS3', level: 'Expert' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 'Expert' },
    { icon: SiBootstrap, name: 'Bootstrap', level: 'Expert' },
    { icon: SiJavascript, name: 'JavaScript', level: 'Expert' },
    { icon: FaReact, name: 'ReactJS', level: 'Expert' },
    { icon: SiMongodb, name: 'MongoDB', level: 'Comfortable' },
    { icon: SiExpress, name: 'ExpressJS', level: 'Comfortable' },
    { icon: FaNodeJs, name: 'NodeJS', level: 'Comfortable' },
    { icon: SiFirebase, name: 'Firebase', level: 'Familiar' },
  ];

  return (
    <section className="my-10" id="skills">
      <div className="container mx-auto px-4">
        <div className="relative p-12">
          <div className="absolute top-0 left-0 w-full h-1"></div>
        
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">My Skills</h2>
          <p className="text-xl font-medium text-center text-gray-700">
            Crafting beautiful and functional web experiences with
            <span className="ml-2 text-2xl font-bold text-lime-600">
              modern technologies
            </span>
          </p>
        
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
