import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiWondersharefilmora } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";


function Skills() {
  return (
    <section className=" py-16">
      <div className="pl-32">
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600  mb-10 rounded-full	"></div>
        <h2 className="text-6xl font-semibold mb-10 tracking-wide	">Skills</h2>
        <p className="mb-12 text-2xl font-medium text-gray-300">As a developer, I've worked with a variety of Languages and Frameworks.</p>
        
        <div className="grid md:grid-cols-5	pl-10">
          <div>
              <h4 className="text-[17px font-bold tracking-wider	text-gray-200 mb-7">FRONTEND</h4>
              <ul className='font-medium text-[17px]'>
                <li className="mb-5"><span className="inline-flex items-center align-middle"><FaReact className="mr-2" /></span>React</li>
                <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoJavascript className='mr-2 ' /></span>JavaScript</li>
                <li className="mb-5"><span className="inline-flex items-center "><RiTailwindCssFill className='mr-2'/></span>Tailwind CSS</li>
                <li className="mb-5"><span className="inline-flex items-center align-middle"><FaHtml5 className="mr-2 w-5 h-5" /> HTML</span></li>
                <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoCss3 className='mr-2 w-5 h-5'/></span>CSS</li>
                <li className="mb-5"><span className="inline-flex items-center align-middle"><BsBootstrap  className='mr-2'/></span>Bootsrap</li>
                <li className="mb-16"><span className="inline-flex items-center "><RiFlutterFill  className='mr-2'/></span>Flutter</li> 
              </ul>
          </div>

          <div>
            <h4 className="text-[17px font-bold tracking-wider	text-gray-200 mb-7">BACKEND</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoNodejs className='mr-2 w-5 h-5'/></span>Node js</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><IoLogoNodejs className='mr-2 w-5 h-5'></IoLogoNodejs></span>Express</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiSpring className='mr-2'/></span>Spring Boot</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px font-bold tracking-wider	text-gray-200 mb-7">DATABASE</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><GrMysql className='mr-2 '/></span>My SQL</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiMongodb className='mr-2 w-5 h-5'/></span>MongoDB</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><RiFirebaseFill className='mr-2 w-5 h-5'/></span>Firebase Firestore</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px font-bold tracking-wider text-gray-200	mb-7">GRAPIC EDITING</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiAdobephotoshop className='mr-2 '/></span>Photoshop</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FiFigma className='mr-2 w-5 h-5' /> </span>Figma</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiWondersharefilmora className='mr-2 '/></span>Filmora</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><SiAdobepremierepro className='mr-2'/></span>Premiere pro</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[17px font-bold tracking-wider text-gray-200	mb-7">LANGUAGES</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FaPython className='mr-2 w-5 h-5'/></span>Python</li>
              <li className="mb-5"><span className="inline-flex items-center align-middle"><FaJava className='mr-2 w-6 h-6'/></span>Java</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
