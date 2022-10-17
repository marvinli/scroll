import { useContext, useEffect, useRef } from "react";
import { BackgroundVideoContext } from "../../contexts/BackgroundVideoContext";
import style from "./index.module.css";

function BackgroundVideo() {
  const { src, percent, opacity } = useContext(BackgroundVideoContext);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!src) {
      return;
    }
    const vidEl = videoRef.current;
    if (!vidEl?.duration) {
      return;
    }
    vidEl.currentTime = percent * vidEl.duration;
  }, [videoRef, src, percent]);

  if (!src || percent === 0) {
    return null;
  }

  return (
    <video className={style.video} ref={videoRef} style={{ opacity: opacity }}>
      <source src={`/assets/${src}`} type="video/mp4" />
    </video>
  )
}

export default BackgroundVideo;
