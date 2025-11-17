import React, { useEffect, useRef } from 'react';
import '../styles/AnimatedBackground.css';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let orbs = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create floating orbs
    class Orb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 200 + 100;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.colors = [
          ['rgba(99, 102, 241, 0.15)', 'rgba(168, 85, 247, 0.15)'],
          ['rgba(236, 72, 153, 0.15)', 'rgba(239, 68, 68, 0.15)'],
          ['rgba(59, 130, 246, 0.15)', 'rgba(147, 51, 234, 0.15)'],
          ['rgba(34, 197, 94, 0.15)', 'rgba(59, 130, 246, 0.15)'],
        ];
        this.colorPair = this.colors[Math.floor(Math.random() * this.colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < -this.radius || this.x > canvas.width + this.radius) {
          this.vx *= -1;
        }
        if (this.y < -this.radius || this.y > canvas.height + this.radius) {
          this.vy *= -1;
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.colorPair[0]);
        gradient.addColorStop(0.5, this.colorPair[1]);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize orbs
    for (let i = 0; i < 6; i++) {
      orbs.push(new Orb());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
}
