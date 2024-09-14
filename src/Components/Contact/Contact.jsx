import React from 'react'
import { IoMdMail } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div>
        <div className='text-center'>
            <h2 className='text-6xl font-semibold mb-8  tracking-wide'>Contact</h2>
            <p className="mb-14 text-2xl font-medium text-gray-300 ">If you have any queries, please do get in touch. </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-[-80px]">
            
          <div className="bg-slate-800 text-white p-4 rounded-2xl shadow-lg hover:bg-slate-700 transition duration-300 flex flex-col items-center w-[130px]">
          <div className="text-xl font-bold mt-2"><IoMdMail className='w-10 h-7'/>
          </div>
            <a href="mailto:sethumruberu05@gmail.com" target="_blank" className="mt-2 text-blue-400 hover:underline text-l ">
              Get in touch
            </a>
          </div> 

          <div className="bg-slate-800 text-white p-4 rounded-2xl shadow-lg hover:bg-slate-700 transition duration-300 flex flex-col items-center w-[150px]">
            <div className="text-xl font-bold mt-2"><MdAddIcCall className='w-10 h-7'/></div>
            <a href="tel:+94756413574" target="_blank" className="mt-2 text-blue-400 hover:underline">
              +94 756413574
            </a>
          </div>

          <div className="bg-slate-800 text-white p-4 rounded-2xl shadow-lg hover:bg-slate-700 transition duration-300 flex flex-col items-center w-[130px]">
            <div className="text-xl font-bold mt-2"><FaLinkedin className='w-10 h-7'/></div>
            <a href="https://www.linkedin.com/in/sethum-ruberu-90a369293/" target="_blank"  className="mt-2 text-blue-400 hover:underline">
              Linkedin
            </a>
          </div>

          <div className="bg-slate-800 text-white p-4 rounded-2xl shadow-lg hover:bg-slate-700 transition duration-300 flex flex-col items-center w-[130px]">
            <div className="text-xl font-bold mt-2"><FaGithub className='w-10 h-7'/></div>
            <a href="https://github.com/Sethumruberu" target="_blank" className="mt-2 text-blue-400 hover:underline">
              Github
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <form className="w-full max-w-3xl grid lg:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="col-span-1 bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="col-span-1 bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <input 
              type="text" 
              placeholder="Mobile Number" 
              className="col-span-1 bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <input 
              type="text" 
              placeholder="Email Subject" 
              className="col-span-1 bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <textarea 
              placeholder="Your Message" 
              className="col-span-2 bg-gray-800 text-white p-4 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-800 "
            ></textarea>
            <button 
              type="submit" 
              className="col-span-2 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 ">
              Send Message
            </button>
          </form>
        </div>
  </div>
  )
}

export default Contact
