import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowUp } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: "Manage Node.js with NVM",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://medium.com/article1",
    date: "Wed Mar 06 2024"
  },
  {
    id: 2,
    title: "Replace npm & yarn with bun.sh",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://medium.com/article2",
    date: "Wed Mar 06 2024"
  },
  {
    id: 3,
    title: "Embarking on the AI Odyssey: A Step-by-Step Guide to Creating Your Own GPT Model",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://medium.com/article3",
    date: "Mon Dec 11 2023"
  },
  {
    id: 4,
    title: "Exploring Top Drag and Drop Libraries for React JS",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://medium.com/article4",
    date: "Wed Jul 12 2023"
  },
  {
    id: 5,
    title: "An Introduction to Prisma ORM: Simplifying Database Operations with Type-Safe Queries",
    image: "/placeholder.svg?height=200&width=300",
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
    <section className="pl-20 px-6 py-16 min-h-screen relative mb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">Medium Publications</h1>
        <p className="text-gray-300 text-xl mb-12">
          Here are the blogs I write on, mostly technology and anything else that interests me.
        </p>

        <div className="relative">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
          >
            {articles.map((article) => (
              <article 
                key={article.id}
                className="w-[300px] flex-shrink-0 bg-white rounded-xl overflow-hidden snap-start"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={article.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 h-[200px] flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex flex-col gap-2">
                    <a
                      href={article.link}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Medium
                    </a>
                    <time className="text-gray-500">{article.date}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            aria-label="Scroll right"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        <a 
          href="https://medium.com/@yourusername"
          className="block w-full bg-[#8B5CF6] text-white text-center py-4 rounded-lg mt-8 hover:bg-[#7C3AED] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW ALL ARTICLES
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-l from-teal-500 to-purple-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </section>
  );
};

export default Publications;
