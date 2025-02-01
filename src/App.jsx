import React, { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Journey from './Components/Journy/Jorney';
import Publications from './Publications/Publications';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
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

  return (
    <>
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Journey />
        <Skills />
        <Services />
        <Projects />
        <Publications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
