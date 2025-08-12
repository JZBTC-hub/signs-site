import type { Metadata } from "next"
import { Container } from "@/components/container"

export const metadata: Metadata = {
  title: "About",
  description: "The SIGNS story and what we’re building.",
}

export default function AboutPage() {
  return (
    <section className="py-16">
      <Container className="prose prose-invert max-w-3xl">
        <h1>About SIGNS</h1>
        <p>
          When we make it, we won’t say much—there will be signs. SIGNS is a quietly
          elite culture club built around conviction, wealth mindset, and disciplined
          execution. This site will become the hub: resources, member perks, and gated
          experiences for holders.
        </p>
        <p>
          Phase one is simple: a clean home, resources that actually help, and a
          members area that unlocks with your wallet. More to come.
        </p>
      </Container>
    </section>
  )
}
