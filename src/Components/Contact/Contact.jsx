'use client';

import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapPin, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ContactPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createLines = () => {
      const lines = [];
      for (let i = 0; i < 50; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 0.5 + 0.1,
          angle: Math.random() * Math.PI * 2,
        });
      }
      return lines;
    };

    const drawLines = (lines) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        const endX = line.x + Math.cos(line.angle) * line.length;
        const endY = line.y + Math.sin(line.angle) * line.length;
        ctx.lineTo(endX, endY);
        ctx.stroke();

        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (line.x < -line.length) line.x = canvas.width + line.length;
        if (line.x > canvas.width + line.length) line.x = -line.length;
        if (line.y < -line.length) line.y = canvas.height + line.length;
        if (line.y > canvas.height + line.length) line.y = -line.length;
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const lines = createLines();

    const animate = () => {
      drawLines(lines);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0E1526] text-white overflow-hidden mt-12">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Get in touch */}
          <div className="space-y-8" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-teal-500 to-purple-600 text-transparent bg-clip-text tracking-wide">
              Get in touch
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-md">
              We’d love to hear from you! Whether you have any questions,
              need assistance, or just want to connect, don’t hesitate to reach out.
              We’ll respond as quickly as possible to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full border border-gray-700">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">Mobile:</p>
                  <p>+94 756413574</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full border border-gray-700">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm sm:text-base">Email:</p>
                  <p>Sethumgelaka6@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/sethumr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="p-2 rounded-full border border-gray-700">
                    <FaLinkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base">Linkedin:</p>
                    <p>Click Here</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/SethumR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="p-2 rounded-full border border-gray-700">
                    <FaGithub className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base">Github:</p>
                    <p>Click Here</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form className="space-y-6" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="sr-only">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors resize-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-l from-teal-500 to-purple-600 hover:from-teal-400 hover:to-purple-700 font-medium transition-colors mb-12"
                data-aos="fade-up"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
