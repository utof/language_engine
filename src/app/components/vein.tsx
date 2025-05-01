"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Vein() {
  const veinRef = useRef(null);

  useGSAP(() => {
    // This timeline will create a continuous, subtle, and random jitter/flicker effect.
    gsap.to(veinRef.current, {
      // Animate the horizontal position slightly for a jittering effect.
      // The range is kept small (-1.5 to 1.5 pixels) for subtlety.
      x: "random(-1.5, 1.5)",

      // Animate the opacity for a flickering effect.
      // It will flicker between 10% and 30% opacity.
      opacity: "random(0.4, 0.8)",

      // The duration of each jitter/flicker is also randomized.
      duration: "random(0.2, 0.8)",

      // Loop forever.
      repeat: -1,

      // This is the key: it re-evaluates the random values for each loop cycle.
      repeatRefresh: true,

      // No easing is needed for a raw, random feel.
      ease: "none",
    });
  }, []);

  return (
    // The SVG container. It's fixed to the viewport and behind all content.
    // pointer-events-none ensures it doesn't interfere with mouse interactions.
    <svg
      ref={veinRef}
      className="pointer-events-none fixed top-0 left-1/2 h-full -z-10"
      width="1" // The SVG viewport is only 1px wide.
      preserveAspectRatio="none"
    >
      {/* 
        The line itself.
        - It is drawn down the center of the 1px SVG viewport.
        - stroke-foreground uses the current theme's text color.
        - The base opacity is set to 0.1, letting GSAP animate it.
      */}
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100%"
        className="stroke-amber-400" // Use Tailwind class for theme-aware color.
        strokeWidth="1"
        opacity="1"
      />
    </svg>
  );
}