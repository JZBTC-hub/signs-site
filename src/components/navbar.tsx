"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/members", label: "Members Only" },
  { href: "/about", label: "About" },
]

function Logo() {
  return (
    <Link href="/" className="font-display text-xl tracking-tight">
      SIG<span className="text-primary">NS</span>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <Container className="h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground/90",
                  active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            className="rounded-2xl"
            onClick={() => alert("Wallet connect coming soon")}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-xl">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-3">
                {links.map(({ href, label }) => {
                  const active = pathname === href
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "rounded-xl px-3 py-2 text-sm",
                        active ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  )
                })}
              </nav>
              <Separator className="my-4" />
              <Button
                className="w-full rounded-2xl"
                onClick={() => alert("Wallet connect coming soon")}
              >
                <Wallet className="mr-2 h-4 w-4" />
                Connect
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
