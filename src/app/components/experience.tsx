"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { InvocationScene } from "./invocation-scene";
import { DefinitionScene } from "./definition-scene";
import { AxiomsScene } from "./axioms-scene";
import { RitualScene } from "./ritual-scene";
import { SignatureScene } from "./signature-scene";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          // Pin the container to the viewport
          pin: true,
          // Start the animation when the top of the trigger hits the top of the viewport
          start: "top top",
          // End the animation after scrolling 5000 pixels
          end: "+=5000",
          // Make the animation progress tied to the scrollbar
          scrub: 1,
        },
      });

      // --- Animation Timeline ---
      // This is a simple transition for now.
      // It fades out the InvocationScene completely over the first portion of the scroll.
      tl.to(".invocation-scene", {
        opacity: 0,
        duration: 1, // Duration is relative to the scrub timeline
      });

      // We'll add more animations here...
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      {/* 
        We use absolute positioning to stack scenes on top of each other.
        The timeline will control which one is visible.
      */}
      <div className="absolute inset-0">
        <InvocationScene className="invocation-scene" />
      </div>
      <div className="absolute inset-0 opacity-0">
        {/* The DefinitionScene starts invisible */}
        <DefinitionScene className="definition-scene" />
      </div>
      {/* The other scenes are here but invisible for now */}
      <div className="absolute inset-0 opacity-0">
        <AxiomsScene />
      </div>
      <div className="absolute inset-0 opacity-0">
        <RitualScene />
      </div>
      <div className="absolute inset-0 opacity-0">
        <SignatureScene />
      </div>
    </div>
  );
}