import React, { useState, useEffect } from 'react';
import { GiMoebiusStar } from "react-icons/gi";

const About = () => {
  const [isShaking, setIsShaking] = useState(true); // State to toggle shaking animation

  useEffect(() => {
    // Function to toggle animation state
    const toggleAnimation = () => {
      setIsShaking(prevState => !prevState);
    };

    // Start animation loop on component mount
    const interval = setInterval(toggleAnimation, 2000); // Adjust this value to control animation speed (milliseconds)

    // Cleanup function to stop animation loop on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on component mount

  // Inline CSS for the animate-shake animation
  const shakeAnimationStyle = {
    animation: isShaking ? 'shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite' : 'none',
  };

  return (
    <section className="text-white py-20 px-10">
      <style>
        {`
          @keyframes shake {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translate3d(-2px, 0, 0);
            }
            20%, 40%, 60%, 80% {
              transform: translate3d(2px, 0, 0);
            }
          }
        `}
      </style>

      <div className='pl-20'>
        <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600 mb-10 rounded-full"></div>
        <h1 className="text-6xl font-semibold mb-10 tracking-wide">About</h1>
        <p className="text-xl mb-10 leading-9 tracking-wide font-light text-slate-200 max-w-7xl">
          Hello, I'm Sethum Ruberu, an ambitious computer science undergraduate at the Informatics Institute of Technology in Sri Lanka, affiliated with the University of Westminster, UK. My academic journey has provided me with a deep understanding of software development, intricate algorithms, and insightful data analysis. Driven by an unwavering passion for technology and innovation, I am determined to leverage my skills to tackle real-world challenges and push the boundaries of computer science.
        </p>

        <p className="text-xl leading-9 mb-6 tracking-wide font-light text-slate-200 max-w-7xl">
          Thriving in collaborative environments, I eagerly embrace the latest technological advancements, always seeking opportunities to learn and innovate. My ultimate vision is to leave a lasting impact on the tech industry through relentless curiosity and creative problem-solving.
        </p>
        <p className="text-xl leading-9 mb-20 tracking-wide font-light text-slate-200 max-w-7xl">
          With a commitment to continuous growth and a keen eye for emerging trends, I aspire to contribute meaningfully to shaping the future of technology. By staying at the forefront of technological advancements and continuously honing my skills, I aim to be a catalyst for innovation and positive change in the tech industry.
        </p>
        
        <div className='pl-8 text-xl text-slate-200'>
          <ul>
            <li className='flex items-center mb-7'>
              <GiMoebiusStar className={`mr-4`} style={shakeAnimationStyle} />
              Age: 18
            </li>
            <li className='flex items-center mb-7'>
              <GiMoebiusStar className={`mr-4`} style={shakeAnimationStyle} />
              DOB: 28.10.2005
            </li>
            <li className='flex items-center mb-7'>
              <GiMoebiusStar className={`mr-4`} style={shakeAnimationStyle} />
              Mobile number: (+94) 756413574
            </li>
            <li className='flex items-center mb-7'>
              <GiMoebiusStar className={`mr-4`} style={shakeAnimationStyle} />
              Degree: Computer Science
            </li>
            <li className='flex items-center'>
              <GiMoebiusStar className={`mr-4`} style={shakeAnimationStyle} />
              Email: Sethumruberu05@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
