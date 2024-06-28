import React from 'react';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { GiJusticeStar } from "react-icons/gi";

const About = () => {
  return (
    <section className="text-white py-20 px-10">
      <style>
        {`
          @keyframes smoothShake {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX10px);
            }
          }
        `}
      </style>

      <div className='pl-20'>
        <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600 mb-10 rounded-full"></div>
        <h1 className="text-6xl font-semibold mb-10 tracking-wide">About</h1>
        <p className="text-xl mb-10 leading-9 tracking-wide font-light text-slate-200 max-w-[1320px]">
          Hello, I'm Sethum Ruberu, an ambitious computer science undergraduate at the Informatics Institute of Technology in Sri Lanka, affiliated with the University of Westminster, UK. My academic journey has provided me with a deep understanding of software development, intricate algorithms, and insightful data analysis. Driven by an unwavering passion for technology and innovation, I am determined to leverage my skills to tackle real-world challenges and push the boundaries of computer science.
        </p>

        <p className="text-xl leading-9 mb-6 tracking-wide font-light text-slate-200 max-w-[1320px]">
          Thriving in collaborative environments, I eagerly embrace the latest technological advancements, always seeking opportunities to learn and innovate. My ultimate vision is to leave a lasting impact on the tech industry through relentless curiosity and creative problem-solving.
        </p>
        <p className="text-xl leading-9 mb-16 tracking-wide font-light text-slate-200 max-w-[1320px]">
          With a commitment to continuous growth and a keen eye for emerging trends, I aspire to contribute meaningfully to shaping the future of technology. By staying at the forefront of technological advancements and continuously honing my skills, I aim to be a catalyst for innovation and positive change in the tech industry.
        </p>
        
        <div className='pl-8 text-xl text-slate-200'>
          <ul>
            <li className='flex items-center mb-7 align-middle'>
              <IoPersonAddSharp className="mr-6" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} />
              Name: Sethum Ruberu
            </li>
            <li className='flex items-center mb-7 align-middle'>
              <BsFillRocketTakeoffFill className="mr-6" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} />
              Age: 18
            </li>
            <li className='flex items-center mb-7 align-middle'>
              <GiJusticeStar className="mr-6" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} />
              DOB: 28.10.2005
            </li>
            <li className='flex items-center mb-7'>
              <LuPhoneCall className="mr-6" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} />
              Mobile number: (+94) 756413574
            </li>
            <li className='flex items-center mb-7'>
              <FaUserGraduate className="mr-6" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} />
              Degree: Computer Science
            </li>
            <li className='flex items-center'>
              <IoMailUnread className="mr-6" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} />
              Email: Sethumruberu05@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
