import { useRef } from 'react';
import style from './index.module.css';
import CheckerFadeChar from "./CheckerFadeChar";
import useViewportTracker from '../../../../hooks/useViewportTracker';

function CheckerFade(props) {
  const { value } = props;
  const containerRef = useRef(null);
  const { topFraction } = useViewportTracker(containerRef);
  
  return (
    <div ref={containerRef} className={style.container}>
      {value.split("").map((char, index) => (
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
