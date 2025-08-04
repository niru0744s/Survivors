'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook to determine if the current device is a desktop.
 * It checks for the absence of touch capabilities and a minimum screen width.
 * @returns {boolean} 
 */
const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsDesktop(!hasTouch && hasFinePointer);
    };
    checkDevice();

  }, []);

  return isDesktop;
};

export default useIsDesktop;
