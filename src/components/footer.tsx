import Link from "next/link"
import { Container } from "@/components/container"

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <Container className="py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SIGNS. There will be signs.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link href="https://x.com" target="_blank" className="text-muted-foreground hover:text-foreground">
            X (Twitter)
          </Link>
          <Link href="https://discord.com" target="_blank" className="text-muted-foreground hover:text-foreground">
            Discord
          </Link>
          <Link href="/legal" className="text-muted-foreground hover:text-foreground">
            Disclaimer
          </Link>
        </div>
      </Container>
    </footer>
  )
}
