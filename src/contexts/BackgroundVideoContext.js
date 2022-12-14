import React, { createContext, useState } from "react"

export const BackgroundVideoContext = createContext();

export const BackgroundVideoProvider = ({ children }) => {
  const [percent, setPercent] = useState(null);
  const [src, setSrc] = useState(null);
  const [opacity, setOpacity] = useState(0);
  
  const value = {
    src,
    percent,
    opacity,
    setSrc,
    setPercent,
    setOpacity,
  };

  return (
    <BackgroundVideoContext.Provider value={value}>
      {children}
    </BackgroundVideoContext.Provider>
  );
};