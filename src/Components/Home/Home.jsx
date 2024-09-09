import React, { useState, useEffect } from 'react';
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
    <header className="pt-52 pl-32" style={{ letterSpacing: '2.1px' }}>
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600 mb-12 rounded-full"></div>
      <h1 className="text-[70px] font-medium mb-6 tracking-[0.025em]">
        <span className="typed-text">Se{name}</span><span className="cursor-animation font-light"> |</span>
      </h1>
      <p className="text-[26px] text-white text-opacity-70 mb-12">Undergraduate | Fullstack Developer | Blogger</p>
      <button className="py-4 max-w-60 text-2xl font-semibold text-white bg-gradient-to-l from-teal-500 to-purple-600 rounded-full cursor-pointer hover:bg-gradient-to-l hover:from-teal-700 hover:to-purple-800 w-1/5" style={{ letterSpacing: '0px' }}>
        My Resume <FaCloudDownloadAlt className='inline-flex ml-3' />
      </button>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </header>
  );
}

export default Home;
