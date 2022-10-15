import './Paragraph.css';
import { useRef } from 'react';
import useViewportTracker from '../hooks/useViewportTracker';
import { useSpring, animated } from 'react-spring'

function Paragraph(props) {
  const { text } = props;
  const container = useRef(null);
  const { topFraction } = useViewportTracker(container);
  const style = useSpring({ to: { opacity: topFraction }, from: { opacity: 0 } })

  return (
    <div ref={container}>
      <animated.div style={style}>
        {/* {text.split("").map((char) => <span>{char}</span>)} */}
        {text}
      </animated.div>
    </div>
  );
}

export default Paragraph;
