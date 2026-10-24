"use client";

import { useEffect, useRef } from "react";
import { FRAMES } from "@/lib/frames";
import { business } from "@/lib/data";

/* THE FRAME-SEQUENCE HERO — the Scrolltide mechanic, with real food.
   The lamb chops were photographed by Cactus, animated into a short
   steaming clip, and cut into 40 frames. On arrival the dish idles,
   breathing steam; the moment you scroll, your scroll scrubs the
   frames — you play the steam yourself. Nothing here is a model or a
   stock shot: it's their signature plate, alive. */
export default function FrameHero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgs: HTMLImageElement[] = FRAMES.map((src) => {
      const im = new Image();
      im.src = src;
      return im;
    });

    let W = 0;
    let H = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.width = Math.round(window.innerWidth * dpr);
      H = canvas.height = Math.round(window.innerHeight * dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (idx: number) => {
      const im = imgs[Math.max(0, Math.min(imgs.length - 1, idx))];
      if (!im || !im.complete || im.naturalWidth === 0) return;
      const scale = Math.max(W / im.naturalWidth, H / im.naturalHeight) * 1.02;
      const w = im.naturalWidth * scale;
      const h = im.naturalHeight * scale;
      ctx.drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
    };

    let raf = 0;
    let cur = 0;
    let scrolled = false;
    const start = performance.now();
    const frame = (now: number) => {
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      if (p > 0.004) scrolled = true;

      let target: number;
      if (!scrolled) {
        // idle: the dish breathes — ping-pong the steam until first scroll
        const t = ((now - start) / 1000) * 7;
        const cycle = (FRAMES.length - 1) * 2;
        const m = t % cycle;
        target = m < FRAMES.length ? m : cycle - m;
      } else {
        target = p * (FRAMES.length - 1);
      }
      cur += (target - cur) * 0.14;
      draw(Math.round(cur));

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(Math.max(0, 1 - p * 2.4));
        overlayRef.current.style.transform = `translateY(${p * -36}px)`;
      }
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (hintRef.current) hintRef.current.style.opacity = p > 0.12 || !scrolled ? (scrolled ? "0" : "1") : "1";

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="top" ref={wrapRef} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-cocoa">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-cocoa/30" />

        {/* rotated metadata, left edge */}
        <div className="absolute top-1/2 left-4 hidden -translate-y-1/2 -rotate-90 lg:block">
          <p className="font-mono text-[11px] tracking-[0.35em] whitespace-nowrap text-cream/60">
            20/24 OZUMBA MBADIWE AVE — VICTORIA ISLAND — EST. ON THE WATER
          </p>
        </div>
        {/* rotated metadata, right edge */}
        <div className="absolute top-1/2 right-4 hidden -translate-y-1/2 rotate-90 lg:block">
          <p className="font-mono text-[11px] tracking-[0.35em] whitespace-nowrap text-cream/60">
            OPEN 07:30 — 22:00 · FRI & SAT 22:30
          </p>
        </div>

        {/* proof, top right */}
        <div className="absolute top-24 right-5 text-right sm:right-8">
          <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-cream/90 [text-shadow:_0_1px_10px_rgb(0_0_0/50%)] sm:text-xs">
            <span className="sm:hidden">★ 4.4 — {business.reviewCount} GOOGLE REVIEWS</span>
            <span className="hidden sm:inline">★ 4.4 — {business.reviewCount} GOOGLE REVIEWS — TRIPADVISOR #7 IN LAGOS</span>
          </p>
        </div>

        {/* the headline — type as the image, over their plate */}
        <div ref={overlayRef} className="absolute inset-x-0 bottom-0 will-change-transform">
          <div className="max-w-[110rem] mx-auto px-5 sm:px-8 pb-14 sm:pb-16">
            <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay-2 [text-shadow:_0_1px_12px_rgb(0_0_0/55%)] sm:text-xs">
              CACTUS — ONE LONG TABLE, ALL DAY
            </p>
            <h1 className="mt-3 font-display leading-[0.78] font-extrabold tracking-tight text-cream uppercase">
              <span className="block text-[21vw] sm:text-[13.5rem]">Come</span>
              <span className="block text-[21vw] text-clay-2 sm:text-[13.5rem]">hungry.</span>
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={business.phoneHref}
                className="inline-flex min-h-[52px] items-center rounded-full bg-clay-2 px-7 py-4 font-bold text-cocoa transition-transform hover:scale-[1.03]"
              >
                Call to reserve →
              </a>
              <a
                href={business.menuUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center rounded-full border-2 border-cream/35 bg-white/5 px-7 py-4 font-bold text-cream backdrop-blur transition-colors hover:border-clay-2 hover:text-clay-2"
              >
                See the menu ↗
              </a>
              <p className="font-mono text-[11px] tracking-[0.2em] text-cream/70 sm:text-xs">
                BAKERY AT DAWN — GRILL BY NOON — GELATO AT DUSK
              </p>
            </div>
          </div>
        </div>

        {/* scroll cue — an animated pill nobody can miss */}
        <div
          ref={hintRef}
          className="absolute inset-x-0 bottom-2.5 flex items-center justify-center gap-3 transition-opacity duration-500"
        >
          <span className="flex h-9 w-[22px] justify-center rounded-full border-2 border-cream/70 pt-1.5">
            <span className="animate-scrollcue h-2 w-1 rounded-full bg-clay-2" />
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-[0.35em] text-cream/85 uppercase [text-shadow:_0_1px_10px_rgb(0_0_0/60%)]">
            Scroll — the feast continues
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-cream/15">
          <div ref={barRef} className="h-full w-full origin-left bg-clay-2" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
}
