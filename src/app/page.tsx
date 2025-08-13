"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * $SIGNS — Home Page
 * Minimal luxury tone with cultural proof strip and concise value props.
 *
 * How to use:
 * 1) Place this file at: app/page.tsx (App Router) or pages/index.tsx (Pages Router)
 * 2) Add your screenshots under /public/proof/*.jpg|png and update `proofItems` below.
 * 3) Set your contract address + links in the CONFIG block.
 * 4) TailwindCSS recommended. Works vanilla too but classes assume Tailwind.
 */

// =============================
// CONFIG — UPDATE THESE VALUES
// =============================
const CONFIG = {
  CONTRACT_ADDRESS: "GUxKzvR7QmvA5M5j2LufNynVMa6hxjWkERDM7Vnpvvii",
  RAYDIUM_URL: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in&inputMint=sol&outputMint=GUxKzvR7QmvA5M5j2LufNynVMa6hxjWkERDM7Vnpvvii", // replace with your Raydium link
  HOW_TO_BUY_LINK: "/resources/how-to-buy", // adjust to your actual route
  LINKS: {
    X: "https://x.com/signsmemecoin",
    X_COMMUNITY: "https://x.com/i/communities/1846857972456243231",
    TELEGRAM: "https://t.me/signsmemecoin",
    DISCORD: "https://discord.gg/Jv24XjkMyw",
    MEMBERS: "/members",
    RESOURCES: "/resources",
    CULTURE: "/culture",
    SPOTLIGHT: "/resources/meditations/week-15", // example spotlight link
  },
};

// Proof-of-Narrative screenshots — add your images + source links
// Put files in /public/proof/
const proofItems: { src: string; alt: string; href?: string }[] = [
  { src: "/proof/becker.png", alt: "Alex Becker post using 'there will be signs'", href: "https://x.com/ZssBecker/status/1951200421617312016" },
  { src: "/proof/beefy.png", alt: "Beefy.com post referencing the phrase", href: "https://x.com/beefyfinance/status/1954892693726785589" },
  { src: "/proof/brains.png", alt: "Brains of web3 social post using the phrase", href: "https://x.com/Brainsofweb3/status/1883143810018148642" },
  { src: "/proof/cryptocom.png", alt: "Crypto.com post with the phrase", href: "https://x.com/cryptocom/status/1885659379929616745" },
  { src: "/proof/gordon.png", alt: "Altcoin Gordon's meme with the phrase", href: "https://x.com/AltcoinGordon/status/1928503925713277073" },
  { src: "/proof/jeremy.png", alt: "Jeremy's post using 'there will be signs'", href: "https://x.com/Jeremyybtc/status/1885731879724400941" },
  { src: "/proof/lark.png", alt: "Lark Davis' post referencing the phrase", href: "https://x.com/TheCryptoLark/status/1955357704945373647" },
  { src: "/proof/lynk.png", alt: "Lynk's social post using the phrase", href: "https://x.com/lynk0x/status/1917162443937366458" },
  { src: "/proof/mistor.png", alt: "Mistor SOL's post with the phrase", href: "https://x.com/mistooor/status/1916160844808802383" },
  { src: "/proof/naiive.png", alt: "Naiive meme using the phrase", href: "https://x.com/naiivememe/status/1937596589477912953" },
  { src: "/proof/shadow.png", alt: "Shadow's post using 'there will be signs'", href: "https://x.com/_Shadow36/status/1829375576819327441" },
  { src: "/proof/solstice.png", alt: "Solstice's post referencing the phrase", href: "https://x.com/The__Solstice/status/1851377975746572740" },
  { src: "/proof/sweep.png", alt: "Sweep's social post using the phrase", href: "https://x.com/0xSweep/status/1938721789934522597" },
  { src: "/proof/uphold.png", alt: "Uphold's post with the phrase", href: "https://x.com/UpholdInc/status/1954714005072756964" },
  { src: "/proof/wizard.png", alt: "Wizards meme with the phrase", href: "https://x.com/CryptoWizardd/status/1955366725995860418" },
  
  
  // Add more…
];

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Hero />
        <ProofStrip />
        <ValueCards />
        <Spotlight />
        <BuyModule />
        <SocialCTA />
        <Footer />
      </div>
    </main>
  );
}

// ------------------------------
// Shared tiny components / styles
// ------------------------------
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
      {children}
    </div>
  );
}

