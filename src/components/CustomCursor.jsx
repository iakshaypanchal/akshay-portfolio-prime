import React, { useEffect, useRef } from 'react';
import '../styles/CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let cursorDotX = 0;
    let cursorDotY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create sparkle particle
      createSparkle(e.clientX, e.clientY);
    };

    // Create sparkle effect
    const createSparkle = (x, y) => {
      if (Math.random() > 0.7) { // Only create 30% of the time
        const sparkle = document.createElement('div');
        sparkle.className = 'cursor-sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
          sparkle.remove();
        }, 600);
      }
    };

    // Animate cursor with smooth follow
    const animateCursor = () => {
      // Smooth interpolation
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursorDotX += (mouseX - cursorDotX) * 0.3;
      cursorDotY += (mouseY - cursorDotY) * 0.3;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorDot.style.transform = `translate3d(${cursorDotX}px, ${cursorDotY}px, 0)`;

      requestAnimationFrame(animateCursor);
    };

    // Magnetic effect for interactive elements
    const handleMagneticEffect = (e) => {
      const target = e.target.closest('a, button, .apple-card, .social-card, .skill-icon-wrapper');
      
      if (target) {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMagneticEffect);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMagneticEffect);
    };
  }, []);

  // Hide custom cursor on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
    </>
  );
}






