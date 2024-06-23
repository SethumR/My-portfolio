import React from 'react';

function About() {
  return (
    <section className="bg-gray-900 text-white py-20 px-10">
      <div className='pl-20 '>
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600  mb-10 rounded-full	"></div>
        <h1 className="text-6xl font-semibold mb-10 tracking-wide	">About</h1>
        <p className="text-xl mb-10 leading-9 tracking-wide	font-light	text-slate-200 	max-w-7xl">
        I am Sethum Ruberu, an ambitious computer science undergraduate at the Informatics Institute of Technology, Sri Lanka, affiliated with the University of Westminster, UK. My academic journey has immersed me in software development, intricate algorithms, and insightful data analysis. Driven by a passion for technology and innovation, I thrive in collaborative environments where I embrace the latest advancements. With relentless curiosity and commitment to growth, I aspire to make a profound impact on the tech industry through creative problem-solving and shaping the future of technology.
        </p>

        {/*<p className="text-xl leading-9	 mb-6 tracking-wide	font-light	text-slate-200	max-w-7xl">
        Driven by an unwavering passion for technology and innovation, I am determined to leverage my skills to tackle real-world challenges and push the boundaries of computer science.
        </p>
        <p className="text-xl leading-9	 mb-6 tracking-wide font-light	text-slate-200	max-w-7xl">
        Thriving in collaborative environments, I eagerly embrace the latest technological advancements, always seeking opportunities to learn and innovate.
        </p>
        <p className="text-xl leading-9 mb-24 tracking-wide	font-light	text-slate-200	max-w-7xl">
        My ultimate vision is to leave a lasting impact on the tech industry through relentless curiosity and creative problem-solving. With a commitment to continuous growth and a keen eye for emerging trends, I aspire to contribute meaningfully to shaping the future of technology.
        </p>*/}

        <div className='pl-10 text-xl	text-slate-200 '>
          <ul>
              <li className='mb-5'>Age : 18</li>
              <li className='mb-6'>DOB : 28.10.2005</li>
              <li className='mb-5'>Mobile number : (+94) 756413574</li>
              <li className='mb-6'>Degree : Computer Science</li>
              <li className='mb-12'>Email : Sethumruberu05@gmail.com</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;
