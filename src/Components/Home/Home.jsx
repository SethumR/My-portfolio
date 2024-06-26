import React from 'react';


function Home() {
  return (
    <header className=" pt-52 pl-32" style={{ letterSpacing: '2.1px' }}>
      <div className="w-20 min-h-[5.5px] bg-gradient-to-r from-teal-500 to-purple-600  mb-12 rounded-full	"></div>
      <h1 className="text-7xl font-medium mb-10 tracking-[0.015em]	">Sethum Ruberu</h1>
      <p className="text-[26px] text-white text-opacity-70 mb-12">Undergraduate | Fullstack Developer | Blogger</p>
      <button className=" py-4 max-w-64 text-2xl font-semibold text-white bg-gradient-to-l from-teal-500 to-purple-600 rounded-full cursor-pointer hover:bg-gradient-to-l hover:from-teal-700 hover:to-purple-800 w-1/5 " style={{ letterSpacing: '0px' }}>
        My Resume
      </button>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </header>
  );
}

export default Home;
