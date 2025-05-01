"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Vein() {
  const veinRef = useRef(null);

  useGSAP(() => {
    // We will animate the `x` property of the SVG itself to create a jitter.
    // This is more reliable than SVG filters.
    gsap.to(veinRef.current, {
      x: "random(-1, 100)", // Move to a random x position between -1 and 1 pixels
      duration: "random(0.1, 0.2)", // Over a random short duration
      repeat: -1, // Loop forever
      repeatRefresh: true, // This makes sure the random values are re-calculated on each repeat
      ease: "none",
    });
  }, []);

  return (
    // The ref is now on the SVG element so GSAP can move it
    <svg
      ref={veinRef}
      className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-full z-[-10]"
      width="10"
      preserveAspectRatio="none"
    >
      <line
        x1="5"
        y1="0"
        x2="5"
        y2="100%"
        stroke="#FFFFFF"
        strokeWidth="1"
        opacity="0.8"
        // No filters needed. The animation provides the effect.
      />
    </svg>
  );
}