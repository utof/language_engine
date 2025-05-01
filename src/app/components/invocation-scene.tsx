"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// The set of allowed glyphs remains the same
const GLYPHS = "∴ | { } [ ] ( ) < > / \\ * - = _ . :";
const glyphArray = GLYPHS.split(" ").filter(Boolean);

// Helper to select a random glyph
const getRandomGlyph = () =>
  glyphArray[Math.floor(Math.random() * glyphArray.length)];

// Define a type for our glyph objects for better type safety
type Glyph = {
  id: number;
  glyph: string;
  delay: number;
  duration: number;
};

export function InvocationScene() {
  const container = useRef(null);
  // FIX: Use state to hold the glyphs, defaulting to an empty array.
  // The server will render this empty, and the client will initially render it empty.
  const [backgroundGlyphs, setBackgroundGlyphs] = useState<Glyph[]>([]);

  // FIX: Generate the random glyphs inside a useEffect hook.
  // This ensures the code only runs on the client, after hydration is complete.
  useEffect(() => {
    const generatedGlyphs = Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      glyph: getRandomGlyph(),
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
    setBackgroundGlyphs(generatedGlyphs);
  }, []); // The empty dependency array [] means this runs only once on mount.

  useGSAP(
    () => {
      // Prevent the animation from running until the glyphs have been generated.
      if (backgroundGlyphs.length === 0) return;

      const tl = gsap.timeline();

      // The animation sequence is the same as before.
      tl.fromTo(
        ".central-glyph",
        { scale: 1, opacity: 0.8 },
        { scale: 1.5, opacity: 0, duration: 3, ease: "power2.inOut" }
      );

      tl.to(".central-glyph", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });

      tl.from(
        ".background-glyph",
        {
          opacity: 0,
          scale: 0.5,
          duration: 1.5,
          ease: "power3.out",
          stagger: {
            from: "center",
            amount: 2,
          },
        },
        "-=1.5"
      );

      gsap.to(".background-glyph", {
        opacity: 0.1,
        duration: (i) => backgroundGlyphs[i].duration,
        delay: (i) => backgroundGlyphs[i].delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    // FIX: Add backgroundGlyphs as a dependency.
    // This tells GSAP to re-run the animation setup when the glyphs state changes.
    { scope: container, dependencies: [backgroundGlyphs] }
  );

  return (
    <section ref={container} className="relative h-screen w-full">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-8 overflow-hidden">
        {/* This will now render nothing on the server, matching the initial client render */}
        {backgroundGlyphs.map((item) => (
          <span
            key={item.id}
            className="background-glyph text-foreground/20 text-lg font-mono opacity-0"
          >
            {item.glyph}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="central-glyph text-foreground text-2xl font-medium opacity-0">
          ∴
        </span>
      </div>
    </section>
  );
}