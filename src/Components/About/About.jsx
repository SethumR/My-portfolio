import React from 'react';

function About() {
  return (
    <section className=" text-white py-20 px-10">
      <div className='pl-20 '>
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600  mb-10 rounded-full	"></div>
        <h1 className="text-6xl font-semibold mb-10 tracking-wide	">About</h1>
        <p className="text-xl mb-10 leading-9 tracking-wide	font-light	text-slate-200 	max-w-7xl">
        Hello, I'm Sethum Ruberu, an ambitious computer science undergraduate at the Informatics Institute of Technology in Sri Lanka, affiliated with the University of Westminster, UK. My academic journey has provided me with a deep understanding of software development, intricate algorithms, and insightful data analysis. Driven by an unwavering passion for technology and innovation, I am determined to leverage my skills to tackle real-world challenges and push the boundaries of computer science.        </p>

        <p className="text-xl leading-9	 mb-6 tracking-wide	font-light	text-slate-200	max-w-7xl">
        Thriving in collaborative environments, I eagerly embrace the latest technological advancements, always seeking opportunities to learn and innovate. My ultimate vision is to leave a lasting impact on the tech industry through relentless curiosity and creative problem-solving.        </p>
        <p className="text-xl leading-9	 mb-20 tracking-wide font-light	text-slate-200	max-w-7xl">
        With a commitment to continuous growth and a keen eye for emerging trends, I aspire to contribute meaningfully to shaping the future of technology. By staying at the forefront of technological advancements and continuously honing my skills, I aim to be a catalyst for innovation and positive change in the tech industry.        </p>
        
        <div className='pl-10 text-xl	text-slate-200 '>
          <ul>
              <li className='mb-7'>Age : 18</li>
              <li className='mb-7'>DOB : 28.10.2005</li>
              <li className='mb-7'>Mobile number : (+94) 756413574</li>
              <li className='mb-7'>Degree : Computer Science</li>
              <li className=''>Email : Sethumruberu05@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
