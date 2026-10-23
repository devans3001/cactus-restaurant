# Cactus Restaurant — Concept Website

A food-first concept site for **Cactus Restaurant**, 20/24 Ozumba Mbadiwe Ave, Victoria Island, Lagos — free showcase build #2 in the Lagos portfolio program (the business pays only for its domain; the ask in return is a follow and an honest review).

Concept: **COME HUNGRY** — the site opens on their own lamb chops, still steaming, and never lets the food leave the screen. Built almost entirely from Cactus's own photography: 21 posts harvested from their Instagram (@cactuslagos, 33.7K followers) plus the category photography and their real logo recovered from their menu site.

## The Scrolltide steal

The hero is a **scroll-scrubbed frame sequence**: their lamb-chops photograph was animated into a short locked-camera clip (steam rising, juices glistening), cut into 40 frames, and pinned to a canvas — on arrival the dish idles, breathing steam; once you scroll, your scroll *plays* the steam. Below it: a pinned "day at Cactus" journey (breakfast → grill → mains → the sweet finish, crossfading dishes), a pinned horizontal dish walk, real diner reviews, and the visit essentials. Minimal copy throughout — food carries the page.

## Honesty notes

- **Every photograph is Cactus's own** (Instagram + menus.ws assets). The only generated media is the *motion* — the hero clip was animated from their photograph; framing never moves.
- **Their real logo** (the teal CACTUS diamond) came from their own menu-site files (`images/logo.png` on cactus.menus.ws). The favicon is a small drawn echo of it.
- **Facts (verified Oct 23, 2026):** 4.4★ across ~6,700 Google reviews (Wanderlog aggregation); TripAdvisor #7 of 510 Lagos restaurants; hours 7:30am–10pm daily (Fri/Sat 10:30pm) from their Google listing; phones from their Instagram bio (Reservations 0807 377 7666 · Restaurant 0802 777 7666 · Bakery 0818 177 7666). Review quotes are short excerpts from public Google/TripAdvisor reviews.
- **The menu button links to their existing menu** (cactus.menus.ws) — an outside agency's static site with no CMS; a self-managed menu/ordering platform is a separate, later conversation, deliberately not part of this free build.

Stack: Next.js 15 · React 19 · Tailwind v4 · GSAP (reveals) · hand-rolled scroll engines for the hero/chapters/walk. Local dev: `PORT=3126 npm run start` after `npm run build`.

## v2 — rebuilt under the captivating-design skill (Oct 23, 2026)

v1 was rejected as generic (cream + serif + food in equal cards — the current AI cliché). v2 follows `~/workspace/custom-skills/captivating_web_design/SKILL.md`: reference anchors Dishoom (world-building) + Pizzeria Beddia (oversized process photography); direction **maximalist editorial**; spine **"THE LONG TABLE — one waterfront table, and the food never stops coming."** System: deep pine as structure, bone as breather, one saffron accent; Bricolage Grotesque + IBM Plex Mono (zero serif); grain skin over everything. Structure: frame-scrub hero with monumental type over the plate → edge-to-edge photo band with giant marquee type → full-bleed day chapters (the photos ARE the sections) → the Hits (poster-size dish names, one plate breaking the grid) → dish walk → a review quote at poster size → terrace + spec sheet. Passed the skill's audit loop at 390/1440 widths (mobile proof-line overflow + eyebrow contrast found and fixed).
