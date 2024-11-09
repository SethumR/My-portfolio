import React from 'react';
import { TbExternalLink } from "react-icons/tb";

function Projects() {
  return (

    
    <div>
      <h2 className="text-6xl font-semibold mb-10 tracking-wide text-center">Projects</h2>
      <p className="mb-16 text-2xl font-medium text-gray-300 text-center">
        As a developer, These are some of the projects I've worked on recently.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-52">
        <div className="portfolio-box relative group h-[375px] w-[375px] rounded-3xl overflow-hidden">
          <img src="https://manulaperera12.github.io/portfolio/images/img2.png" alt="First" className="w-full transition-transform duration-500 ease-in-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center p-16 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-gradient-to-b from-transparent to-cyan-600">
            <h4 className="text-3xl font-semibold mb-2">My Portfolio</h4>
            <p className="text-base my-1 mb-6">Explore my personal portfolio, featuring projects powered by React.js and styled with Tailwind CSS</p>
            <a href="https://github.com/Sethumruberu/My-portfolio" target="_blank" rel="noopener noreferrer" className="block">
              <div className=" w-14 h-14 bg-white rounded-full flex justify-center items-center text-gray-700">
              <TbExternalLink /> <path strokeLinecap="round" strokeLinejoin="round" />
              </div>
              </a>
          </div>
        </div>

        <div className="portfolio-box relative group h-[375px] w-[375px] rounded-3xl overflow-hidden">
          <img src="https://manulaperera12.github.io/portfolio/images/img1.png" alt="First" className="w-full transition-transform duration-500 ease-in-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center p-16 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-gradient-to-b from-transparent to-cyan-600">
          <h4 className="text-3xl font-semibold mb-2">My Portfolio</h4>
          <p className="text-base my-1 mb-6">Explore my personal portfolio, featuring projects powered by React.js and styled with Tailwind CSS</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block">
            <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-gray-700">
              <TbExternalLink /> <path strokeLinecap="round" strokeLinejoin="round" />
              </div>
              </a>
            </div>
        </div>

        <div className="portfolio-box relative group h-[375px] w-[375px] rounded-3xl overflow-hidden">
          <img src="https://manulaperera12.github.io/portfolio/images/img3.png" alt="First" className="w-full transition-transform duration-500 ease-in-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center p-16 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-gradient-to-b from-transparent to-cyan-600">
          <h4 className="text-3xl font-semibold mb-2">My Portfolio</h4>
          <p className="text-base my-1 mb-6">Explore my personal portfolio, featuring projects powered by React.js and styled with Tailwind CSS</p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block">
             <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-gray-700">
              <TbExternalLink /> <path strokeLinecap="round" strokeLinejoin="round" />
              </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
