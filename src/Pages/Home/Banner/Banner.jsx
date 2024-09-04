import Lottie from "lottie-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import work from "../../../../src/assets/work.json";

// Define a functional component for the social media icons with a line above them
const SocialMediaIcons = () => {
    return (
        <div className="hidden sm:flex flex-col justify-between items-center">
            <div className="h-[120px] my-10 border-l border-lime-600"></div> {/* Vertical line */}
            <div className="flex flex-col gap-4 mb-10">
                <a href="https://www.linkedin.com/in/md-mahtab-uddin-3a366b326/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-lime-600" /> {/* LinkedIn Blue */}
                </a>
                <a href="https://github.com/Mabu-1" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-lime-600"  /> {/* GitHub Black */}
                </a>
            </div>
            <div className="mt-9">
                <p className="rotate-90 font-bold text-md whitespace-nowrap text-lime-600">FOLLOW ME</p> {/* Added whitespace-nowrap */}
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 my-4">
            <div className="flex flex-col sm:flex-row justify-center items-center flex-1">
                <div className="hidden sm:block w-1/4">
                    <SocialMediaIcons />
                </div>
                <div className="w-full sm:w-auto">
                    <Lottie animationData={work} loop={true} />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col justify-center items-center mb-6 text-center ">
                    <div>
                        <h1 className="text-3xl md:text-7xl text-lime-600 font-extrabold">Mahtab Uddin</h1>
                    </div>
                    <div className="flex justify-center items-center text-center text-xl md:text-4xl gap-4 text-gray-400">
                        
                        <h3>// Frontend developer //</h3>
                      
                    </div>
                </div>
                <div className="text-center">
                <p className="text-sm md:text-md font-bold mb-6">Crafting sleek, efficient interfaces with a love for high-performance projects. Adaptable, team-friendly, and ready to work remotely to optimize your budget. Let's build something great together!</p>

                </div>
                <div className="flex flex-col items-center sm:flex-row md:hidden">
                    {/* Border lines and Follow Me text on all screens */}
                    <div className="flex items-center ">
                        <div className="border-l border-lime-600 hidden sm:block h-[120px] mr-4 "></div> {/* Vertical line for larger screens */}
                        <div className="flex flex-col items-center sm:hidden mb-4">
                            <div className="flex items-center">
                                <div className="border-t border-gray-400 w-24"></div> {/* Horizontal line */}
                                <p className="mx-4 font-bold whitespace-nowrap text-lime-600">Follow Me</p>
                                <div className="border-t border-gray-400 w-24"></div> {/* Horizontal line */}
                            </div>
                        </div>
                        <div className="border-l border-lime-600 hidden sm:block h-[120px] ml-4"></div> {/* Vertical line for larger screens */}
                    </div>
                    {/* Social media icons on all screens */}
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/md-mahtab-uddin-3a366b326/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} className="text-lime-600"  /> {/* LinkedIn Blue */}
                        </a>
                        <a href="https://github.com/Mabu-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} className="text-lime-600" /> {/* GitHub Black */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
