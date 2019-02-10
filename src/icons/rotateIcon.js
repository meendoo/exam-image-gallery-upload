// SVG made by Xinh Studio - https://thenounproject.com/search/?q=rotate&i=217348

import React from "react";

export default function RotateIcon({
  width,
  height,
  fill,
  className,
  right,
  onClick
}) {
  return (
    <svg
      height={height || "40px"}
      width={width || "40px"}
      className={className || ""}
      viewBox="0 0 22 22"
      x="0px"
      y="0px"
      onClick={onClick}
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={right && "scale(-1, 1) translate(-22, 0)"}
      >
        <g
          transform="translate(-66.000000, -241.000000)"
          fill={fill || "#000000"}
        >
          <path d="M80.3117466,244.018853 C83.8230291,244.190999 84.8848714,245.549958 84.9891498,248.421411 C84.999988,248.719856 85.0021973,248.961822 85.0021973,249.5 L85.0021973,250 L86.0021973,250 L86.0021973,249.5 C86.0021973,248.949758 85.9999138,248.699659 85.988491,248.385119 C85.8654297,244.99645 84.4118231,243.209164 80.2755879,243.017305 L81.2071068,242.085786 L80.5,241.37868 L78.3786797,243.5 L80.5,245.62132 L81.2071068,244.914214 L80.3117466,244.018853 Z M68,247 L82,247 L82,261 L68,261 L68,247 Z M69,248 L81,248 L81,260 L69,260 L69,248 Z" />
        </g>
      </g>
    </svg>
  );
}
