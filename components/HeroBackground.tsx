"use client";

import { useEffect, useState } from "react";

export default function HeroBackground() {
  const [particles, setParticles] = useState<{ id: number; top: string; left: string; size: number; delay: string; duration: string }[]>([]);

  useEffect(() => {
    // Generate particles only on client-side
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="hero-bg-container">
      {/* Animated SVG Energy Field */}
      <svg
        viewBox="0 0 1000 1000"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-rotate"
        style={{ filter: "blur(10px)" }}
      >
        <defs>
          <radialGradient id="ringGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#DA70D6" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#8A2BE2" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Accretion Disk Layers */}
        <circle cx="500" cy="500" r="450" fill="none" stroke="url(#ringGradient)" strokeWidth="1" strokeDasharray="50 150" opacity="0.3" />
        <circle cx="500" cy="500" r="400" fill="none" stroke="url(#ringGradient)" strokeWidth="2" strokeDasharray="100 100" opacity="0.5" />
        <circle cx="500" cy="500" r="350" fill="none" stroke="url(#ringGradient)" strokeWidth="1" strokeDasharray="200 50" opacity="0.4" />
        <circle cx="500" cy="500" r="300" fill="none" stroke="url(#ringGradient)" strokeWidth="3" opacity="0.6" className="animate-pulse-glow" />
        
        {/* Core Glow */}
        <circle cx="500" cy="500" r="200" fill="url(#coreGradient)" />
      </svg>

      {/* Floating Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `drift ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Subtle Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
    </div>
  );
}
