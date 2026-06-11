"use client";

import { useMemo, useEffect, useState } from "react";

interface Dot {
  x: number;
  y: number;
  r: number;
  delay: number;
}

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function buildDots(density: number): Dot[] {
  const arr: Dot[] = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < density; i++) {
    arr.push({
      x: rand() * 100,
      y: rand() * 100,
      r: rand() * 1.8 + 0.6,
      delay: rand() * 3,
    });
  }
  return arr;
}

function buildLines(dots: Dot[]): Line[] {
  const out: Line[] = [];
  let seed = 77;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 14 && rand() > 0.3) {
        out.push({ x1: dots[i].x, y1: dots[i].y, x2: dots[j].x, y2: dots[j].y });
      }
    }
  }
  return out.slice(0, 60);
}

interface Props {
  density?: number;
  color?: string;
  lineColor?: string;
  className?: string;
}

export default function Constellation({
  density = 40,
  color = "rgba(255,255,255,0.4)",
  lineColor = "rgba(255,255,255,0.08)",
  className = "",
}: Props) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const dots = useMemo(() => buildDots(density), [density]);
  const lines = useMemo(() => buildLines(dots), [dots]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {lines.map((l, i) => (
          <line
            key={`l${i}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={lineColor}
            strokeWidth="0.08"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {dots.map((d, i) => (
          <circle
            key={`d${i}`}
            cx={d.x}
            cy={d.y}
            r={d.r * 0.15}
            fill={color}
            style={
              reduced
                ? {}
                : {
                    animation: `twinkle 3s ease-in-out infinite`,
                    animationDelay: `${d.delay}s`,
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}
