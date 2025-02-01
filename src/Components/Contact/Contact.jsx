'use client';

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const lines = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 0.5 + 0.1,
      angle: Math.random() * Math.PI * 2,
    }));

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + Math.cos(line.angle) * line.length, line.y + Math.sin(line.angle) * line.length);
        ctx.stroke();

        line.x = (line.x + Math.cos(line.angle) * line.speed + canvas.width) % canvas.width;
        line.y = (line.y + Math.sin(line.angle) * line.speed + canvas.height) % canvas.height;
      });

      animationFrameId = requestAnimationFrame(drawLines);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawLines();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in the email and message fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    let params = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send('service_kdxa1gk', 'template_cvtytjx', params, 'yDAkMym3VmfUNcrAC')
      .then((response) => {
        setLoading(false);
        setSuccess('Message sent successfully!');
        console.log('Success:', response);
      })
      .catch((error) => {
        setLoading(false);
        setError('Failed to send message!');
        console.log('Error:', error);
      });
  };

  return (
    <section id='contact'>
      <div className="relative min-h-screen bg-[#070b19] text-white overflow-hidden mt-12">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'screen' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Get in touch */}
            <div className="space-y-8" data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold bg-gradient-to-l from-teal-500 to-purple-600 text-transparent bg-clip-text tracking-wide">
                Get in touch
              </h1>
              <p className="text-gray-400 text-base sm:text-lg max-w-md">
                We’d love to hear from you! Whether you have any questions,
                need assistance, or just want to connect, don’t hesitate to reach out.
                We’ll respond as quickly as possible to assist you.
              </p>
              <div className="space-y-4">
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
            <form className="space-y-6" onSubmit={handleSubmit} data-aos="fade-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-10 py-3 bg-gradient-to-l from-teal-500 to-purple-600 rounded-lg font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-purple-600 transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
              {success && <p className="text-green-500 text-center mt-2">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
