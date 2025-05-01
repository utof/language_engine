/**
 * This component does not render anything visible.
 * It sits in the layout and defines SVG filters that can be used by other
 * components via CSS. This is more efficient than defining the same filter
 * in multiple components.
 */
export function SVGFilters() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0">
      <defs>
        <filter id="liquid-distortion">
          {/* 
            feTurbulence creates a procedural noise pattern. 
            - baseFrequency controls the "zoom" level of the noise. Lower numbers are more zoomed in.
            - numOctaves adds layers of detail to the noise.
          */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.03"
            numOctaves="1"
            result="warp"
          />
          {/* 
            feDisplacementMap uses the noise from feTurbulence ("warp") to distort
            the source graphic (the text).
            - scale controls the intensity of the distortion. We will animate this value.
          */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="warp"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}