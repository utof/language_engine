"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const GLYPHS = "∴ | { } [ ] ( ) < > / \\ * - = _ . :";
const glyphArray = GLYPHS.split(" ").filter(Boolean);

const getRandomGlyph = () =>
  glyphArray[Math.floor(Math.random() * glyphArray.length)];

type Glyph = {
  id: number;
  glyph: string;
  delay: number;
  duration: number;
};

export function InvocationScene({ className }: { className?: string }) {
  const container = useRef(null);
  const [backgroundGlyphs, setBackgroundGlyphs] = useState<Glyph[]>([]);

  useEffect(() => {
    const generatedGlyphs = Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      glyph: getRandomGlyph(),
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }));
    setBackgroundGlyphs(generatedGlyphs);
  }, []);

  useGSAP(
    () => {
      if (backgroundGlyphs.length === 0) return;

      const tl = gsap.timeline();

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
    { scope: container, dependencies: [backgroundGlyphs] }
  );

  return (
    <section
      ref={container}
      className={`relative h-screen w-full ${className}`}
    >
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-8 overflow-hidden">
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