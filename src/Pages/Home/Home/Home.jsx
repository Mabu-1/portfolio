import Education from "../../Education/Ecucation";
import Experience from "../../Experience/Experience";
import Banner from "../Banner/Banner";
import Certification from "../Certifications/Certifications";
import Contact from "../Contact/Contact";
import Email from "../Email/Email";
import Project from "../Project/Project";
import Proverb from "../Proverb/Proverb";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div className="pt-16">
            <Banner />
            <Proverb />
            <Skills />
            <Certification/>
            <Experience/>
            <Project />
           <Education />
           <Contact/>
        </div>
    );
};

export default Home;