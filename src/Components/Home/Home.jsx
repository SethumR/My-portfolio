import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion"; // Import motion for animations
import { FaCloudDownloadAlt } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";



function Home() {
  const [name, setName] = useState("");
  const fullName = "Sethum Ruberu";

  useEffect(() => {
    let currentIndex = 0; // Start from the first character
    const typingInterval = setInterval(() => {
      setName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) {
        clearInterval(typingInterval); // Stop the typing effect
      }
    }, 120); // Adjust typing speed (milliseconds)
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-[200px] lg:pt-60 lg:pb-48 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-[50px] font-bold leading-tight text-white tracking-wide ">
              Sethum Ruberu{" "}
              <span className="block">
                <TypeAnimation
                  sequence={[
                    'Undergraduate',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'Content Writter',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-l from-teal-500 to-purple-600 bg-clip-text text-transparent text-3xl lg:text-[50px] "
                />
              </span>
            </h1>
            <div className="space-y-6 text-gray-400 leading-relaxed tracking-wide">
              <p className="text-[16px] sm:text-lg">
              A Passionate Computer Science undergraduate with a foundation in programming and problem-solving. Eager to learn and take on challenges, I thrive on applying my skills to create innovative solutions. Always looking for opportunities to grow and contribute.
              </p>
            </div>
            <div data-aos="fade-right">
              <a 
                href="SethumRuberu_CV.pdf" 
                target="_blank"  // Opens the CV in a new tab
                className="bg-gradient-to-l from-teal-500 to-purple-600 hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 text-white px-4 py-3 sm:px-5 sm:py-3 text-base sm:text-lg font-semibold rounded-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-flex items-center mb-0.5 sm:mb-2"
              >
                Grab My Resume <FaCloudDownloadAlt className="ml-2 inline-block text-xl sm:text-2xl" />
              </a>
            </div>


            <div>
              <div className="flex space-x-6 mt-6 ml-1 sm:ml-3 mb-28 sm:-mb-28 ">
                <a href="https://github.com/SethumR" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-slate-300 text-[28px] sm:text-3xl hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/sethum-ruberu-90a369293/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-slate-300 text-[28px] hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/sethumm.r/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-slate-300 text-[28px] hover:scale-110 transition-transform" />
                </a>
                <a href="https://buymeacoffee.com/sethumruberu" target="_blank" rel="noopener noreferrer">
                  <SiBuymeacoffee className="text-slate-300 text-[28px] hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>
          {/* Image Section
          <div className="hidden lg:block relative">
            <img
              // src="HIRED.png"
              alt="AI Interview Assistant"
              className="w-full max-w-[500px] mx-auto transform transition duration-700 hover:scale-105"
              data-aos="zoom-in"
            />
            <div className="absolute -z-10 inset-0 bg-purple-500 blur-[100px] opacity-30"></div>
          </div> */}

          
        </div>
      </div>
    </section>
  );
}

export default Home;
