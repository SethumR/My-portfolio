import React, { useState, useEffect } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Home() {
  const [name, setName] = useState("");
  const fullName = "thum Ruberu";

  useEffect(() => {
    let currentIndex = 2;
    const typingInterval = setInterval(() => {
      setName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) {
        clearInterval(typingInterval);
      }
    }, 120); // Adjust typing speed (milliseconds)
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <header
      className="pt-32 md:pt-64 pl-6 md:pl-32 pr-6 md:pr-0"
      style={{ letterSpacing: "2.1px" }}
    >
      {/* Gradient Line */}
      <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mb-8 md:mb-12 rounded-full"></div>
      
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-[70px] font-medium mb-4 md:mb-10 tracking-[0.025em]">
        <span className="typed-text">Se{name}</span>
        <span className="cursor-animation font-light"> |</span>
      </h1>
      
      {/* Subheading */}
      <p className="text-base md:text-lg lg:text-[26px] text-white text-opacity-70 mb-8 md:mb-12">
        Undergraduate | Fullstack Developer | Blogger
      </p>
      
      {/* Button */}
      <button className="py-3 md:py-4 px-6 text-base md:text-lg lg:text-2xl font-semibold text-white bg-gradient-to-l from-teal-500 to-purple-600 rounded-full cursor-pointer hover:from-teal-700 hover:to-purple-800 w-full md:w-1/3 lg:w-1/4 transition-all mb-52">
        My Resume <FaCloudDownloadAlt className="inline-flex ml-3 w-5 h-5" />
      </button>
    </header>
  );
}

export default Home;
