import React from 'react';

function Skills() {
  return (
    <section className="text-gray-300 py-16">
      <div className="container  px-8 md:px-16">
        <h2 className="text-6xl font-semibold mb-10">Skills</h2>
        <p className="mb-12 text-2xl font-medium text-slate-400	">As a developer, I've worked with a variety of Languages and Frameworks.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <h4 className="text-xl font-semibold mb-5 ">Frontend</h4>
            <ul>
              <li className="mb-4"><span className="mr-2">🌐</span>HTML</li>
              <li className="mb-4"><span className="mr-2">🌐</span>CSS</li>
              <li className="mb-4"><span className="mr-2">🌐</span>JavaScript</li>
              <li className="mb-4"><span className="mr-2">🌐</span>React</li>
              <li className="mb-4"><span className="mr-2">🌐</span>Bootsrap</li>
              <li className="mb-4"><span className="mr-2">🌐</span>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-5">Backend</h4>
            <ul>
              <li className="mb-4"><span className="mr-2">📱</span>Node js</li>
              <li className="mb-4"><span className="mr-2">📱</span>Express</li>
              <li className="mb-4"><span className="mr-2">📱</span>Spring Boot</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-5">Database</h4>
            <ul>
              <li className="mb-4"><span className="mr-2">🛠️</span>My SQL</li>
              <li className="mb-4"><span className="mr-2">🛠️</span>Firebase Firestore</li>
              <li className="mb-4"><span className="mr-2">🛠️</span>MongoDB</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-5">Graphic Editing</h4>
            <ul>
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
