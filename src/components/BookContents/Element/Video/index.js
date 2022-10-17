import { useContext, useEffect, useRef } from 'react';
import style from './index.module.css';
import useViewportTracker from '../../../../hooks/useViewportTracker';
import { BackgroundVideoContext } from '../../../../contexts/BackgroundVideoContext';
import squish from '../../../../helpers/range';

function Video(props) {
  const { value } = props;
  const containerRef = useRef(null);
  const { topFraction, bottomFraction } = useViewportTracker(containerRef);
  const { setSrc, setPercent, setOpacity } = useContext(BackgroundVideoContext);

  useEffect(() => {
    setSrc(value);
  }, [value, setSrc]);

  useEffect(() => {
    const percent = squish(topFraction, 0.5, 1);
    setPercent(percent);
  }, [topFraction, setPercent]);

  useEffect(() => {
    let opacity;
    if (topFraction < 0.7) {
      // Fade in when top is 30% up
      opacity = squish(topFraction, 0.5, 0.7);
    } else {
      // Fade out when bottom is 30% up
      opacity = 1 - squish(bottomFraction, 0.3, 0.7);
    }
    setOpacity(opacity);
  }, [topFraction, bottomFraction, setOpacity]);

  return (
    <div className={style.video} ref={containerRef} />
  )
}

export default Video;
