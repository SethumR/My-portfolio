import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-6 text-gray-300 mb-12">
      <div className="container mx-auto text-center">
        <hr className="mb-6 border-gray-600" />
        <p className="text-sm sm:text-base font-medium">
          © {new Date().getFullYear()} Sethum Ruberu
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/SethumR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-slate-300 text-[24px] sm:text-2xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/sethum-ruberu-90a369293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-slate-300 text-[24px]  sm:text-2xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/sethumm.r/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-slate-300 text-[24px]  sm:text-2xl hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://buymeacoffee.com/sethumruberu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiBuymeacoffee className="text-slate-300 text-[24px]  sm:text-2xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
