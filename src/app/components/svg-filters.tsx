export function SVGFilters() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter id="liquid-distortion">
          <feTurbulence
            // Add an ID to the turbulence element
            id="liquid-turbulence"
            type="fractalNoise"
            baseFrequency="0.01 0.03"
            numOctaves="1"
            result="warp"
          />
          <feDisplacementMap
            // Add an ID to the displacement map element
            id="liquid-displacement"
            in="SourceGraphic"
            in2="warp"
            scale="20" // The initial scale
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
