import { useRef } from 'react';
import CheckerFadeChar from "./CheckerFadeChar";
import useViewportTracker from '../../../hooks/useViewportTracker';

function CheckerFade(props) {
  const { text } = props;
  const containerRef = useRef(null);
  const { topFraction } = useViewportTracker(containerRef);
  
  return (
    <div ref={containerRef}>
      {text.split("").map((char, index) => (
        <CheckerFadeChar
          char={char}
          key={index}
          topFraction={topFraction}
        />
      ))}
    </div>
  );
}

export default CheckerFade;
