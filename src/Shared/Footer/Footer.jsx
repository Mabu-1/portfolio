import { FaDownload } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
  // Resume URL
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1Xoo2yh8E-WIhWrP0iL2A11D-ZV5UdTcQ';
const Footer = () => {
    return (
      <div className="bg-gradient-to-br from-[#FFF7F3] to-[#FFE4D8] py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-3">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold text-lime-600 mb-4">
              Hire Me for Your Next Big Project!
            </h2>
            <p className="text-gray-700 mb-4">
              Contact me in any convenient way to discuss your idea.
            </p>
            <div className="flex space-x-4">
          
              <a href="https://www.linkedin.com/in/md-mahtab-uddin-3a366b326/" className="text-lime-600 hover:underline">LinkedIn</a>
              <a href="https://github.com/Mabu-1" className="text-lime-600 hover:underline">Github</a>
            </div>
          </div>
  
          {/* Center Section */}
          <div className="text-gray-800">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li className='hover:underline'><Link to="#skills" className="hover:text-lime-600">SKILLS</Link></li>
              <li className='hover:underline'><Link to="#projects" className="hover:text-lime-600">PROJECTS</Link></li>
              <li className='hover:underline'><Link href="#contact" className="hover:text-lime-600">CONTACT</Link></li>
             
             
            </ul>
          </div>
  
          {/* Right Section */}
          <div className="text-gray-800">
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><strong>Name:</strong> Md. Mahtab Uddin</li>
              <li><strong>Email:</strong> umahtab65@email.com</li>
       
              <li> <a
              href={resumeUrl}
              download="Mahtab_Resume.pdf"
              className="flex bg-transparent border-none text-lime-600 hover:underline "
            >
              <FaDownload className="mr-2 mt-[2px]" /> Download Resume
            </a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-600 text-sm">
          © Created by <span className="font-bold">Md. Mahtab Uddin</span>. <br/> All Rights Reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;
  