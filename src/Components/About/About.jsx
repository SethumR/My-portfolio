import React from 'react'
import './About.css'

function About() {
  return (
    <header className="about">
        <h1 className='text-6xl font-normal'>About</h1>
        <p className='text-lg'>I am Sethum Ruberu, an enthusiastic computer science undergraduate at the Informatics Institute of Technology in Sri Lanka, 
            proudly affiliated with the University of Westminster in the United Kingdom. My academic journey has been a thrilling adventure, 
            immersing me in the dynamic realms of software development, intricate algorithms, and insightful data analysis. 
            Driven by a passion for technology and innovation, I aspire to harness my skills to tackle real-world challenges 
            and push the boundaries of computer science. Thriving in collaborative settings, I am always on the lookout for the latest technological advancements, 
            eager to learn and innovate. My vision is to leave a lasting impact on the tech industry through relentless curiosity and creative problem-solving.</p>

            <ul className='text-lg'>
                <li>Age : 18</li>
                <li>DOB : 28.10.2005</li>
                <li>Mobile nunber : (+94) 756413574</li>
                <li>Dgree : Computer Science</li>
                <li>Email : Sethumruberu05@gmail.com</li>
            </ul>
    </header>
  )
}

export default About