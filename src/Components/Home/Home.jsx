import React from 'react';

function Home() {
  return (
    <header className=" pt-64 pl-32" style={{ letterSpacing: '2.1px' }}>
      <h1 className="text-7xl font-medium mb-10 tracking-[0.0025em]	">Sethum Ruberu</h1>
      <p className="text-[26px] text-white text-opacity-70 mb-12">Undergraduate | Fullstack Developer | Blogger</p>
      <button className=" py-4 max-w-64 text-2xl font-semibold text-white bg-gradient-to-l from-teal-500 to-purple-600 rounded-full cursor-pointer hover:bg-gradient-to-l hover:from-teal-700 hover:to-purple-800 w-1/5 " style={{ letterSpacing: '0px' }}>
        My Resume
      </button><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </header>
  );
}

export default Home;
