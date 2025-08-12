import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Lock } from "lucide-react";
import { ConnectWalletCta } from "@/components/connect-wallet-cta";

export const metadata: Metadata = {
  title: "Members Only",
  description: "Holder-gated area. Wallet connect coming soon.",
};

export default function MembersPage() {
  return (
    <section className="py-24">
      <Container className="text-center max-w-2xl">
        <Lock className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">Members Only</h1>
        <p className="mt-3 text-muted-foreground">
          This area will unlock for verified $SIGNS holders. We’ll add wallet connect and token checks here soon.
        </p>
        <div className="mt-8">
          <ConnectWalletCta />
        </div>
      </Container>
    </section>
  );
}
