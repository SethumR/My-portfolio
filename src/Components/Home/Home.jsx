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
      className="pt-56 sm:pt-32 md:pt-36 lg:pt-60 px-6 sm:px-4 md:px-10 lg:px-20 bg-[#0E1526] text-white"
      style={{ letterSpacing: "2.1px" }}
    >
      {/* Gradient Line */}
      <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mb-10 md:mb-10 lg:mb-12 rounded-full"></div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[66px] font-medium mb-4 md:mb-6 lg:mb-8 tracking-wide">
        <span className="typed-text">Se{name}</span>
        <span className="cursor-animation font-light"> |</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-base md:text-lg lg:text-[27px] text-white text-opacity-70 mb-8 md:mb-8 lg:mb-12 sm:mb-4">
        Undergraduate | Fullstack Developer | Blogger
      </p>

      {/* Button */}
      <div data-aos="fade-right">
        <div className="md:justify-start mb-48">
          <a 
            href="CV.pdf"  // Assuming the PDF is in the public folder
            download="Sethum_Ruberu_Resume"  // Optional: Customize the filename for the downloaded file
          >
            <button className="py-3 md:py-4 px-6 text-lg sm:text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-l from-teal-500 to-purple-600 rounded-full cursor-pointer hover:from-teal-700 hover:to-purple-800 transition-all shadow-md">
              My Resume <FaCloudDownloadAlt className="inline-flex ml-2 w-5 h-5" />
            </button>
          </a>
        </div>
      </div>

    </header>
  );
}

export default Home;
