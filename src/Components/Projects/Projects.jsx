import React from 'react'

function Projects() {
  return (
    <div>
        <h2 className="text-6xl font-semibold mb-10  tracking-wide text-center">Projects</h2>
        <p className="mb-16 text-2xl font-medium text-gray-300 text-center">As a developer, These are some of the projects I've worked on recently.</p>

       
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-52">
          <div>
            <img src="https://manulaperera12.github.io/portfolio/images/img2.png" alt="First" className="h-[375px] w-[375px] rounded-3xl " />
          </div>

          <div>
            <img src="https://manulaperera12.github.io/portfolio/images/img1.png" alt="First" className="h-[375px] w-[375px] rounded-3xl" />
          </div>

          <div>
            <img src="https://manulaperera12.github.io/portfolio/images/img3.png" alt="First" className="h-[375px] w-[375px] rounded-3xl" />
          </div>

        </div>       
    </div>
  )
}

export default Projects