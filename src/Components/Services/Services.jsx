import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaAndroid } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div>
        <h2 className="text-6xl font-semibold mb-20 tracking-wide text-center ">Our Services</h2>

        <div className="flex flex-col md:flex-row justify-center items-center mb-36 ">
          <div className="bg-gray-800 rounded-2xl p-8 text-center  w-[392px] h-[329px] mx-4 transform transition-transform hover:scale-105 duration-700 ease-out-in ">
          <div className="flex justify-center items-center mb-4 text-blue-400 text-4xl">
              <FaCode /> </div>
            <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
            <p className="mb-6"> I develop responsive, websites using React, HTML, CSS, JavaScript, Bootstrap and Tailwind CSS. Committed to delivering innovative solutions.</p>
            <button className="bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded-3xl hover:bg-blue-500">
              Contact
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 text-center w-[392px] h-[329px] mx-4 transform transition-transform hover:scale-105  duration-700 ease-out-in">
            <div className="flex justify-center items-center mb-4 text-blue-400 text-4xl">
                <FaAndroid />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Mobile Development</h3>
            <p className="mb-5">I craft intuitive mobile apps that prioritize user experience and performance, leveraging modern technologies for seamless functionality.</p>
            <button className="bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded-3xl hover:bg-blue-500">
                Contact
            </button>
            </div>


          <div className="bg-gray-800 rounded-2xl p-8 text-center flex- w-[392px] h-[329px] mx-4 transform transition-transform hover:scale-105 duration-700 ease-out-in">
          <div className="flex justify-center items-center mb-4 text-blue-400 text-4xl">
              <FaPalette /></div>
            <h3 className="text-2xl font-semibold mb-3">UI / UX Designing</h3>
            <p className="mb-6">I specialize in creating intuitive user interfaces and experiences that enhance brand engagement through strategic design and user interaction.</p>
            <button className="bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded-3xl hover:bg-blue-500">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
