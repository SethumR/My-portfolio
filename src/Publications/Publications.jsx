import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowUp } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: "Why React.js is a Game-Changer for Modern Web Development",
    image: "react.png",
    link: "https://medium.com/@sethumgelaka6/react-js-is-more-than-just-a-javascript-library-its-a-powerful-tool-that-has-revolutionized-the-c73cbdd50f06?source=friends_link&sk=08597ff6f65e468617db39b3c61d4f0c",
    date: "Dec 24 2024"
  },
  {
    id: 2,
    title: "ChatGPT vs DeepSeek: A Comparison of Two AI Powerhouses",
    image: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2025/01/28124329/Untitled-design-2025-01-28T124317.032.png",
    link: "https://medium.com/@sethumgelaka6/chatgpt-vs-deepseek-a-comparison-of-two-ai-powerhouses-e050ff48c801",
    date: "Feb 01 2025"
  },
  {
    id: 3,
    title: "How to Create a Self-Care Routine That Works for You",
    image: "SA.png",
    link: "https://medium.com/@sethumgelaka6/how-to-create-a-self-care-routine-that-works-for-you-2030cbf7aceb",
    date: "Dec 25 2024"
  },
  {
    id: 4,
    title: "What is the Deferece between Bosstrap and Tailwind CSS",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*T0x4TApsR_LlsRQBGAbbZA.jpeg",
    link: "https://medium.com/@sethumgelaka6/tailwind-css-vs-bootstrap-b486fc00b4c1",
    date: "Feb 01 2025"
  },
  {
    id: 5,
    title: "An Introduction to Prisma ORM: Simplifying Database Operations with Type-Safe Queries",
    image: "SA.png",
    link: "https://medium.com/article5",
    date: "Mon Jul 03 2023"
  }
];

const Publications = () => {
  const scrollRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pl-4 sm:pl-8 lg:pl-20 px-4 sm:px-6 py-12 lg:py-16 min-h-screen relative sm:mb-24 -mb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[34px] sm:text-5xl font-bold text-white mb-6 sm:mb-6 tracking-wide">
          Medium Publications
        </h1>
        <div data-aos="fade">
        <p className="text-gray-300 text-[18.5px] sm:text-[22px] mb-10 sm:mb-12">
          Here I write blogs on technology, innovation, and various topics that pique my curiosity.
        </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={24} />
          </button>

          <div
            data-aos="fade-up"
            ref={scrollRef}
            className="flex gap-4 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:pb-6"
          >
            {articles.map((article) => (
              <article
                key={article.id}
                className="w-[250px] sm:w-[300px] flex-shrink-0 bg-slate-800 rounded-xl overflow-hidden snap-start shadow-lg"
              >
                <div className="h-[150px] sm:h-[200px] overflow-hidden p-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4 sm:p-6 h-[180px] flex flex-col">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-2 sm:mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex flex-col gap-1 sm:gap-2">
                    <a
                      href={article.link}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Medium
                    </a>
                    <time className="text-gray-300 text-sm">{article.date}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Scroll right"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <a
          data-aos="fade-up"
          href="https://medium.com/@sethumgelaka6"
          className="block w-full bg-gradient-to-l from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-700 shadow-md text-white text-center py-3 sm:py-4 rounded-lg mt-6 sm:mt-8  transition-colors font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW ALL ARTICLES
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-l from-teal-500 to-purple-600 p-2.5 sm:p-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </section>
  );
};

export default Publications;
