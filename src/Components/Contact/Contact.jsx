import React from 'react'

function Contact() {
  return (
    <div className='pl-32'>
        <div>
            <h2 className='text-6xl font-semibold mb-10  tracking-wide'>Contact</h2>
            <p className="mb-16 text-2xl font-medium text-gray-300 ">If you have any queries, please do get in touch.</p>
        </div>

          <div className="pl-8 mb-16 p-4 grid lg:grid-cols-5 gap-6 max-w-7xl">
            
          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition duration-300 flex flex-col items-center ">
            <div className="text-xl font-bold mt-4">Email</div>
            <a href="mailto:sethumruberu05@gmail.com" className="mt-2 text-blue-400 hover:underline">
              Get in touch
            </a>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition duration-300 flex flex-col items-center ">
            <div className="text-xl font-bold mt-4">Call</div>
            <a href="tel:+94756413574" className="mt-2 text-blue-400 hover:underline">
              +94 756413574
            </a>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition duration-300 flex flex-col items-center ">
            <div className="text-xl font-bold mt-4">LinkedIn</div>
            <a href="#" className="mt-2 text-blue-400 hover:underline">
              View my LinkedIn
            </a>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition duration-300 flex flex-col items-center ">
            <div className="text-xl font-bold mt-4">GitHub</div>
            <a href="#" className="mt-2 text-blue-400 hover:underline">
              View my GitHub
            </a>
          </div>
    
          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition duration-300 flex flex-col items-center ">
            <div className="text-xl font-bold mt-4">Instagram</div>
            <a href="#" className="mt-2 text-blue-400 hover:underline">
              View my Instagram
            </a>
          </div>
    </div>
  </div>
  )
}

export default Contact


