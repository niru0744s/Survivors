'use client'; // This marks the component as a Client Component

import React from 'react';
import CustomCursor from "@/components/CustomCursor";
import useIsDesktop from "@/hooks/uselsDesktop";

/**
 * This component handles the logic for displaying the custom cursor.
 * It uses a client-side hook to detect if the user is on a desktop
 * and only renders the CustomCursor component if they are.
 */
const CursorHandler = () => {
  const isDesktop = useIsDesktop();

  // Conditionally render the cursor only on desktop devices
  return isDesktop ? <CustomCursor /> : null;
};

export default CursorHandler;
