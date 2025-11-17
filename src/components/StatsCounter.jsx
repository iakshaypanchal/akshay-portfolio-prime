
import React, { useState, useEffect, useRef } from 'react';
import useScrollFade from '../hooks/useScrollFade';
import '../styles/StatsCounter.css';

export default function StatsCounter() {
  const ref = useScrollFade();
  const [isVisible, setIsVisible] = useState(false);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animateCount = (setter, target) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, stepTime);
    };

    animateCount(setExperience, 4);
    animateCount(setProjects, 10);
    animateCount(setTechnologies, 10);
  }, [isVisible]);

  const stats = [
    {
      icon: '💼',
      count: experience,
      suffix: '+',
      label: 'Years Experience',
    },
    {
      icon: '🚀',
      count: projects,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      icon: '⚡',
      count: technologies,
      suffix: '+',
      label: 'Technologies',
    },
  ];

  return (
    <section ref={sectionRef} className="stats-section reveal">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card ripple-effect">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">
              {stat.count}
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
