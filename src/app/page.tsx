import { Button } from "@/components/ui/button" // if this errors, use: import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="font-display text-5xl tracking-tight">
          There will be <span className="text-primary">signs</span>.
        </h1>
        <p className="text-muted-foreground">
          Luxury, signal, and silence. MVP coming soon.
        </p>
        <Button size="lg" className="rounded-2xl">Enter</Button>
      </div>
    </main>
  )
}
