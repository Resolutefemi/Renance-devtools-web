"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = (cv.width = window.innerWidth);
    let H = (cv.height = window.innerHeight);

    const handleResize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particles & Embers Logic
    const pts: any[] = [];
    for (let i = 0; i < 110; i++) {
      pts.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vy: -(0.1 + Math.random() * 0.45),
        vx: (Math.random() - 0.5) * 0.15,
        sz: 0.4 + Math.random() * 1.4,
        life: Math.random(),
        decay: 0.0015 + Math.random() * 0.003,
        ice: Math.random() < 0.12,
      });
    }

    const newEmber = () => {
      const cx = W / 2, cy = H * 0.38;
      const a = Math.random() * Math.PI * 2;
      const sp = 0.6 + Math.random() * 3;
      return {
        x: cx + (Math.random() - 0.5) * 80,
        y: cy + (Math.random() - 0.5) * 80,
        vx: Math.cos(a) * sp * 0.7,
        vy: Math.sin(a) * sp - 1.8,
        sz: 0.8 + Math.random() * 2.2,
        life: 1,
        decay: 0.008 + Math.random() * 0.02,
        col: Math.random() < 0.25 ? "#00CCFF" : Math.random() < 0.6 ? "#FF1A33" : "#FFD000",
      };
    };

    let embers = Array.from({ length: 28 }, newEmber);

    const drawGrid = () => {
      const vx = W / 2, vy = H * 0.62;
      const LINES = 24;
      const spread = W * 1.2;
      ctx.save();
      for (let i = 0; i < LINES; i++) {
        const t = i / (LINES - 1);
        const bx = -spread / 2 + t * spread;
        const alpha = 0.025 + (1 - Math.abs(t - 0.5) * 2) * 0.01;
        ctx.strokeStyle = `rgba(180,0,20,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(vx, vy); ctx.lineTo(bx, H); ctx.stroke();
      }
      const HLINES = 14;
      for (let j = 1; j <= HLINES; j++) {
        const t = j / HLINES;
        const py = vy + (H - vy) * Math.pow(t, 1.5);
        const hw = (spread / 2) * t;
        const alpha = 0.018 * t;
        ctx.strokeStyle = `rgba(180,0,20,${alpha})`;
        ctx.beginPath(); ctx.moveTo(vx - hw, py); ctx.lineTo(vx + hw, py); ctx.stroke();
      }
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#04030A";
      ctx.fillRect(0, 0, W, H);

      const cx = W / 2, cy = H * 0.38;
      const gr = ctx.createRadialGradient(cx, cy, 20, cx, cy, W * 0.55);
      gr.addColorStop(0, "rgba(160,0,20,0.18)");
      gr.addColorStop(0.3, "rgba(120,0,15,0.10)");
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);

      const fg = ctx.createRadialGradient(cx, H * 0.68, 0, cx, H * 0.68, W * 0.35);
      fg.addColorStop(0, "rgba(140,0,18,0.12)");
      fg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = fg; ctx.fillRect(0, 0, W, H);

      drawGrid();

      const vg = ctx.createRadialGradient(cx, H / 2, H * 0.15, cx, H / 2, W * 0.75);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(1, "rgba(0,0,0,0.72)");
      ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);

      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        if (p.life <= 0 || p.y < -5) {
          p.x = Math.random() * W; p.y = H + 5;
          p.life = 0.6 + Math.random() * 0.4;
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        const col = p.ice ? `rgba(0,200,255,` : `rgba(200,0,25,`;
        ctx.fillStyle = col + p.life + ")";
        ctx.fill();
      });

      embers.forEach((e, i) => {
        e.x += e.vx; e.y += e.vy; e.vy += 0.035; e.life -= e.decay;
        if (e.life <= 0) embers[i] = newEmber();
        ctx.save();
        ctx.globalAlpha = e.life * e.life;
        ctx.shadowColor = e.col; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(e.x, e.y, e.sz * e.life, 0, Math.PI * 2);
        ctx.fillStyle = e.col; ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(loop);
    };

    loop();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#04030A]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* Corner marks */}
      <div className="absolute inset-7 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary-crimson/40 animate-pulse" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary-crimson/40 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary-crimson/40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary-crimson/40 animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-0">
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Orbit rings */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary-crimson/20 animate-spin-slow" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-secondary-blue/10 animate-spin-reverse-slow" />

          {/* Logo SVG (The Legendary R) */}
          <svg className="relative z-20 drop-shadow-[0_0_30px_rgba(200,0,30,1)]" width="240" height="270" viewBox="0 0 210 235" fill="none">
            <defs>
              <linearGradient id="RG" x1="12" y1="8" x2="192" y2="225" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF9090" />
                <stop offset="18%" stopColor="#FF2040" />
                <stop offset="50%" stopColor="#CC001E" />
                <stop offset="82%" stopColor="#8B0010" />
                <stop offset="100%" stopColor="#500008" />
              </linearGradient>
              <linearGradient id="BG" x1="76" y1="132" x2="192" y2="225" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF2040" />
                <stop offset="100%" stopColor="#3A0006" />
              </linearGradient>
              <linearGradient id="ICE" x1="76" y1="132" x2="192" y2="225" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00EAFF" />
                <stop offset="55%" stopColor="#00EAFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00EAFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="12" y="8" width="33" height="207" fill="url(#RG)" />
            <path d="M 45 8 L 128 8 L 168 46 L 168 97 L 128 132 L 45 132 Z" fill="url(#RG)" />
            <path d="M 45 36 L 108 36 L 140 62 L 140 88 L 108 114 L 45 114 Z" fill="#04030A" />
            <path d="M 76 132 L 192 225 L 177 225 L 45 132 Z" fill="url(#BG)" />
            <line x1="76" y1="132" x2="192" y2="225" stroke="url(#ICE)" strokeWidth="1.8" />
            <circle cx="76" cy="132" r="5" fill="#FF2040">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </motion.div>

        {/* Wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.2, 1, 0.4, 1] }}
          className="mt-3 text-center"
        >
          <div className="text-5xl md:text-7xl font-black tracking-[0.28em] text-white flex justify-center">
            <span className="text-primary-crimson drop-shadow-[0_0_20px_rgba(200,0,30,0.9)]">R</span>
            <span className="drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">ENANCE</span>
          </div>
          <div className="h-0.5 mt-2 bg-gradient-to-r from-transparent via-primary-crimson to-transparent" />
          <p className="mt-4 text-[11px] md:text-sm tracking-[0.65em] text-white/20 uppercase">
            REDEFINE <span className="text-secondary-blue/60 font-light">EVERYTHING</span>
          </p>
        </motion.div>
      </div>

      {/* Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="fixed bottom-7 flex gap-6 items-center z-10"
      >
        <span className="text-[10px] tracking-[0.35em] text-white/10 uppercase">SHELL v1.0</span>
        <div className="w-1 h-1 rounded-full bg-primary-crimson shadow-[0_0_8px_#CC001E] animate-pulse" />
        <span className="text-[10px] tracking-[0.35em] text-white/10 uppercase">THE PLATFORM</span>
        <div className="w-1 h-1 rounded-full bg-primary-crimson shadow-[0_0_8px_#CC001E] animate-pulse" />
        <span className="text-[10px] tracking-[0.35em] text-white/10 uppercase">EST. 2025</span>
      </motion.div>
    </div>
  );
};

export default Logo;
