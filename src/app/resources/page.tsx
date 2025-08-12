import type { Metadata } from "next"
import { Container } from "@/components/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides, tools, and links we actually use.",
}

export default function ResourcesPage() {
  return (
    <section className="py-16">
      <Container>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">Resources</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Curated tools, guides, and explainers. We’ll keep this tight and useful.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Wallet setup, safety, and how to buy. (Content coming soon.)
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DeFi Basics</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              LPs, staking, and risk. (Content coming soon.)
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Links</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Socials, dashboards, docs. (Content coming soon.)
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
