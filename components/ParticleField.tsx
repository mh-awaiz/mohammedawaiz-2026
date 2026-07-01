"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const COLORS = ["76,111,255", "139,92,246", "34,211,238"];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const reduceMotion = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;

    const density = 0.00009; // particles per px^2, tuned for perf
    const maxParticles = 110;

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      canvasEl.style.width = width + "px";
      canvasEl.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(maxParticles, Math.floor(width * height * density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function onMouseLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      const linkDist = 130;
      const mouseDist = 180;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // link to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.16;
            ctx!.strokeStyle = `rgba(${COLORS[(i + j) % COLORS.length]},${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }

        // link to mouse
        const mdx = p.x - mouse.current.x;
        const mdy = p.y - mouse.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouseDist) {
          const alpha = (1 - mdist / mouseDist) * 0.55;
          ctx!.strokeStyle = `rgba(139,92,246,${alpha})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(mouse.current.x, mouse.current.y);
          ctx!.stroke();
        }

        ctx!.fillStyle = `rgba(${COLORS[i % COLORS.length]},0.85)`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    if (!reduceMotion.current) {
      rafId = requestAnimationFrame(step);
    } else {
      // draw a single static frame
      step();
      cancelAnimationFrame(rafId);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
