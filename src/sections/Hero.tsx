"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { label: "Contacto", href: "#contacto" },
];
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 28;
    const nodes: {
      x: number; y: number; vx: number; vy: number;
      r: number; pulse: number; pulseSpeed: number;
    }[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 3 + 2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }

    let raf: number;
    const CONNECT_DIST = 160;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = 0.4 + 0.4 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.35 + glow * 0.35})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0c254a]">

      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(30,80,140,0.55) 0%, transparent 70%)",
        }}
      />

      {/* Animated network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
        {/* Headline */}
        <h1
          className="font-bold leading-[1.08] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
        >
          Tu operación,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #7FBFFF 0%, #4D9FFF 50%, #A5D0FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            automatizada
          </span>
          {" "}en tiempo real
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Cobent es el núcleo central que conecta tus sistemas, procesa
          cada evento del negocio y ejecuta acciones automáticas sin
          intervención constante.
        </p>

        {/* Secondary descriptor */}
        <p
          className="text-sm mb-12 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "0.01em" }}
        >
          Diseñado para restaurantes, logística y retail con alta carga operativa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href={"#contacto"}
            className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "#2C6FFF",
              color: "#fff",
              boxShadow: "0 0 0 1px rgba(44,111,255,0.5), 0 4px 24px rgba(44,111,255,0.35)",
            }}
          >
            Agendar demo
          </Link>
        </div>
      </div>

      {/* Social proof strip at absolute bottom */}
      <div
        className="absolute bottom-12 left-0 right-0 z-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-6"
        style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", letterSpacing: "0.08em" }}
      >
        {["Integración en tiempo real", "Sin código requerido", "Escalable por diseño"].map((label, i) => (
          <span key={i} className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.3)" }}
            />
            {label}
          </span>
        ))}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(12,37,74,0.8), transparent)" }}
      />
    </section>
  );
}