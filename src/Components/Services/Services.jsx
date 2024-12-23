import React from 'react';
import { FaCode, FaAndroid, FaPalette } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 text-center w-full max-w-[392px] h-auto sm:h-[329px] mx-auto mb-8 sm:mb-0 transform transition-transform hover:scale-105 duration-700 ease-out-in">
    <div className="flex justify-center items-center mb-4 text-blue-400 text-4xl">
      <Icon />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h3>
    <p className="mb-6 text-sm sm:text-base">{description}</p>
    <button className="bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded-3xl hover:bg-blue-500 transition-colors duration-300">
      Contact
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "I develop responsive websites using React, HTML, CSS, JavaScript, Bootstrap and Tailwind CSS. Committed to delivering innovative solutions."
    },
    {
      icon: FaAndroid,
      title: "Mobile Development",
      description: "I craft intuitive mobile apps that prioritize user experience and performance, leveraging modern technologies for seamless functionality."
    },
    {
      icon: FaPalette,
      title: "UI / UX Designing",
      description: "I specialize in creating intuitive user interfaces and experiences that enhance brand engagement through strategic design and user interaction."
    }
  ];

  return (
    <section className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-12 sm:mb-20 tracking-wide text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 mb-32">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

