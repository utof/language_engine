"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

import { InvocationScene } from "./invocation-scene";
import { DefinitionScene } from "./definition-scene";
import { AxiomsScene } from "./axioms-scene";
import { RitualScene } from "./ritual-scene";
import { SignatureScene } from "./signature-scene";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function Experience() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          start: "top top",
          end: "+=9000", // Increased length for the new scene
          scrub: 1,
        },
      });

      // --- Scene 1 -> 2: Invocation to Definition ---
      tl.to(".invocation-scene-container", { opacity: 0, duration: 2 });
      tl.fromTo(
        ".definition-scene-container",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<"
      );

      const definitionTl = gsap.timeline();
      tl.add(definitionTl, "<1");

      definitionTl.from(".definition-scene .subtitle", {
        text: "",
        duration: 3,
        ease: "none",
      });
      definitionTl.to(
        ".definition-scene .title-part-1",
        { yPercent: -150, autoAlpha: 0 },
        "+=1"
      );
      definitionTl.to(
        ".definition-scene .title-part-2",
        { yPercent: 150, autoAlpha: 0 },
        "<"
      );
      definitionTl.to(
        ".definition-scene .subtitle",
        { autoAlpha: 0, duration: 1 },
        "<"
      );

      // --- Scene 2 -> 3: Definition to Axioms ---
      // Crossfade from Definition to Axioms
      tl.to(".definition-scene-container", { opacity: 0, duration: 2 });
      tl.fromTo(
        ".axioms-scene-container",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<"
      );

      // --- Scene 3: Axioms Animations ---
      const axiomsTl = gsap.timeline();
      tl.add(axiomsTl, "<1"); // Start animating axioms shortly after it appears

      // Animate each letter towards the vortex
      axiomsTl.to(".axiom-letter", {
        // Stagger the animation for each letter
        stagger: {
          each: 0.05,
          from: "random", // Start from a random letter for a chaotic effect
        },
        // Move letters towards the vortex area
        x: () => `+=${gsap.utils.random(200, 400)}`,
        y: () => `+=${gsap.utils.random(-100, 100)}`,
        opacity: 0,
        scale: 0,
        duration: 5,
        ease: "power2.in",
      });

      // Fade out the "What Is It?" title along with the letters
      axiomsTl.to(
        ".axioms-scene-container .text-3xl",
        {
          opacity: 0,
          duration: 2,
        },
        "<"
      ); // Start at the same time as the letter animation

      // Fade out the entire Axioms Scene
      tl.to(".axioms-scene-container", {
        opacity: 0,
        duration: 2,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative h-screen w-full">
      <div className="absolute inset-0 invocation-scene-container">
        <InvocationScene />
      </div>
      <div className="absolute inset-0 opacity-0 definition-scene-container">
        <DefinitionScene />
      </div>
      <div className="absolute inset-0 opacity-0 axioms-scene-container">
        <AxiomsScene />
      </div>
      {/* The other scenes are here but remain invisible for now */}
      <div className="absolute inset-0 opacity-0 ritual-scene-container">
        <RitualScene />
      </div>
      <div className="absolute inset-0 opacity-0 signature-scene-container">
        <SignatureScene />
      </div>
    </div>
  );
}