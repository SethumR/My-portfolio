import React from 'react'

function Projects() {
  return (
    <div className='pl-32'>
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600  mb-10 rounded-full	"></div>
        <h2 className="text-6xl font-semibold mb-10  tracking-wide">Projects</h2>
        <p className="mb-16 text-2xl font-medium text-gray-300 ">As a developer, These are some of the projects I've worked on recently.</p>

       
          <div className="flex space-x-8 mb-40 pl-10">
            <div className="bg-slate-700 p-4 rounded-3xl flex flex-col items-center h-[345px] w-[365px]">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white">Description for the first image</p>
             </div>

             <div className="bg-slate-700 p-4 rounded-3xl flex flex-col items-center h-[345px] w-[365px]">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white">Description for the first image</p>
             </div>

             <div className="bg-slate-700 p-4 rounded-3xl flex flex-col items-center h-[345px] w-[365px]">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white">Description for the first image</p>
             </div>
          </div>      
    </div>
  )
}

export default Projects