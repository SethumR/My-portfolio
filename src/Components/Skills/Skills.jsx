import React from 'react';

const Skills = () => {
  return (
    <section className="text-gray-300 bg-gray-900 py-16">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-lg mb-12">As a developer, I've worked with a variety of technologies to create and manage my projects.</p>
        <h3 className="text-3xl font-semibold text-purple-400 mb-8">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Frontend Web</h4>
            <ul>
              <li className="mb-2"><span className="mr-2">🌐</span>React</li>
              <li className="mb-2"><span className="mr-2">🌐</span>Next</li>
              <li className="mb-2"><span className="mr-2">🌐</span>Angular</li>
              <li className="mb-2"><span className="mr-2">🌐</span>JavaScript</li>
              <li className="mb-2"><span className="mr-2">🌐</span>HTML</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Frontend Mobile</h4>
            <ul>
              <li className="mb-2"><span className="mr-2">📱</span>React Native</li>
              <li className="mb-2"><span className="mr-2">📱</span>Flutter</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Backend</h4>
            <ul>
              <li className="mb-2"><span className="mr-2">🛠️</span>Nest js</li>
              <li className="mb-2"><span className="mr-2">🛠️</span>Node js</li>
              <li className="mb-2"><span className="mr-2">🛠️</span>Express</li>
              <li className="mb-2"><span className="mr-2">🛠️</span>Spring Boot</li>
              <li className="mb-2"><span className="mr-2">🛠️</span>.NET</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Database</h4>
            <ul>
              <li className="mb-2"><span className="mr-2">💾</span>MongoDB</li>
              <li className="mb-2"><span className="mr-2">💾</span>Firebase Firestore</li>
              <li className="mb-2"><span className="mr-2">💾</span>SQL</li>
              <li className="mb-2"><span className="mr-2">💾</span>SQLite</li>
              <li className="mb-2"><span className="mr-2">💾</span>AWS DynamoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
