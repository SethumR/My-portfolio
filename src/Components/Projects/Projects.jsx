import React from 'react';

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
          <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[var(--main-color)] flex justify-center items-center flex-col text-center p-16 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
            <h4 className="text-3xl font-semibold">My Portfolio</h4>
            <p className="text-xl my-1">Project Description</p>
            <a href="#" className="flex justify-center items-center w-20 h-20 bg-[var(--text-color)] rounded-full">Link</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
