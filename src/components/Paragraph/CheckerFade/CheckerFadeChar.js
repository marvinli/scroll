import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';

function CheckerFadeChar(props) {
  const { char, topFraction } = props;
  const randomRef = useRef(Math.random() * 0.5);
  const opacity = topFraction + 0.5 - randomRef.current;

  const style = useSpring({
    to: {
      opacity,
    },
    from: {
      opacity: 0
    },
  });

  return (
    <animated.span style={style}>
      {char}
    </animated.span>
  );
}

export default CheckerFadeChar;
