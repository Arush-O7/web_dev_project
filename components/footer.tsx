import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold">
            CodeArena
          </Link>
          <p className="text-sm text-muted-foreground">© 2025 CodeArena. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link href="/about" className="text-sm hover:text-primary">
            About
          </Link>
          <Link href="/privacy" className="text-sm hover:text-primary">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm hover:text-primary">
            Terms
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

