import { useEffect } from 'react';

export default function useRipple() {
  useEffect(() => {
    const createRipple = (event) => {
      const button = event.currentTarget;
      
      // Only apply to buttons and interactive elements
      if (!button.classList.contains('ripple-effect')) return;

      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const buttons = document.querySelectorAll('.ripple-effect');
    buttons.forEach((button) => {
      button.addEventListener('click', createRipple);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', createRipple);
      });
    };
  }, []);
}
