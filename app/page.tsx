import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Trophy, Users, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to CodeArena
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Enhance your programming skills through competitive coding challenges, contests, and a vibrant
                  community.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/login">
                  <Button className="px-8">Get Started</Button>
                </Link>
                <Link href="/problemset">
                  <Button variant="outline" className="px-8">
                    Explore Problems
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Practice Coding</h3>
                <p className="text-center text-muted-foreground">
                  Solve problems of varying difficulty to improve your skills.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Compete</h3>
                <p className="text-center text-muted-foreground">
                  Participate in contests and climb the global rankings.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-center text-muted-foreground">Connect with other programmers and share knowledge.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Regular Contests</h3>
                <p className="text-center text-muted-foreground">Weekly and monthly contests to test your skills.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Challenge Yourself?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of programmers improving their skills every day.
                </p>
              </div>
              <Link href="/login">
                <Button className="px-8">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

