'use client';

import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  // State for the main cursor's position (your image)
  const [position, setPosition] = useState({ x: -100, y: -100 });
  // State for the follower element's position
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  // State to track if hovering over an interactive element
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update main cursor position instantly
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check if the mouse is over a link, button, or other interactive element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, label, select, textarea')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
       if (target.closest('a, button, [role="button"], input, label, select, textarea')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Set up the animation loop for the follower
    let animationFrameId: number;
    const animateFollower = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1, // The 0.1 creates the "drag" effect
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      animationFrameId = requestAnimationFrame(animateFollower);
    };
    animateFollower();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]); // Rerun effect if main position changes

  return (
    <>
      {/* The outer, following circle */}
      <div
        className={`cursor-follower ${isHovering ? 'hover' : ''}`}
        style={{ 
          transform: `translate(${followerPosition.x}px, ${followerPosition.y}px)` 
        }}
      />
      {/* The inner, precise image */}
      <img
        src="/image/cursorImg.png" // This path must be correct
        alt="custom cursor"
        className={`cursor-image ${isHovering ? 'hover' : ''}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
