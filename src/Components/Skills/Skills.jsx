'use client'

import React from 'react';
import { FaReact, FaHtml5, FaPython, FaJava } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssFill, RiFlutterFill, RiFirebaseFill } from "react-icons/ri";
import { SiSpring, SiMongodb, SiAdobephotoshop, SiWondersharefilmora, SiAdobexd } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FiFigma } from "react-icons/fi";

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8 md:mb-0 ">
    <h4 className="text-[17px] font-bold tracking-wider text-gray-200 mb-4 md:mb-7">{title}</h4>
    <ul className='font-medium text-base sm:text-lg'>
      {skills.map((skill, index) => (
        <li key={index} className="mb-3 md:mb-5 flex items-center">
          <span className="inline-flex items-center mr-3 text-xl sm:text-2xl" style={{ animation: 'smoothShake 1s infinite ease-in-out' }}>
            {skill.icon}
          </span>
          {skill.name}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <IoLogoJavascript />, name: "JavaScript" },
        { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <IoLogoCss3 />, name: "CSS" },
        { icon: <BsBootstrap />, name: "Bootstrap" },
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { icon: <IoLogoNodejs />, name: "Node.js" },
        { icon: <IoLogoNodejs />, name: "Express" },
        { icon: <SiSpring />, name: "Spring Boot" },
      ]
    },
    {
      title: "DATABASE",
      skills: [
        { icon: <GrMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <RiFirebaseFill />, name: "Firebase Firestore" },
      ]
    },
    {
      title: "GRAPHIC EDITING",
      skills: [
        { icon: <SiAdobephotoshop />, name: "Photoshop" },
        { icon: <FiFigma />, name: "Figma" },
        { icon: <SiWondersharefilmora />, name: "Filmora" },
        { icon: <SiAdobexd />, name: "Adobe XD" },
      ]
    },
    {
      title: "LANGUAGES",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
      ]
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <style jsx>{`
        @keyframes smoothShake {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto sm:pl-6 md:pl-10 lg:pl-6">
        <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-purple-600 mb-6 md:mb-10 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold mb-6 md:mb-10 tracking-wide">Skills</h2>
        <div data-aos="fade"> 
          <p className="mb-12 md:mb-12 text-xl md:text-2xl font-medium text-gray-300 ">
            As a developer, I've worked with a variety of Languages and Frameworks.
          </p>
        </div>

        <div data-aos="fade"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

