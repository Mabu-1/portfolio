import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const contacts = [
    {
      name: "GitHub",
      level: "Mabu-1",
      icon: FaGithub,
      link: "https://github.com/Mabu-1",
    },
    {
      name: "LinkedIn",
      level: "Md. Mahtab Uddin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mahtab-uddin-670342383/",
    },
    {
      name: "Email",
      level: "mahtabuddin200111@gmail.com",
      icon: HiMail,
      link: "mailto:mahtabuddin200111@gmail.com",
    },
  ];

  return (
    <section className="py-12 " id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative p-12">
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            Get in Touch
          </h2>
          <p className="text-xl font-medium text-center text-gray-300 mb-8">
            I'd love to hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-6 border-2 border-lime-500 bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-7 h-7 border-2 border-lime-400/30 border-r-0 border-b-0 rounded-tl-2xl"></div>
                <div className="absolute top-3 right-3 w-7 h-7 border-2 border-lime-400/30 border-l-0 border-b-0 rounded-tr-2xl"></div>
                <div className="absolute bottom-3 left-3 w-7 h-7 border-2 border-lime-400/30 border-r-0 border-t-0 rounded-bl-2xl"></div>
                <div className="absolute bottom-3 right-3 w-7 h-7 border-2 border-lime-400/30 border-l-0 border-t-0 rounded-br-2xl"></div>

                {/* Top & bottom gradient lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500"></div>

               <div className="text-center">
  <a
    href={contact.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <contact.icon className="text-5xl mb-3 text-lime-500 mx-auto" />
  </a>
  <h3 className="font-semibold text-lg md:text-xl text-white">
    {contact.name}
  </h3>
  <p className="text-sm text-gray-400">{contact.level}</p>
</div>

               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
