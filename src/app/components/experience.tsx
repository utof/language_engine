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
      // Target the filter elements once
      const displacement = document.getElementById("liquid-displacement");
      const turbulence = document.getElementById("liquid-turbulence");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          start: "top top",
          end: "+=11000",
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

      // --- Scene 2: Definition Animations ---
      const definitionTl = gsap.timeline();
      tl.add(definitionTl, "<1");

      // Animate the subtitle typing
      definitionTl.from(".definition-scene .subtitle", {
        text: "",
        duration: 3,
        ease: "none",
      });

      // **FILTER ANIMATION: Increase distortion intensity as the title splits**
      definitionTl.to(
        displacement,
        { attr: { scale: 100 } }, // Increase scale to 100 for a strong pull
        "+=0.5" // Start this slightly after typing finishes
      );
      // **FILTER ANIMATION: Animate the noise pattern for a "boiling" effect**
      definitionTl.to(
        turbulence,
        { attr: { baseFrequency: "0.04 0.08" } }, // Change the noise frequency
        "<" // Do this at the same time
      );

      // Animate the title splitting apart
      definitionTl.to(
        ".definition-scene .title-part-1",
        { yPercent: -150, autoAlpha: 0 },
        "<"
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

      // **FILTER ANIMATION: Reset the filter to 0 as the scene fades out**
      definitionTl.to(displacement, { attr: { scale: 0 } }, "<");

      // --- Scene 2 -> 3: Definition to Axioms ---
      tl.to(".definition-scene-container", { opacity: 0, duration: 2 });
      tl.fromTo(
        ".axioms-scene-container",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<"
      );

      const axiomsTl = gsap.timeline();
      tl.add(axiomsTl, "<1");
      axiomsTl.to(".axiom-letter", {
        stagger: { each: 0.05, from: "random" },
        x: () => `+=${gsap.utils.random(200, 400)}`,
        y: () => `+=${gsap.utils.random(-100, 100)}`,
        opacity: 0,
        scale: 0,
        duration: 5,
        ease: "power2.in",
      });
      axiomsTl.to(
        ".axioms-scene-container .text-3xl",
        { opacity: 0, duration: 2 },
        "<"
      );

      // --- Scene 3 -> 4: Axioms to Ritual ---
      tl.to(".axioms-scene-container", { opacity: 0, duration: 2 });
      tl.fromTo(
        ".ritual-scene-container",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<"
      );

      const ritualTl = gsap.timeline();
      tl.add(ritualTl, "<1");
      ritualTl.to(".ritual-line", {
        letterSpacing: "0.15em",
        fontWeight: 200,
        yoyo: true,
        repeat: 1,
        duration: 4,
        stagger: 0.5,
        ease: "power2.inOut",
      });

      // --- Scene 4 -> 5: Ritual to Signature ---
      tl.to(".ritual-scene-container", { opacity: 0, duration: 2 });
      tl.fromTo(
        ".signature-scene-container",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        "<"
      );
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
      <div className="absolute inset-0 opacity-0 ritual-scene-container">
        <RitualScene />
      </div>
      <div className="absolute inset-0 opacity-0 signature-scene-container">
        <SignatureScene />
      </div>
    </div>
  );
}