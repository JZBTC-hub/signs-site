'use client'
import React from "react";
import { motion } from "framer-motion";

// ABOUT PAGE – SIGNS
// Drop this file in `app/about/page.tsx` (Next.js App Router) or `pages/about.tsx` (Pages Router)
// TailwindCSS required. No external UI libs used to keep it portable.
// Roadmap lightbox: a simple onClick handler is provided and will be wired up next.

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const roadmapSrc = "/images/roadmap.png"; // TODO: set your actual path

  // Preload roadmap on hover/touch to make the open feel instant
  const preloadRoadmap = React.useCallback(() => {
    const img = new Image();
    img.src = roadmapSrc;
  }, [roadmapSrc]);

  const openRoadmap = () => setIsLightboxOpen(true);
  const closeRoadmap = () => setIsLightboxOpen(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRoadmap();
    };
    if (isLightboxOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isLightboxOpen]);

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      {/* Hero / Vision */}
      <section className="relative overflow-hidden">
        <div
  className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/40 to-black"
  aria-hidden="true"
/>
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
          >
            When we make it, we won’t say a word.<br />
            But there will be <span className="text-yellow-500">Signs</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-3xl text-base md:text-lg text-zinc-300"
          >
            <span className="font-medium text-white">Signs</span> is more than a token — it’s a luxury club for the quietly elite, the ones who let the lifestyle do the talking. It’s where conviction meets culture, and where the patient write their stories in champagne and chrome.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8"
          >
            <button
              id="roadmap-trigger"
              onClick={openRoadmap}
              onMouseEnter={preloadRoadmap}
              onTouchStart={preloadRoadmap}
              className="rounded-2xl bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white hover:bg-white/15 active:bg-white/20 transition"
            >
              View our Roadmap →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ethos */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-white"
        >
          The Ethos — Why We Exist
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 text-zinc-300 max-w-3xl"
        >
          We’re building something that feels inevitable. A club whose value compounds with time and taste.
        </motion.p>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            { title: "Community", blurb: "A club for the few who truly get it." },
            { title: "Conviction", blurb: "Diamond hands, no apologies." },
            { title: "Building Wealth", blurb: "Strategically, relentlessly." },

          ].map((item) => (
            <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-medium">{item.title}</div>
              <div className="mt-1 text-sm text-zinc-300">{item.blurb}</div>
            </li>
          ))}
        </motion.ul>
      </section>

      {/* Culture */}
      <section className="mx-auto max-w-5xl px-6 pb-12 md:pb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-white"
        >
          The Culture
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 grid gap-4 md:grid-cols-3"
        >
          {[
            {
              title: "Meme Virality",
              text:
                "A phrase the whole internet repeats without knowing the source.",
            },
            {
              title: "Luxury Aesthetic",
              text: "Yacht energy, private-jet confidence.",
            },
            {
              title: "Quiet Conviction",
              text: "We don’t need to scream to be heard.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-white font-medium">{c.title}</div>
              <div className="mt-1 text-sm text-zinc-300">{c.text}</div>
            </div>
          ))}
        </motion.div>

      </section>

      {/* Team & History */}
      <section className="mx-auto max-w-5xl px-6 pb-12 md:pb-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-white"
        >
          Team & History
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white font-medium">Origins</div>
            <p className="mt-2 text-sm text-zinc-300">
              Founded <span className="text-white font-medium">July 16, 2024</span>, SIGNS began as a meme with potential. In
              <span className="text-white font-medium"> October 2024</span> the community took full control, setting the stage for something bigger.
              A rebrand in <span className="text-white font-medium">November 2024</span> unveiled the <span className="text-white font-medium">Club for Extravagant Degenerates</span> — wealth culture with degen humor.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white font-medium">Today</div>
            <p className="mt-2 text-sm text-zinc-300">
              SIGNS is run by a small, relentless core — traders, builders, and visionaries — united by one goal: to make this the most exclusive brand in crypto. We aim to provide so much value to holders that gambling on hollow memes stops being an option.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-zinc-300 space-y-1">
              <li>Conservative by noise, aggressive by execution.</li>
              <li>Presence online, progress in development, perks around the project.</li>
              <li>Quality over volume. Patience over hype.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">If you know, you know. If you don’t, there’s still time.</h3>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://x.com/signsmemecoin"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-zinc-200 transition"
            >
              Follow on X
            </a>
            <a
              href="https://discord.com/invite/Jv24XjkMyw"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Join the Club
            </a>
          </div>
        </motion.div>
      </section>
      {/* ROADMAP LIGHTBOX OVERLAY */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="SIGNS Roadmap"
          className="fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeRoadmap}
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative max-h-[92vh] max-w-[92vw]">
              <img
                src={roadmapSrc}
                alt="SIGNS illustrated roadmap"
                className="h-auto w-auto max-h-[92vh] max-w-[92vw] rounded-xl shadow-2xl"
                draggable={false}
              />

              {/* Close button */}
              <button
                onClick={closeRoadmap}
                className="absolute -right-3 -top-3 rounded-full bg-white text-black px-3 py-2 text-xs font-semibold shadow-lg hover:bg-zinc-200 focus:outline-none"
                aria-label="Close roadmap"
              >
                ESC ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
