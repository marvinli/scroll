import { useRef } from 'react';
import './index.css';
import CheckerFadeChar from "./CheckerFadeChar";
import useViewportTracker from '../../../../hooks/useViewportTracker';

function CheckerFade(props) {
  const { value } = props;
  const containerRef = useRef(null);
  const { topFraction } = useViewportTracker(containerRef);
  
  const text = value[0];
  return (
    <div ref={containerRef} className="container">
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
