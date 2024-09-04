import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

import Loading from '../../Loading/Loading';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  const { loading } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (loading) {
      <Loading />
      return;
    }
  }, [loading]);

  // Resume URL
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1Xoo2yh8E-WIhWrP0iL2A11D-ZV5UdTcQ';

  return (
    <div className='sticky top-0 z-30'>
      <div className="navbar max-w-screen-2xl mx-auto px-4 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden" onClick={handleToggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {isMenuOpen && (
              <ul
                className="menu menu-sm dropdown-content bg-[#FFF7F3] rounded-box z-[1] text-md w-52 p-2"
              >
                <li><Link className="font-heading font-bold" to="/">HOME</Link></li>
                <li><Link className="font-heading font-bold" to="#skills">Skills</Link></li>
                <li><Link className="font-heading font-bold" to="#projects">PROJECTS</Link></li>     
                <li><Link className="font-heading font-bold" to="#contact">CONTACT </Link></li>
                <li> <a
              href={resumeUrl}
              download="Mahtab_Resume.pdf"
              className="btn btn-sm btn-outline text-lime-600 hover:bg-lime-600 hover:text-white"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a></li>
              </ul>
            )}
          </div>
          <Link to="/" className='hidden sm:hidden md:block mt-[-10px]'>
            <div className="flex flex-col items-start leading-none">
              <h1 className="text-3xl sm:text-3xl md:text-6xl font-bold text-lime-600">
                M
                <span className="text-xl">ahtab</span>
              </h1>
              <span className="text-xs font-bold mt-[-15px] text-gray-500">
                Frontend Developer
              </span>
            </div>
          </Link>
        </div>
        <div className="navbar-center mt-2">
          <Link to="/" className='block sm:block md:hidden'>
            <div className="flex flex-col items-center">
              <h1 className="text-xl sm:text-xl md:text-5xl font-bold text-lime-600">
                M
                <span className="text-xl">ahtab</span>
              </h1>
              <span className="text-xs sm:text-xs md:text-sm mt-[-5px] text-gray-500">
                Frontend Developer
              </span>
            </div>
          </Link>
          <ul className='px-2 lg:px-1 hidden md:flex md:gap-[10px] lg:gap-[20px] text-sm text-gray-600'>
            <li><Link className="hover:text-black font-heading font-bold" to="/">HOME</Link></li>
            <li><Link className="hover:text-black font-heading font-bold" to="#skills">SKILLS</Link></li>
            <li><Link className="hover:text-black font-heading font-bold" to="#projects">PROJECTS</Link></li>
            <li><Link className="hover:text-black font-heading font-bold" to="#contact">CONTACT</Link></li>
           
          </ul>
        </div>
        <div className="navbar-end  hidden md:block">
          <div className='flex justify-end'>
          <a
            href={resumeUrl}
            download="Mahtab_Resume.pdf"
            className="btn btn-sm btn-outline text-lime-600 hover:bg-lime-600 hover:text-white"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
