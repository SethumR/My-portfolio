import React, { useRef, useEffect } from 'react';

const Journey = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth < 640 && scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const journeyItems = [
    { year: '2021', description: 'Completed GCE Ordinary Level' },
    { year: '2022', description: 'Joined with IIT and started following foundation program' },
    { year: '2023', description: 'Successfully finished the foundation and started 1st year at UOW' },
    { year: '2024', description: 'Successfully finished the 1st year at UOW and started 2nd year' },
    { year: '2025', description: 'Succsfully Completed 1 semester of the 2nd year and stared 2nd Semester' },
  ];

  return (
    <div 
    data-aos="fade"
    className="text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:pl-24 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <p className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-lg sm:text-xl md:text-2xl font-medium text-gray-300">
        My journey has taught me numerous valuable lessons about growth and resilience.
      </p>


      <div data-aos="fade-up">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none sm:flex-wrap justify-start sm:justify-between gap-4 sm:gap-4 pb-4 sm:pb-0"
      >
        {journeyItems.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.33%-0.75rem)] lg:w-[calc(16.66%-0.75rem)] snap-start sm:snap-align-none mb-6 sm:mb-0"
          >
            <div className='mb-3'>
              <svg width="100%" height="6" viewBox="0 0 208 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z" fill="url(#paint0_linear)" fillOpacity="0.33"></path>
                <defs>
                  <linearGradient id="paint0_linear" x1="-4.30412e-10" y1="0.5" x2="208" y2="0.500295" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"></stop>
                    <stop offset="0.79478" stopColor="white" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-xl sm:text-2xl font-medium mb-2 text-left bg-gradient-to-r from-slate-50 bg-clip-text text-transparent">
              {item.year}
            </div>
            <div className='text-left text-gray-300 text-sm sm:text-base md:text-[17px]'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Journey;
