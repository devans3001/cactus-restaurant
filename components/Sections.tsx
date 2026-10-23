"use client";

import { useEffect, useRef, useState } from "react";
import { bandPhotos, business, chapters, hits, reviews, visitPhotos, walk } from "@/lib/data";
import { LOGO, SANDWICH } from "@/lib/photos";
import { Reveal } from "./ui";

/* --------------------------------- NAV -------------------------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-[110rem] items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#top"
          className={`flex items-center gap-3 rounded-full py-1.5 pr-5 pl-1.5 transition-all duration-500 ${
            scrolled ? "bg-cream/95 shadow-lg shadow-cocoa/20 backdrop-blur" : ""
          }`}
          aria-label="Cactus Restaurant — home"
        >
          <img src={LOGO} alt="Cactus logo" className="h-11 w-11 object-contain drop-shadow" />
          <span className={`font-display text-xl font-extrabold tracking-[0.14em] ${scrolled ? "text-cocoa" : "text-cream"}`}>
            CACTUS
          </span>
        </a>
        <nav
          className={`hidden items-center gap-7 rounded-full px-6 py-2.5 font-mono text-xs font-semibold tracking-[0.15em] transition-all duration-500 md:flex ${
            scrolled ? "bg-cream/95 text-cocoa shadow-lg shadow-cocoa/20 backdrop-blur" : "text-cream"
          }`}
        >
          <a href="#chapters" className="hover:text-clay-2">THE DAY</a>
          <a href="#hits" className="hover:text-clay-2">THE HITS</a>
          <a href="#walk" className="hover:text-clay-2">THE FOOD</a>
          <a href="#voices" className="hover:text-clay-2">REVIEWS</a>
          <a href="#visit" className="hover:text-clay-2">FIND US</a>
        </nav>
        <a
          href={business.phoneHref}
          className="rounded-full bg-clay-2 px-5 py-2.5 text-sm font-bold text-cocoa shadow-lg shadow-cocoa/30 transition-transform hover:scale-[1.04]"
        >
          Reserve — {business.phoneDisplay}
        </a>
      </div>
    </header>
  );
}

/* ------------------------------ PHOTO BAND ---------------------------- */
/* Edge-to-edge food, edge-to-edge type: the table makes its promise. */
export function PhotoBand() {
  const words = ["COME HUNGRY", "EAT WELL", "SAVE ROOM FOR GELATO"];
  return (
    <section className="relative flex h-[52vh] overflow-hidden">
      {bandPhotos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`h-full object-cover ${i === 1 ? "hidden flex-1 sm:block" : "flex-1"} ${i === 2 ? "hidden flex-1 md:block" : ""}`}
        />
      ))}
      <div className="absolute inset-0 bg-cocoa/45" />
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="animate-marquee-fast flex w-max items-center whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center" aria-hidden={half === 1}>
              {words.concat(words).map((w, i) => (
                <span key={`${half}-${i}`} className="flex items-center">
                  <span
                    className={`font-display text-[13vw] leading-none font-extrabold tracking-tight uppercase sm:text-[7.5rem] ${
                      i % 2 === 0 ? "text-cream" : "text-outline-cream"
                    }`}
                  >
                    {w}
                  </span>
                  <span className="mx-6 text-4xl text-clay-2">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CHAPTERS ----------------------------- */
/* The day at Cactus — full-bleed chapters. The photos are the sections;
   type lands on top of them like a course landing on the table. */
export function Chapters() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      setActive(Math.min(chapters.length - 1, Math.round(p * (chapters.length - 1))));
      wrap.querySelectorAll<HTMLElement>("[data-chapter-img]").forEach((el, i) => {
        const f = p * (chapters.length - 1);
        const d = Math.abs(f - i);
        el.style.opacity = String(Math.max(0, 1 - d));
        el.style.transform = `scale(${1.08 - Math.min(0.08, d * 0.08)})`;
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const c = chapters[active];
  return (
    <section id="chapters" className="relative">
      <div ref={wrapRef} className="relative h-[420vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-cocoa">
          {chapters.map((ch, i) => (
            <img
              key={ch.id}
              data-chapter-img
              src={ch.img}
              alt={ch.alt}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/10 to-cocoa/35" />

          {/* chapter index, right edge */}
          <div className="absolute top-1/2 right-5 flex -translate-y-1/2 flex-col gap-4 sm:right-8">
            {chapters.map((ch, i) => (
              <span
                key={ch.id}
                className={`font-mono text-xs font-semibold tracking-[0.2em] transition-all duration-300 ${
                  active === i ? "scale-110 text-clay-2" : "text-cream/40"
                }`}
              >
                {ch.no}
              </span>
            ))}
          </div>

          {/* chapter words */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-[110rem] mx-auto px-5 pb-14 sm:px-8 sm:pb-16">
              <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay-2 sm:text-xs">
                CHAPTER {c.no} — {c.time} — ONE DAY AT CACTUS
              </p>
              <h2 className="mt-3 font-display text-[13.5vw] leading-[0.85] font-extrabold tracking-tight text-cream uppercase sm:text-[8.5rem]">
                {c.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream/90">{c.line}</p>
              <p className="mt-4 font-mono text-[11px] tracking-[0.25em] text-cream/60 sm:text-xs">{c.dishes}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- HITS ------------------------------- */
/* The breather chapter: bone, hairlines, and dish names at poster size —
   with one plate breaking the grid at an angle. */
export function Hits() {
  return (
    <section id="hits" className="relative overflow-hidden bg-cream py-24 text-cocoa sm:py-32">
      <div className="relative max-w-[110rem] mx-auto px-5 sm:px-8">
        <img
          src={SANDWICH}
          alt="The Cactus club sandwich with fries"
          className="absolute -top-4 right-4 hidden w-64 rotate-[5deg] shadow-2xl shadow-cocoa/30 lg:block xl:w-80"
        />
        <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay sm:text-xs">
          THE GREATEST HITS
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-6xl leading-[0.9] font-extrabold tracking-tight uppercase sm:text-8xl">
          Names Lagos <span className="text-clay">orders</span> by.
        </h2>

        <div className="mt-16">
          {hits.map((h) => (
            <div
              key={h.name}
              className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-cocoa/15 py-5 transition-all duration-300 last:border-b hover:pl-3"
            >
              <span className="font-display text-4xl font-bold tracking-tight uppercase transition-colors duration-300 group-hover:text-clay sm:text-6xl">
                {h.name}
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-cocoa/50 uppercase sm:text-xs">
                {h.tag}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] tracking-[0.2em] text-cocoa/60 sm:text-xs">
          THE FULL MENU — BREAKFAST · FOOD · DRINKS · WINE · SHISHA —{" "}
          <a href={business.menuUrl} target="_blank" rel="noreferrer" className="font-semibold text-clay underline underline-offset-4">
            LIVES HERE ↗
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- DISH WALK ---------------------------- */
export function DishWalk() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      const max = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translateX(${-p * max}px)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (hintRef.current) hintRef.current.style.opacity = p > 0.9 ? "0" : "1";
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="walk" className="relative bg-cocoa">
      <div className="max-w-[110rem] mx-auto px-5 pt-24 sm:px-8 sm:pt-28">
        <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay-2 sm:text-xs">THE FOOD</p>
        <h2 className="mt-4 font-display text-6xl leading-[0.9] font-extrabold tracking-tight text-cream uppercase sm:text-8xl">
          Eat with your <span className="text-clay-2">eyes</span> first.
        </h2>
      </div>
      <div ref={wrapRef} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div ref={trackRef} className="flex gap-8 px-5 will-change-transform sm:px-8">
            {walk.map((g, i) => (
              <figure key={g.label} className="w-[270px] shrink-0 sm:w-[340px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-bold text-cream">{g.label}</span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-cream/40">
                    {String(i + 1).padStart(2, "0")} / {String(walk.length).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
            <figure className="flex aspect-[3/4] w-[270px] shrink-0 items-center justify-center bg-clay sm:w-[340px]">
              <div className="px-8 text-center">
                <p className="font-display text-3xl font-extrabold text-cream uppercase">Still hungry?</p>
                <a
                  href={business.menuUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block rounded-full bg-clay-2 px-6 py-3.5 text-sm font-bold text-cocoa"
                >
                  See the full menu ↗
                </a>
              </div>
            </figure>
          </div>
          <div className="mx-5 mt-10 flex items-center gap-5 sm:mx-8">
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-cream/15">
              <div ref={barRef} className="h-full w-full origin-left rounded-full bg-clay-2" style={{ transform: "scaleX(0)" }} />
            </div>
            <span
              ref={hintRef}
              className="font-mono text-[11px] tracking-[0.25em] text-cream/50 uppercase transition-opacity duration-300"
            >
              Keep scrolling — more plates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- REVIEWS ------------------------------ */
export function Reviews() {
  const rest = [reviews[0], reviews[2], reviews[3], reviews[4]];
  return (
    <section id="voices" className="bg-cream py-24 text-cocoa sm:py-32">
      <div className="max-w-[110rem] mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay sm:text-xs">REVIEWS</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-cocoa/60 sm:text-xs">
            ★ {business.rating} — {business.reviewCount} GOOGLE REVIEWS — TRIPADVISOR {business.tripadvisorRank.toUpperCase()}
          </p>
        </div>

        <Reveal>
          <blockquote className="mt-10 font-display text-[9.5vw] leading-[0.95] font-extrabold tracking-tight uppercase sm:text-7xl lg:text-[5.6rem]">
            “{reviews[1].quote}”
          </blockquote>
          <p className="mt-5 font-mono text-[11px] tracking-[0.25em] text-clay uppercase">{reviews[1].source}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12">
          {rest.map((r, i) => (
            <Reveal
              key={r.source}
              delay={i * 0.05}
              className={
                i === 0
                  ? "md:col-span-5"
                  : i === 1
                    ? "md:col-span-7 md:pt-16"
                    : i === 2
                      ? "md:col-span-7"
                      : "md:col-span-5 md:pt-16"
              }
            >
              {i === 3 ? (
                <figure className="-rotate-1 bg-clay-2 p-8 shadow-xl shadow-cocoa/20">
                  <blockquote className="font-display text-2xl leading-snug font-bold">“{r.quote}”</blockquote>
                  <figcaption className="mt-5 font-mono text-[11px] tracking-[0.25em] uppercase">{r.source}</figcaption>
                </figure>
              ) : (
                <figure className="border-t-2 border-cocoa/70 pt-6">
                  <blockquote className="font-display text-2xl leading-snug font-semibold sm:text-[1.7rem]">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-4 font-mono text-[11px] tracking-[0.25em] text-clay uppercase">
                    {r.source}
                  </figcaption>
                </figure>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- VISIT ------------------------------- */
export function Visit() {
  return (
    <section id="visit" className="bg-cocoa">
      <div className="relative h-[72vh] overflow-hidden">
        <img src={visitPhotos[0].src} alt={visitPhotos[0].alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent" />
        <p className="absolute inset-x-0 bottom-6 text-center font-display text-[13vw] leading-none font-extrabold tracking-tight uppercase">
          <span className="text-outline-cream">On the</span> <span className="text-cream">water</span>
        </p>
        <p className="absolute top-6 left-5 font-mono text-[11px] tracking-[0.25em] text-cream/85 sm:left-8">
          THE TERRACE — LUNCH WITH THE LAGOON
        </p>
      </div>

      <div className="max-w-[110rem] mx-auto px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay-2">WHERE</p>
            <p className="mt-4 font-display text-3xl leading-tight font-bold text-cream sm:text-4xl">{business.address}</p>
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-clay-2 underline underline-offset-4">
              Open in Google Maps →
            </a>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <img src={visitPhotos[1].src} alt={visitPhotos[1].alt} className="aspect-[3/4] w-full object-cover" />
              <img src={visitPhotos[2].src} alt={visitPhotos[2].alt} className="mt-8 aspect-[3/4] w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay-2">WHEN</p>
            <p className="mt-4 font-display text-3xl leading-tight font-bold text-cream sm:text-4xl">{business.hours}</p>
            <p className="mt-4 leading-relaxed text-cream/70">
              Walk-ins welcome. Weekends fill up — reserve ahead, then take the terrace.
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold tracking-[0.35em] text-clay-2">CALL</p>
            <ul className="mt-4 space-y-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              <li>
                <span className="font-mono text-[11px] font-medium tracking-[0.25em] text-cream/50 uppercase">Reservations</span>
                <br />
                {business.phoneDisplay}
              </li>
              <li>
                <span className="font-mono text-[11px] font-medium tracking-[0.25em] text-cream/50 uppercase">Restaurant</span>
                <br />
                {business.restaurantPhone}
              </li>
              <li>
                <span className="font-mono text-[11px] font-medium tracking-[0.25em] text-cream/50 uppercase">Bakery</span>
                <br />
                {business.bakeryPhone}
              </li>
            </ul>
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-clay-2 px-7 py-4 font-bold text-cocoa transition-transform hover:scale-[1.03]"
            >
              Call to reserve →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FOOTER ------------------------------- */
export function Footer() {
  return (
    <footer className="overflow-hidden bg-[#081c17] pt-16 text-cream">
      <div className="max-w-[110rem] mx-auto px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <a href="#top" className="flex items-center gap-3" aria-label="Cactus Restaurant — back to top">
            <img src={LOGO} alt="Cactus logo" className="h-12 w-12 object-contain" />
            <span className="leading-none">
              <span className="block font-display text-[21px] font-extrabold tracking-[0.2em]">CACTUS</span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.4em] text-clay-2 uppercase">
                Restaurant · Bakery · Bar
              </span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-6 font-mono text-xs font-semibold tracking-[0.15em] text-cream/70">
            <a href="#chapters" className="hover:text-clay-2">THE DAY</a>
            <a href="#hits" className="hover:text-clay-2">THE HITS</a>
            <a href="#walk" className="hover:text-clay-2">THE FOOD</a>
            <a href="#voices" className="hover:text-clay-2">REVIEWS</a>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-clay-2">
              INSTAGRAM — {business.instagramFollowers}
            </a>
          </nav>
        </div>
        <p className="mt-12 border-t border-cream/10 pt-6 pb-2 text-xs text-cream/50">
          © 2026 {business.name} · {business.address} · Concept demo site built for {business.name} by Claro&amp;co
          Tech Solutions. Photography: Cactus Restaurant's own Instagram and menu site.
        </p>
      </div>
      <div aria-hidden className="pointer-events-none -mb-[4vw] text-center font-display text-[24vw] leading-[0.75] font-extrabold tracking-tight text-outline-cream uppercase opacity-30 select-none">
        Cactus
      </div>
    </footer>
  );
}
