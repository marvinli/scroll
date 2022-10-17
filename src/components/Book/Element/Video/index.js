import { useContext, useEffect, useRef } from 'react';
import style from './index.module.css';
import useViewportTracker from '../../../../hooks/useViewportTracker';
import { BackgroundVideoContext } from '../../../../contexts/BackgroundVideoContext';

function Video(props) {
  const { value } = props;
  const containerRef = useRef(null);
  const { topFraction } = useViewportTracker(containerRef);
  const { setSrc, setPercent } = useContext(BackgroundVideoContext);

  useEffect(() => {
    setSrc(value);
  }, [value, setSrc]);

  useEffect(() => {
    setPercent(topFraction);
  }, [topFraction, setPercent])

  return (
    <div className={style.video} ref={containerRef} />
  )
}

export default Video;
