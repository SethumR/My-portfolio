'use client'

import React from 'react';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { GiJusticeStar } from "react-icons/gi";


const About = () => {
  return (
    <section className="text-white py-10 sm:py-20 px-4 sm:px-10">
      <style jsx>{`
        @keyframes smoothShake {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
      `}</style>
      

      <div className='sm:pl-4 md:pl-10 lg:pl-12 mb-4'>
        <div className="w-16 sm:w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600 mb-6 sm:mb-10 rounded-full"></div>
        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold mb-6 sm:mb-10 tracking-wide">About</h1>
        <div data-aos="fade">
        <p className="text-base sm:text-lg lg:text-[19px] mb-6 sm:mb-10 leading-7 sm:leading-9 lg:leading-9 font-light text-slate-300 max-w-full lg:max-w-[1320px]">
          Hello, I'm Sethum Ruberu, an ambitious computer science undergraduate at the Informatics Institute of Technology in Sri Lanka, affiliated with the University of Westminster, UK. My academic journey has provided me with a deep understanding of software development, intricate algorithms, and insightful data analysis. Driven by an unwavering passion for technology and innovation, I am determined to leverage my skills to tackle real-world challenges and push the boundaries of computer science.
        </p>

        <p className="text-base sm:text-lg lg:text-[19px] leading-7 sm:leading-9 lg:leading-9 mb-4 sm:mb-6 tracking-wide font-light text-slate-300 max-w-full lg:max-w-[1320px]">
          Thriving in collaborative environments, I eagerly embrace the latest technological advancements, always seeking opportunities to learn and innovate. My ultimate vision is to leave a lasting impact on the tech industry through relentless curiosity and creative problem-solving.
        </p>
        <p className="text-base sm:text-lg lg:text-[19px] leading-7 sm:leading-9 lg:leading-9 mb-10 sm:mb-16 tracking-wide font-light text-slate-300 max-w-full lg:max-w-[1320px]">
          With a commitment to continuous growth and a keen eye for emerging trends, I aspire to contribute meaningfully to shaping the future of technology. By staying at the forefront of technological advancements and continuously honing my skills, I aim to be a catalyst for innovation and positive change in the tech industry.
        </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side Content */}
          <div data-aos="fade-right">
            <div className="text-base sm:text-lg lg:text-[19px] text-slate-300">
              <ul className="space-y-4 sm:space-y-8">
                <li className="flex items-center align-middle">
                  <IoPersonAddSharp
                    className="mr-4 sm:mr-6 flex-shrink-0"
                    style={{ animation: "smoothShake 1s infinite ease-in-out" }}
                  />
                  <span className="break-all">Name: Sethum Ruberu</span>
                </li>
                <li className="flex items-center align-middle">
                  <BsFillRocketTakeoffFill
                    className="mr-4 sm:mr-6 flex-shrink-0"
                    style={{ animation: "smoothShake 1s infinite ease-in-out" }}
                  />
                  <span>Age: 19</span>
                </li>
                <li className="flex items-center align-middle">
                  <GiJusticeStar
                    className="mr-4 sm:mr-6 flex-shrink-0"
                    style={{ animation: "smoothShake 1s infinite ease-in-out" }}
                  />
                  <span>DOB: 28.10.2005</span>
                </li>
                <li className="flex items-center">
                  <LuPhoneCall
                    className="mr-4 sm:mr-6 flex-shrink-0"
                    style={{ animation: "smoothShake 1s infinite ease-in-out" }}
                  />
                  <span className="break-all">Mobile number: (+94) 756413574</span>
                </li>
                <li className="flex items-center">
                  <FaUserGraduate
                    className="mr-4 sm:mr-6 flex-shrink-0"
                    style={{ animation: "smoothShake 1s infinite ease-in-out" }}
                  />
                  <span>Degree: Computer Science</span>
                </li>
                <li className="flex items-center">
                  <IoMailUnread
                    className="mr-4 sm:mr-6 flex-shrink-0"
                    style={{ animation: "smoothShake 1s infinite ease-in-out" }}
                  />
                  <span className="break-all">Email: Sethumgelaka6@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Image */}
          <div data-aos="fade-left">
          <div className="relative flex justify-center md:justify-end mb-4 md:mb-0 lg:pr-16 sm:pr-12 pr-12 lg:pt-1 pt-6">
            <div className="rounded-3xl overflow-hidden border-4 border-gray-700 shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm ">
              <img
                src='https://avatars.githubusercontent.com/u/160596225?v=4.png'
                alt="Profile photo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          </div>

          </div>
        </div>
    </section>
  );
};

export default About;

