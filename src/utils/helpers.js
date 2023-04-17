import React from 'react';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback, ref]);

  return ref;
};

export const transforms = {
  square: '&tr=w-400,h-400,c-maintain_ratio,fo-top_left',
  square_lg: '&tr=w-900,h-900,c-maintain_ratio,fo-top_left',
  four3_lg: '&tr=w-900,h-675,c-maintain_ratio,fo-top_left',
  wide: '&tr=w-600,h-300,c-maintain_ratio,fo-top_left',
  wide_lg: '&tr=w-900,h-550,c-maintain_ratio,fo-top_left',
  tall: '&tr=w-400,h-800,c-maintain_ratio,fo-top',
  tall_lg: '&tr=w-900,h-1800,c-maintain_ratio,fo-top_left',
};
