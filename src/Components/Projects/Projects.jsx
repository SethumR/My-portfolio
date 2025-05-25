import React, { useEffect } from 'react';
import { TbExternalLink } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectBox = ({ image, title, description, link }) => (
  <div className="portfolio-box relative group h-[350px] sm:h-[375px] w-full sm:w-[375px] rounded-3xl overflow-hidden">
    {/* Image */}
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
    
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-20 z-10"></div>
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center flex-col text-center p-4 sm:p-16 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-gradient-to-b from-transparent to-cyan-700 z-20">
      <h4 className="text-2xl sm:text-3xl font-semibold mb-2">{title}</h4>
      <p className="text-sm sm:text-base my-1 mb-4 sm:mb-6">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex justify-center items-center text-gray-700">
          <TbExternalLink size={24} />
        </div>
      </a>
    </div>
  </div>
);


function Projects() {
  const projects = [
    {
      image: "https://media.licdn.com/dms/image/v2/D4D12AQEucjxizYhafw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715682597484?e=2147483647&v=beta&t=xz91icT2nqGV2321UE6kwTTtcFkuwF3BtH8o2U9xGzE",
      title: "Mock Interview Platform",
      description: "AI platform simulating interviews with real-time feedback, analytics, and communication skill assessments for users.",
      link: "https://hired.solutions/"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFqZzKHGn16Lw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682949649829?e=2147483647&v=beta&t=0Bz15Ubk7BNohyvslzkE8WjE5qTcgTYgUKTKxk-djLo",
      title: "ML Model for Breast Cancer Patients",
      description: "Machine learning models predicting breast cancer with classifier comparison, hyperparameter tuning, and visual insights.",
      link: "https://github.com/SethumR/Breast-Cancer-Prediction.git"
    },
    {
      image: "https://strapi.aurumproptech.in/uploads/Future_of_real_estate_market_933684ecef.webp",
      title: "KeyNest Estate Agent Application",
      description: "A property app with filters, drag-and-drop favorites, and responsive design for seamless property browsing.",
      link: "https://luxuryestates.netlify.app/"
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*MAmdFRYx-2XLuZ8O",
      title: "Real-Time Ticket Simulation",
      description: "Simulates real-time ticket booking with dynamic seat handling, vendor logs, and customer purchase automation.",
      link: "https://github.com/SethumR/Ticketing-System-CLI.git"
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*xH-xZAZ_ireZp_64",
      title: "Bookstore Backend API",
      description: "Java-based REST API managing books, customers, and orders with scalable architecture and JSON responses.",
      link: "https://github.com/SethumR/BooksStore.git"
    },
    {
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/2d20b705-9dac-4f1d-9a01-54ea7557aa4f/6c413449-da83-4063-a7b8-b7bfbb902612.png",
      title: "My Portfolio",
      description: "A responsive portfolio built using React and Tailwind CSS, showcasing my projects, skills, and experience.",
      link: "https://github.com/SethumR/My-portfolio.git"
    }
    
  ];

  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Repeat the animation every time it comes into view
    });

    // Re-initialize AOS on scroll
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh); // Clean up on unmount
    };
  }, []);

  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-16 mb-4 sm:mb-12 mt-12 lg:mt-20">
        <h2 className="text-[42px] sm:text-5xl lg:text-5xl font-semibold mb-6 sm:mb-10 tracking-wide text-center">Projects</h2>
        <p className="mb-10 sm:mb-16 text-xl sm:text-2xl font-medium text-gray-300 text-center max-w-6xl mx-auto">
          As a developer, here are some of the impactful projects I've been working on recently
        </p>

        <div data-aos="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-10">
            {projects.map((project, index) => (
              <ProjectBox key={index} {...project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