function Button(
  props: React.ComponentProps<typeof Link> & { variant?: "solid" | "ghost" }
) {
  const { className = "", variant = "solid", children, ...rest } = props;
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm transition-colors";
  const styles =
    variant === "solid"
      ? "bg-neutral-100 text-neutral-950 hover:bg-white"
      : "border border-neutral-800 text-neutral-100 hover:border-neutral-700";
  return (
    <Link className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

// -------
// HERO
// -------
function Hero() {
  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl/tight sm:text-5xl/tight md:text-6xl/tight font-medium">
          Quiet <span className="text-primary">Money</span>.
          <div></div>
          Loud <span className="text-primary">Signals</span>.
        </h1>
        <p className="mt-5 text-base/7 text-neutral-300">
          For the ones who make it and let the signs do the talking.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={CONFIG.LINKS.MEMBERS}>Enter Members</Button>
          <Button variant="ghost" href={CONFIG.LINKS.RESOURCES}>
            Explore Resources
          </Button>
        </div>
      </div>
    </section>
  );
}

// -------------------------
// PROOF-OF-NARRATIVE STRIP
// -------------------------
function ProofStrip() {
  return (
    <section className="py-12 border-y border-neutral-900">
      <SectionLabel>We’ve been hearing things</SectionLabel>
      <p className="mb-5 text-sm text-neutral-400">
        The phrase found the culture first. We made it a home.
      </p>
      <div className="relative overflow-hidden">
        {/* Marquee */}
        <div className="marquee group">
          <div className="track group-hover:[animation-play-state:paused]">
            {[...proofItems, ...proofItems].map((item, i) => (
              <CardShot key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        .marquee { position: relative; }
        .track {
          display: flex;
          gap: 50px;
          width: max-content;
          animation: scroll 50s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function CardShot({ item }: { item: { src: string; alt: string; href?: string } }) {
  const frame = (
    <div
      className="
        relative shrink-0 rounded-2xl border border-neutral-800
        bg-black                                   /* <- solid black frame */
        h-[24rem] w-[22rem] sm:h-[28rem] sm:w-[24rem]
        p-3 overflow-hidden
      "
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-contain bg-black"        /* <- black behind image */
        sizes="(max-width: 640px) 80vw, 384px"
      />
    </div>
  );

  return item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label="View original post.">
      {frame}
    </a>
  ) : frame;
}

// --------------
// VALUE CARDS 3up
// --------------
function ValueCards() {
  const data = [
    {
      title: "Members Only",
      blurb: "Holder‑only rooms, sharper edges, better moves.",
      micro: "Access is a filter. We keep it that way.",
      href: CONFIG.LINKS.MEMBERS,
    },
    {
      title: "Resources",
      blurb: "Official links for all things Signs.",
      micro: "Looking for the signal?",
      href: CONFIG.LINKS.RESOURCES,
    },
    {
      title: "Culture",
      blurb: "The phrase became a mirror. Make it yours.",
      micro: "Meme Generator + gallery.",
      href: CONFIG.LINKS.CULTURE,
    },
  ];

  return (
    <section className="py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((card, i) => (
          <Link
            key={i}
            href={card.href}
            className="group rounded-3xl border border-neutral-900 bg-neutral-950 p-6 transition hover:border-neutral-700"
          >
            <div className="text-lg font-medium">{card.title}</div>
            <p className="mt-2 text-sm text-neutral-300">{card.blurb}</p>
            <div className="mt-6 text-xs text-neutral-500">{card.micro}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ----------
// SPOTLIGHT
// ----------

function Spotlight() {
  const [yt, setYt] = useState<{ id?: string; title?: string; link?: string } | null>(null);

  useEffect(() => {
    fetch("/api/latest-yt")
      .then(r => r.json())
      .then(setYt)
      .catch(() => setYt(null));
  }, []);

  const videoSrc = yt?.id ? `https://www.youtube.com/embed/${yt.id}?rel=0&modestbranding=1` : null;
  const href = yt?.link || "https://youtube.com/@<your-handle>"; // fallback if RSS fails

  return (
    <section className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">Weekly Spotlight</h3>
          <p className="mt-2 text-neutral-300">
            {yt?.title || "This week’s meditation: inevitability, alignment, and quiet certainty."}
          </p>
          <div className="mt-6">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Enter Session
            </a>
          </div>
        </div>

        {/* Responsive 16:9 embed */}
        <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-black pt-[56.25%]">
          {videoSrc ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={videoSrc}
              title={yt?.title || "Latest session"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-neutral-500 text-sm">
              Latest video will appear here.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ----------
// BUY MODULE
// ----------
function BuyModule() {
  const [copied, setCopied] = useState(false);

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="py-16">
      <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">Contract Address</div>
            <div className="mt-1 font-mono text-sm text-neutral-200 break-all">
              {CONFIG.CONTRACT_ADDRESS}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={copyCA}
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-800 px-4 py-2 text-sm text-neutral-100 hover:border-neutral-700"
              aria-live="polite"
            >
              {copied ? "Copied" : "Copy"}
            </button>
            <a
              href={CONFIG.RAYDIUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-100 px-4 py-2 text-sm text-neutral-950 hover:bg-white"
            >
              Buy on Raydium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------
// SOCIAL & JOIN
// --------------
function SocialCTA() {
  return (
    <section className="py-16">
      <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-6 sm:p-8">
        <h3 className="text-2xl font-medium">Join the Club</h3>
        <p className="mt-2 text-sm text-neutral-300">See you on the inside</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={CONFIG.LINKS.X} target="_blank">Follow on X</Button>
          <Button variant="ghost" href={CONFIG.LINKS.X_COMMUNITY} target="_blank">
            Join the X Community
          </Button>
          <Button variant="ghost" href={CONFIG.LINKS.TELEGRAM} target="_blank">
            Telegram
          </Button>
          <Button variant="ghost" href={CONFIG.LINKS.DISCORD} target="_blank">
            Enter Discord (Holders)
          </Button>
        </div>
      </div>
    </section>
  );
}

// -------
// FOOTER
// -------
function Footer() {
  return (
    <footer className="py-12 text-xs text-neutral-500">
      <div className="border-t border-neutral-900 pt-6">
        No financial advice. Just culture. DYOR.
      </div>
    </footer>
  );
}
