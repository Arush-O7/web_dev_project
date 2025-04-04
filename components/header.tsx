"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">CodeArena</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/problemset" className="text-sm font-medium hover:text-primary">
            Problems
          </Link>
          <Link href="/contests" className="text-sm font-medium hover:text-primary">
            Contests
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium hover:text-primary">
            Leaderboard
          </Link>
          <Link href="/compiler" className="text-sm font-medium hover:text-primary">
            Compiler
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <nav className="container flex flex-col space-y-4">
            <Link href="/problemset" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Problems
            </Link>
            <Link href="/contests" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Contests
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Leaderboard
            </Link>
            <Link href="/compiler" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Compiler
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>
              <Link href="/signup" onClick={toggleMenu}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

