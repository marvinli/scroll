import { useState, useEffect } from 'react';

function useViewportTracker(ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomFraction, setBottomFraction] = useState(0);
  const [topFraction, setTopFraction] = useState(0);
  const [scrollFraction, setScrollFraction] = useState(0);

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
      const winHeight = window.innerHeight;
      const tf = Math.min(
        Math.max(1 - distanceTop / winHeight, 0),
        1
      );
      setTopFraction(tf);

      const distanceBottom = boundingRect.bottom;
      const bf = Math.min(
        Math.max(1 - distanceBottom / winHeight, 0),
        1
      );
      setBottomFraction(bf);

      const refHeight = ref.current.offsetHeight;
      const percent = Math.min(
        Math.max((winHeight - distanceTop)/refHeight, 0),
        1
      );
      setScrollFraction(percent);
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
    bottomFraction,
    topFraction,
    scrollFraction,
  };
}

export default useViewportTracker;