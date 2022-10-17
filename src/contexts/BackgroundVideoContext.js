import React, { createContext, useState } from "react"

export const BackgroundVideoContext = createContext();

export const BackgroundVideoProvider = ({ children }) => {
  const [percent, setPercent] = useState(null);
  const [src, setSrc] = useState(null);
  
  const value = {
    src,
    percent,
    setSrc,
    setPercent,
  };

  return (
    <BackgroundVideoContext.Provider value={value}>
      {children}
    </BackgroundVideoContext.Provider>
  );
};