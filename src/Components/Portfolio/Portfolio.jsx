import React from 'react'

function Portfolio() {
  return (
    <div className='pl-32'>
        <h2 className="text-6xl font-semibold mb-10  tracking-wide">Portfolio</h2>
        <p className="mb-12 text-2xl font-medium text-gray-300">As a developer, These are some of the projects I've worked on recently.</p>

       
          <div className="flex space-x-4">
            {/* First Column */}
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <img src="path/to/first-image.jpg" alt="First" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white">Description for the first image</p>
            </div>

            {/* Second Column */}
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <img src="path/to/second-image.jpg" alt="Second" className="mb-4 rounded-lg shadow-lg" />
              <p className="text-white">Description for the second image</p>
            </div>

            {/* Third Column */}
            <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
              <img src="path/to/third-image.jpg" alt="Third" className="mb-4 rounded-lg shadow-lg " />
              <p className="text-white mb-32">Description for the third image</p>
            </div>
          </div>
    </div>
  )
}

export default Portfolio