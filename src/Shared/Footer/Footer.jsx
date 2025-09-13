import { FaDownload } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

// Resume URL
const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1j5XNVjkNb8Rr1QfiSgb854W2WRfcXF9Z";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1E1E2F] via-[#2C2C3F] to-[#3A3A50] py-12 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-3 text-center md:text-left">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-lime-500 mb-4">
            Hire Me for Your Next Big Project!
          </h2>
          <p className="mb-4">
            Contact me in any convenient way to discuss your idea.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/mahtab-uddin-670342383/"
              className="text-lime-500 hover:underline hover:scale-105 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Mabu-1"
              className="text-lime-500 hover:underline hover:scale-105 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#skills" className="hover:text-lime-500 transition">
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="#certification"
                className="hover:text-lime-500 transition"
              >
                CERTIFICATION
              </Link>
            </li>
             <li>
              <Link to="#experience" className="hover:text-lime-500 transition">
                EXPERIENCE
              </Link>
            </li>
            <li>
              <Link to="#projects" className="hover:text-lime-500 transition">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="#education" className="hover:text-lime-500 transition">
                EDUCATION
              </Link>
            </li>
            
           
            
            <li>
              <Link to="#contact" className="hover:text-lime-500 transition">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Information</h3>
          <ul className="space-y-2">
            <li>
              <strong>Name:</strong> Md. Mahtab Uddin
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:mahtabuddin200111@gmail.com
"
                className="text-lime-500 hover:underline"
              >
       mahtabuddin200111@gmail.com

              </a>
            </li>
            <li>
              <a
                href={resumeUrl}
                download="Mahtab_Resume.pdf"
                className="inline-flex items-center px-4 py-2 mt-3 text-sm font-semibold text-black bg-lime-500 rounded-full shadow-md hover:bg-lime-400 hover:scale-105 transition"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-6 border-t border-gray-600 text-center text-gray-500 text-sm">
        © Created by{" "}
        <span className="font-bold text-white">Md. Mahtab Uddin</span>. <br />
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
