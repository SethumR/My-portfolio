import React from 'react'
function Portfolio() {
  return (
    <div className='pl-32'>
        <h2 className="text-6xl font-semibold mb-10  tracking-wide">Portfolio</h2>
        <p className="mb-16 text-2xl font-medium text-gray-300 ">As a developer, These are some of the projects I've worked on recently.</p>

       
          <div className="flex space-x-10 mb-36 pl-8 ">
            <div className="bg-slate-700 p-4 rounded-3xl flex flex-col items-center h-80 w-96 ">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white ">Description for the first image</p>
             </div>

             <div className="bg-slate-700 p-4 rounded-3xl flex flex-col items-center h-80 w-96">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white ">Description for the first image</p>
             </div>

             <div className="bg-slate-700 p-4 rounded-3xl flex flex-col items-center h-80 w-96">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white ">Description for the first image</p>
             </div>
          </div>

          
    </div>
  )
}

export default Portfolio