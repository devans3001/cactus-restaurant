import { Chapters, DishWalk, Footer, Hits, Nav, PhotoBand, Reviews, Visit } from "@/components/Sections";
import FrameHero from "@/components/FrameHero";

/* Material grain — an SVG-noise skin over the whole page so flat colour
   never reads sterile. True to the subject: print, paper, a menu card. */
function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export default function Home() {
  return (
    <main className="bg-cocoa text-cream antialiased">
      <Grain />
      <Nav />
      <FrameHero />
      <PhotoBand />
      <Chapters />
      <Hits />
      <DishWalk />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}
