import { useContext, useEffect, useRef } from 'react';
import style from './index.module.css';
import useViewportTracker from '../../../../hooks/useViewportTracker';
import { BackgroundVideoContext } from '../../../../contexts/BackgroundVideoContext';
import squish from '../../../../helpers/range';

function Video(props) {
  const { value } = props;
  const containerRef = useRef(null);
  const { scrollFraction } = useViewportTracker(containerRef);
  const { setSrc, setPercent, setOpacity } = useContext(BackgroundVideoContext);

  useEffect(() => {
    setSrc(value);
  }, [value, setSrc]);

  useEffect(() => {
    if (scrollFraction < 0.4) {
      setPercent(0.01);
      setOpacity(squish(scrollFraction, 0.3, 0.4));
    } else if (scrollFraction < 0.6) {
      setPercent(Math.max(squish(scrollFraction, 0.4, 0.6), 0.01));
      setOpacity(1);
    } else {
      setPercent(1);
      setOpacity(1 - squish(scrollFraction, 0.6, 0.7));
    }
  }, [scrollFraction, setPercent, setOpacity]);

  return (
    <div className={style.video} ref={containerRef} />
  )
}

export default Video;
