"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, MessageSquare, ThumbsUp, BookOpen } from "lucide-react"

// Mock problem data
const problemData = {
  id: "A1",
  title: "Two Sum",
  difficulty: "Easy",
  tags: ["Arrays", "Hash Table"],
  description: `
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    
    You can return the answer in any order.
  `,
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 6, we return [0, 1].",
    },
  ],
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists.",
  ],
  hints: [
    "A really brute force way would be to search for all possible pairs of numbers but that would be too slow.",
    "Try to use the fact that the complement of the number we need is already in the hash table.",
  ],
  solvedCount: 12453,
  acceptance: "74%",
}

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("description")

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
      case "Hard":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
      default:
        return ""
    }
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Link href="/problemset">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Problems
          </Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-muted-foreground">{problemData.id}.</span>
                    <CardTitle>{problemData.title}</CardTitle>
                    <Badge variant="outline" className={getDifficultyColor(problemData.difficulty)}>
                      {problemData.difficulty}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {problemData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Solutions
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="hints">Hints</TabsTrigger>
                  <TabsTrigger value="discussion">Discussion</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-6 py-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Problem Description</h3>
                    <p className="whitespace-pre-line">{problemData.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Examples</h3>
                    {problemData.examples.map((example, index) => (
                      <div key={index} className="space-y-2 p-4 border rounded-md">
                        <div>
                          <span className="font-medium">Example {index + 1}:</span>
                        </div>
                        <div>
                          <span className="font-medium">Input:</span> {example.input}
                        </div>
                        <div>
                          <span className="font-medium">Output:</span> {example.output}
                        </div>
                        {example.explanation && (
                          <div>
                            <span className="font-medium">Explanation:</span> {example.explanation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Constraints</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {problemData.constraints.map((constraint, index) => (
                        <li key={index}>{constraint}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="hints" className="space-y-4 py-4">
                  <h3 className="text-lg font-medium">Hints</h3>
                  <div className="space-y-4">
                    {problemData.hints.map((hint, index) => (
                      <div key={index} className="p-4 border rounded-md">
                        <div className="font-medium mb-1">Hint {index + 1}</div>
                        <div>{hint}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="discussion" className="py-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Discussion</h3>
                    <Button size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </div>
                  <div className="p-8 text-center text-muted-foreground">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p>No discussions yet. Be the first to start a discussion!</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:w-1/3">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Solve Problem</CardTitle>
              <CardDescription>Write your solution and submit</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/compiler?problem=${problemData.id}`}>
                <Button className="w-full">
                  <Code className="h-4 w-4 mr-2" />
                  Open in Compiler
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Problem Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Acceptance Rate</span>
                  <span className="font-medium">{problemData.acceptance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submissions</span>
                  <span className="font-medium">{problemData.solvedCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty</span>
                  <span
                    className={`font-medium ${
                      problemData.difficulty === "Easy"
                        ? "text-green-500"
                        : problemData.difficulty === "Medium"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }`}
                  >
                    {problemData.difficulty}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

