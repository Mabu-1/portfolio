import React, { useState, useEffect } from "react";

const Proverb = () => {
  const fullText =
    "“The beauty of a website lies in its ability to guide users effortlessly”";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let frameId;

    const type = () => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
        frameId = setTimeout(type, 15); // typing speed
      }
    };

    type();

    // blinking cursor toggle
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(frameId);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center my-12">
      <div
        className="relative p-6 sm:p-10 overflow-hidden rounded-2xl shadow-2xl bg-gray-900 border-4 border-lime-500 
                   transition-transform hover:scale-105 hover:shadow-lime-500/40 duration-300"
        aria-label={fullText}
      >
        {/* Decorative corners */}
        <div className="absolute top-3 left-3 w-7 h-7 border-2 border-lime-400/30 border-r-0 border-b-0 rounded-tl-2xl"></div>
        <div className="absolute top-3 right-3 w-7 h-7 border-2 border-lime-400/30 border-l-0 border-b-0 rounded-tr-2xl"></div>
        <div className="absolute bottom-3 left-3 w-7 h-7 border-2 border-lime-400/30 border-r-0 border-t-0 rounded-bl-2xl"></div>
        <div className="absolute bottom-3 right-3 w-7 h-7 border-2 border-lime-400/30 border-l-0 border-t-0 rounded-br-2xl"></div>

        {/* Top & Bottom gradient borders */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500"></div>

        {/* Proverb text with cursor */}
        <p className="lg:text-3xl md:text-2xl sm:text-xl leading-relaxed text-center text-gray-200">
          {displayedText}
          <span
            className={`${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200 text-lime-400`}
          >
            |
          </span>
        </p>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-28 h-28 transform translate-x-1/4 -translate-y-1/4 bg-lime-500 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 transform -translate-x-1/4 translate-y-1/4 bg-lime-500 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Proverb;
