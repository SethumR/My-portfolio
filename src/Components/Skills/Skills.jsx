import React from 'react';

function Skills() {
  return (
    <section className=" py-16">
      <div className="pl-32">
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600  mb-12 rounded-full	"></div>
        <h2 className="text-6xl font-semibold mb-10 tracking-wide	">Skills</h2>
        <p className="mb-12 text-2xl font-medium text-gray-300">As a developer, I've worked with a variety of Languages and Frameworks.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl	pl-10">
          <div>
              <h4 className="text-lg font-semibold tracking-wider	 mb-7">FRONTEND</h4>
              <ul className='font-medium text-[17px]'>
                <li className="mb-4"><span className="mr-2">🌐</span>HTML</li>
                <li className="mb-4"><span className="mr-2">🌐</span>CSS</li>
                <li className="mb-4"><span className="mr-2">🌐</span>JavaScript</li>
                <li className="mb-4"><span className="mr-2">🌐</span>React</li>
                <li className="mb-4"><span className="mr-2">🌐</span>Bootsrap</li>
                <li className="mb-4"><span className="mr-2">🌐</span>Tailwind CSS</li>
                <li className="mb-20"><span className="mr-2">🌐</span>Flutter</li>
              </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider	 mb-7">BACKEND</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-4"><span className="mr-2">📱</span>Node js</li>
              <li className="mb-4"><span className="mr-2">📱</span>Express</li>
              <li className="mb-4"><span className="mr-2">📱</span>Spring Boot</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider	 mb-7">DATABASE</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-4"><span className="mr-2">🛠️</span>My SQL</li>
              <li className="mb-4"><span className="mr-2">🛠️</span>Firebase Firestore</li>
              <li className="mb-4"><span className="mr-2">🛠️</span>MongoDB</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider	mb-7">GRAPIC EDITING</h4>
            <ul className='font-medium text-[17px]'>
              <li className="mb-4"><span className="mr-2">💾</span>Photoshop</li>
              <li className="mb-4"><span className="mr-2">💾</span>Figma</li>
              <li className="mb-4"><span className="mr-2">💾</span>Filmora</li>
              <li className="mb-4"><span className="mr-2">💾</span>Premiere pro</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
