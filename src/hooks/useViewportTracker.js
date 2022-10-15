import { useState, useEffect } from 'react';

const useViewportTracker = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [scrollFraction, setScrollFraction] = useState(0);
  const [topFraction, setTopFraction] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting } = entry;
      setIsVisible(isIntersecting);
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    const handleScroll = () => {
      const boundingRect = ref.current.getBoundingClientRect();
      const distanceTop = boundingRect.top;
      const height = window.innerHeight;
      const topFraction = Math.min(
        Math.max(1 - distanceTop / height, 0),
        1
      );
      setTopFraction(topFraction);
    };
    if (isVisible) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [ref, isVisible])

  return {
    isVisible,
    // scrollFraction,
    topFraction,
  };
};

export default useViewportTracker;