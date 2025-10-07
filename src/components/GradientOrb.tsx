"use client";

import { useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface GradientOrbProps {
  className?: string;
}

export default function GradientOrb({ className }: GradientOrbProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-full bg-black ${className ?? ""}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <svg className="absolute inset-0 h-0 w-0">
        <defs>
          <filter id="orb-glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="orb-gooey" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#ff714a", "#d9b9e7", "#4f74b3", "#2c3f6f", "#b6bbc9"]}
        speed={isActive ? 0.5 : 0.3}
        backgroundColor="#d9cedf"
      />
      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-60"
        colors={["#ff714a", "#d9b9e7", "#4f74b3", "#b6bbc9"]}
        speed={isActive ? 0.35 : 0.2}
        wireframe
        backgroundColor="transparent"
      />

      <div className="relative h-full w-full bg-gradient-to-b from-white/10 via-transparent to-white/20 mix-blend-screen" />
    </div>
  );
}
