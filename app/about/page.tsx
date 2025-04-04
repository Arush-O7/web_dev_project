import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">About CodeArena</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            CodeArena is a platform designed to help programmers improve their coding skills through practice,
            competition, and community. We believe that competitive programming is one of the best ways to enhance
            problem-solving abilities and prepare for technical interviews.
          </p>
          <p className="text-muted-foreground mb-4">
            Our goal is to provide a user-friendly environment where coders of all levels can challenge themselves,
            track their progress, and connect with like-minded individuals.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>A diverse collection of coding problems with varying difficulty levels</li>
            <li>Regular contests to test your skills against other programmers</li>
            <li>An online compiler supporting multiple programming languages</li>
            <li>Detailed explanations and solutions for learning</li>
            <li>A global leaderboard to track your ranking</li>
            <li>Discussion forums to share knowledge and insights</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Meet the Creators</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Mihir Dixit</CardTitle>
            <CardDescription>Co-Founder & Lead Developer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                MD
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  Student at VIT, CSE branch with specilization in blockchain and a decent CGPA. Passionate about algorithms and competitive
                  programming.
                </p>
                <div className="flex space-x-2">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="mailto:arush@example.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Arush Mishra</CardTitle>
            <CardDescription>Co-Founder & UI/UX Designer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                AM
              </div>
              <div>
                <p className="text-muted-foreground mb-2">
                  Student at VIT, CSE branch with speclization in iot and  outstanding academic record. Enthusiastic about web development and
                  user experience design.
                </p>
                <div className="flex space-x-2">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="mailto:mihir@example.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="mailto:contact@codearena.example.com" className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>Email Us</span>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="h-5 w-5 mr-2" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://codearena.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Globe className="h-5 w-5 mr-2" />
            <span>Website</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

