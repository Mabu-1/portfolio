import React from "react";

const certifications = [
  {
    course: "Complete Web Development",
    provider: "Programming Hero",
    date: "Jun 2022",
    logo: "https://i.ibb.co/fVdKNNZd/programminghero-logo.jpg",
    image: "https://i.ibb.co/zVs9F8Dm/Screenshot-30.png",
    url: "https://drive.google.com/file/d/1oKwkqxfnl5qTpm3lyjStR9U23nCxdk4Y/view",
  },
  {
    course: "Reactive Accelerator Course",
    provider: "Learn with Sumit",
    date: "Jun 2024",
    logo: "https://i.ibb.co/3YYH8LsG/channels4-profile.jpg",
    image: "https://i.ibb.co/rK0jDmsj/Screenshot-31.png",
    url: "https://drive.google.com/file/d/1vjOgqMURVKzerjzjfkQk_aSr1Q0BM-mn/view",
  },
  {
    course: "Reactive Accelerator Course – Certificate of Excellence",
    provider: "Learn with Sumit",
    date: "Jun 2024",
    logo: "https://i.ibb.co/3YYH8LsG/channels4-profile.jpg", // same logo as LWS
    image: "https://i.ibb.co.com/9H7030cn/Screenshot-33.png", // ⚠️ replace with screenshot of your certificate
    url: "https://drive.google.com/file/d/1mtci8rTlBx8cuSW1nrxTXRqRjHgmhCAf/view",
  },
];

const Certification = () => {
  return (
    <section id="certification" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-500 mb-4 relative inline-block">
            Certifications
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Proof of{" "}
            <span className="text-lime-400 font-semibold">
              continuous learning
            </span>{" "}
            and{" "}
            <span className="text-lime-400 font-semibold">
              technical expertise
            </span>{" "}
            through certified programs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } transition-all duration-500 hover:scale-[1.02]`}
            >
              {/* Certificate Image */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.course} certificate from ${cert.provider}`}
                className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl h-80"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={cert.image}
                  alt={`${cert.course} Certificate`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-lime-500/30 rounded-2xl"></div>
              </a>

              {/* Certificate Details */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <img
                  src={cert.logo}
                  alt={`${cert.provider} Logo`}
                  className="w-20 h-20 mx-auto md:mx-0 rounded-full object-cover shadow-md"
                />
                <h3 className="text-2xl font-semibold text-white">
                  {cert.course}
                </h3>
                <p className="text-lime-400 font-medium">{cert.provider}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-lime-500 to-lime-600 text-white font-medium rounded-lg hover:from-lime-600 hover:to-lime-700 transition-all duration-300 shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
