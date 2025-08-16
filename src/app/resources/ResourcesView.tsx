// src/app/resources/ResourcesView.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Coins, ExternalLink, Layers, LinkIcon,
  Lock, ShieldAlert, ShieldCheck, Wallet
} from "lucide-react";

// Use RELATIVE imports (avoids alias issues on Vercel)
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

import CopyCA from "./CopyCA";

const CONTRACT_ADDRESS = "GUxKzvR7QmvA5M5j2LufNynVMa6hxjWkERDM7Vnpvvii";

const links = {
  official: [
    { label: "X (Twitter)", href: "https://x.com/signsmemecoin", icon: LinkIcon, desc: "Official SIGNS updates and vibes." },
    { label: "X Community", href: "https://x.com/i/communities/1846857972456243231", icon: Layers, desc: "Hang with holders and elites-in-training." },
    { label: "Telegram", href: "https://t.me/signsmemecoin", icon: LinkIcon, desc: "Fast chat for degen hours." },
    { label: "Discord", href: "https://discord.com/invite/Jv24XjkMyw", icon: LinkIcon, desc: "Where the deeper playbooks live." },
    { label: "Dexscreener", href: "https://dexscreener.com/solana/bkwuisguf6a6wytt1ckjtytd4kexswswz23ezumshy2y", icon: Coins, desc: "Live chart & liquidity view." },
    { label: "CoinGecko", href: "https://www.coingecko.com/en/coins/there-will-be-signs", icon: Coins, desc: "Market stats & tracking." },
  ],
  ecosystem: [
    { label: "DAO", href: "https://app.realms.today/dao/Dg1xwGgnVb4wzFbuGrykAdB9whoeMqWooMGumS1pZHn1", icon: ShieldCheck, desc: "Community proposals, multi-sig, and the vault." },
    { label: "Hyperliquid Trading Vault", href: "#", icon: Wallet, desc: "Auto-compounding, transparent strategies." },
    { label: "NFT Market", href: "#", icon: Layers, desc: "Collectibles, utility, and future flex." },
  ],
};

export default function ResourcesView() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b">
        <div className="container mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Resources</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Your direct line to everything SIGNS — official links, how to buy, the ecosystem, and crypto basics.
          </p>
        </div>
      </section>

      {/* Section 1: Official Links */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <LinkIcon className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Official Links</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.official.map((item) => (
            <Card key={item.label} className="group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{item.label}</CardTitle>
                </div>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:shadow-md">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    Open <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: How to Buy SIGNS */}
      <section className="bg-muted/30 border-y">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-center gap-3">
            <Coins className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">How to Buy SIGNS</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Steps</CardTitle>
                <CardDescription>Simple path from zero to holder.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <span className="font-medium">Copy the Contract Address (CA).</span>
                    <div className="mt-2 flex items-center justify-between gap-3 rounded-md border p-3 text-sm bg-background">
                      <code className="font-mono break-all">{CONTRACT_ADDRESS}</code>
                      <CopyCA value={CONTRACT_ADDRESS} />
                    </div>
                  </li>
                  <li>
                    <span className="font-medium">Open your wallet (Phantom) or Raydium).</span>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <Button asChild variant="secondary">
                        <a href="https://phantom.app/" target="_blank" rel="noreferrer">Phantom</a>
                      </Button>
                      <Button asChild variant="secondary">
                        <a href="https://raydium.io/" target="_blank" rel="noreferrer">Raydium</a>
                      </Button>
                    </div>
                  </li>
                  <li>
                    <span className="font-medium">Paste the CA and swap into SIGNS.</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Select your input token (e.g., SOL/USDC) → paste CA → select SIGNS → confirm swap.
                    </p>
                  </li>
                </ol>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button asChild>
                  <a
                    href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in&inputMint=sol&outputMint=GUxKzvR7QmvA5M5j2LufNynVMa6hxjWkERDM7Vnpvvii"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Swap on Raydium <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#" target="_blank" rel="noreferrer">Watch a 60s tutorial</a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tips for Smooth Buying</CardTitle>
                <CardDescription>Because slippage and speed matter.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Start with a small test swap to confirm everything is correct.</li>
                  <li>If a swap fails, slightly increase slippage and retry.</li>
                  <li>Always verify you pasted the correct CA from this page.</li>
                  <li>Beware fake tokens with similar tickers on DEXes.</li>
                </ul>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">None of this is financial advice. Do your own research.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: SIGNS Ecosystem */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-center gap-3">
          <Layers className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">SIGNS Ecosystem</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.ecosystem.map((item) => (
            <Card key={item.label} className="group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{item.label}</CardTitle>
                </div>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:shadow-md">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    Explore <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 4: Crypto Basics */}
      <section className="bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="h-5 w-5" />
            <h2 className="text-2xl font-semibold">Crypto Basics</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="setup-security">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2"><Lock className="h-4 w-4" /> Setup & Security</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Use reputable wallets (Phantom, Ledger). Back up your seed phrase offline (paper or hardware). Never share it.</p>
                  <p>Enable wallet PIN/biometrics. Consider a hardware wallet for larger holdings.</p>
                  <p>Keep software up to date and avoid installing random browser extensions.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="avoid-scams">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2"><ShieldAlert className="h-4 w-4" /> Avoiding Scams</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Always verify links from this official page. Double-check contract addresses.</p>
                  <p>Never connect your wallet to unknown sites. Revoke approvals you don’t recognize.</p>
                  <p>Team members will never DM you asking for funds or seed phrases.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="best-practices">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Best Practices for Beginners</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>Start small, learn the flow, and scale only after you’re comfortable.</p>
                  <p>Track your portfolio and transactions; screenshots beat memory.</p>
                  <p>DCA beats FOMO. Education beats luck. Discipline beats noise.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

       {/* Bottom CTA (optional) */}
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Ready to explore deeper?</CardTitle>
            <CardDescription>Join the conversation, vote on proposals, and level up with the SIGNS community.</CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="https://discord.com/invite/Jv24XjkMyw" target="_blank" rel="noreferrer">Join Discord</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://x.com/signsmemecoin" target="_blank" rel="noreferrer">Follow on X</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}