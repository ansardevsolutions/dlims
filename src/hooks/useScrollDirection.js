import { useState, useEffect, useRef } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);
  const lastScrollYRef = useRef(0);
  const throttleTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll events for better performance
      if (throttleTimeoutRef.current) return;

      throttleTimeoutRef.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollYRef.current) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollYRef.current) {
          setScrollDirection('up');
        }
        
        setScrollY(currentScrollY);
        lastScrollYRef.current = currentScrollY;
        throttleTimeoutRef.current = null;
      }, 50); // Throttle to 50ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, []);

  return { scrollDirection, scrollY };
};

export default useScrollDirection;
