import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi'; // Import the email icon

const Contact = () => {
  const contacts = [
    {
      name: 'GitHub',
      level: 'Mabu-1',
      icon: FaGithub,
      link: 'https://github.com/Mabu-1',
    },
    {
      name: 'LinkedIn',
      level: 'Md.Mahtab Uddin',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/md-mahtab-uddin-3a366b326/',
    },
    {
      name: 'Email',
      level: 'umahtab65@gmail.com',
      icon: HiMail,
      link: 'mailto:umahtab65@gmail.com',
    },
  ];

  return (
    <section className="py-12" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative p-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-xl font-medium text-center text-gray-700 mb-8">
            I'd love to hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="relative p-6 overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-[#FFF7F3] to-[#FFE4D8] transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-orange-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-pink-300"></div>
                <div className="text-center sm:text-center md:text-left">
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    <contact.icon className="text-5xl mb-3 text-lime-600" />
                  </a>
                  <h3 className="font-semibold text-md md:text-xl text-gray-800">
                    {contact.name}
                  </h3>
                  <p className="text-sm text-gray-600">{contact.level}</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-1/3 -translate-y-1/3 bg-orange-200 rounded-full opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 transform -translate-x-1/3 translate-y-1/3 bg-pink-200 rounded-full opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
