import { useRef } from 'react';
import squish from '../../../../helpers/range';

function CheckerFadeChar(props) {
  const { char, topFraction } = props;
  const randomRef = useRef(Math.random() * 0.3);
  const opacity = squish(
    topFraction,
    randomRef.current,
    randomRef.current + 0.3
  );

  return (
    <span style={{ opacity: opacity * opacity }}>
      {char}
    </span>
  );
}

export default CheckerFadeChar;
