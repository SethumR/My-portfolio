import React from 'react';
import { TbExternalLink } from "react-icons/tb";

const ProjectBox = ({ image, title, description, link }) => (
  <div className="portfolio-box relative group h-[350px] sm:h-[375px] w-full sm:w-[375px] rounded-3xl overflow-hidden">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
    <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center p-4 sm:p-16 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-gradient-to-b from-transparent to-cyan-600">
      <h4 className="text-2xl sm:text-3xl font-semibold mb-2">{title}</h4>
      <p className="text-sm sm:text-base my-1 mb-4 sm:mb-6">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex justify-center items-center text-gray-700">
          <TbExternalLink size={24} />
        </div>
      </a>
    </div>
  </div>
);

function Projects() {
  const projects = [
    {
      image: "https://manulaperera12.github.io/portfolio/images/img2.png",
      title: "My Portfolio",
      description: "Explore my personal portfolio, featuring projects powered by React.js and styled with Tailwind CSS",
      link: "https://github.com/Sethumruberu/My-portfolio"
    },
    {
      image: "https://manulaperera12.github.io/portfolio/images/img1.png",
      title: "Project Two",
      description: "Description for Project Two goes here. Replace with actual project details.",
      link: "https://example.com"
    },
    {
      image: "https://manulaperera12.github.io/portfolio/images/img3.png",
      title: "Project Three",
      description: "Description for Project Three goes here. Replace with actual project details.",
      link: "https://example.com"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 mb-6 sm:mb-12 mt-12 lg:mt-20">
      <h2 className="text-[42px] sm:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-10 tracking-wide text-center">Projects</h2>
      <p className="mb-10 sm:mb-16 text-xl sm:text-2xl font-medium text-gray-300 text-center max-w-3xl mx-auto">
        As a developer, these are some of the projects I've worked on recently.
      </p>

      <div data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-10">
        {projects.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
      </div>

      {/* <div>
      <a  href="https://medium.com/@yourusername"
          className="block w-full bg-gradient-to-l from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-700 shadow-md text-white text-center py-3 sm:py-4 rounded-lg mt-6 sm:mt-8  transition-colors font-semibold mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW ALL ARTICLES
        </a>
      </div> */}
    </div>
  );
}

export default Projects;

