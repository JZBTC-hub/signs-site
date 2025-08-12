"use client";

import { Button } from "@/components/ui/button";

export function ConnectWalletCta() {
  return (
    <Button
      size="lg"
      className="rounded-2xl"
      onClick={() => alert("Wallet connect coming soon")}
    >
      Connect Wallet
    </Button>
  );
}
