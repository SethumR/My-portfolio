import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { FaHtml5, FaPython, FaJava } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssFill, RiFlutterFill, RiFirebaseFill } from "react-icons/ri";
import { SiSpring, SiMongodb, SiAdobephotoshop, SiWondersharefilmora, SiAdobexd } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FiFigma } from "react-icons/fi";


const Skills = () => {
  return (
    <section className="py-16">
      <div className="pl-32">
        <style>
          {`
            @keyframes smoothShake {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(5px);
              }
            }
          `}
        </style>
        
        <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600 mb-10 rounded-full"></div>
        <h2 className="text-6xl font-semibold mb-10 tracking-wide">Skills</h2>
        <p className="mb-12 text-2xl font-medium text-gray-300">As a developer, I've worked with a variety of Languages and Frameworks.</p>

        <div className="grid md:grid-cols-5 pl-10">
          <div>
            <h4 className="text-[17px] font-bold tracking-wider text-gray-200 mb-7 pl-1">FRONTEND</h4>
            <ul className='font-medium text-[18px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FaReact className="mr-4 " style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>React</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoJavascript className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>JavaScript</li>
              <li className="mb-5"><span className="inline-flex items-center"><RiTailwindCssFill className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Tailwind CSS</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FaHtml5 className="mr-4 w-5 h-5" style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /> HTML</span></li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoCss3 className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>CSS</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><BsBootstrap className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Bootstrap</li>
              <li className="mb-16"><span className="inline-flex items-center"><RiFlutterFill className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Flutter</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px] font-bold tracking-wider text-gray-200 mb-7">BACKEND</h4>
            <ul className='font-medium text-[18px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoNodejs className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Node js</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoNodejs className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Express</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiSpring className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Spring Boot</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px] font-bold tracking-wider text-gray-200 mb-7">DATABASE</h4>
            <ul className='font-normal text-[18px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><GrMysql className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>MySQL</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiMongodb className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>MongoDB</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><RiFirebaseFill className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Firebase Firestore</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px] font-bold tracking-wider text-gray-200 mb-7">GRAPHIC EDITING</h4>
            <ul className='font-medium text-[18px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiAdobephotoshop className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Photoshop</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FiFigma className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Figma</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiWondersharefilmora className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Filmora</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiAdobexd className='mr-4' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Adobe XD</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px] font-bold tracking-wider text-gray-200 mb-7">LANGUAGES</h4>
            <ul className='font-medium text-[18px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FaPython className='mr-4 w-5 h-5' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Python</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FaJava className='mr-4 w-6 h-6' style={{ animation: 'smoothShake 1s infinite ease-in-out' }} /></span>Java</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
