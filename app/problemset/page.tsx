"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

// Mock data for problems
const mockProblems = [
  {
    id: "A1",
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Arrays", "Hash Table"],
    solvedCount: 12453,
    acceptance: "74%",
  },
  {
    id: "B2",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["String", "Sliding Window", "Hash Table"],
    solvedCount: 8765,
    acceptance: "62%",
  },
  {
    id: "C3",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    solvedCount: 4321,
    acceptance: "45%",
  },
  {
    id: "D4",
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["String", "Stack"],
    solvedCount: 10987,
    acceptance: "70%",
  },
  {
    id: "E5",
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    tags: ["Linked List", "Divide and Conquer", "Heap"],
    solvedCount: 3456,
    acceptance: "42%",
  },
  {
    id: "F6",
    title: "Maximum Subarray",
    difficulty: "Medium",
    tags: ["Array", "Dynamic Programming", "Divide and Conquer"],
    solvedCount: 9876,
    acceptance: "68%",
  },
  {
    id: "G7",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    tags: ["Tree", "BFS"],
    solvedCount: 7654,
    acceptance: "65%",
  },
  {
    id: "H8",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
    solvedCount: 2345,
    acceptance: "38%",
  },
]

export default function ProblemsetPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleDifficulty = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter((d) => d !== difficulty))
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty])
    }
  }

  const filteredProblems = mockProblems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(problem.difficulty)

    return matchesSearch && matchesDifficulty
  })

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
      <h1 className="text-3xl font-bold mb-6">Problem Set</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Coding Problems</CardTitle>
          <CardDescription>Browse and solve algorithmic problems to improve your skills</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search problems by ID or title"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {showFilters && (
            <div className="mb-6 p-4 border rounded-md">
              <h3 className="font-medium mb-2">Difficulty</h3>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="easy"
                    checked={selectedDifficulties.includes("Easy")}
                    onCheckedChange={() => toggleDifficulty("Easy")}
                  />
                  <label
                    htmlFor="easy"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Easy
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="medium"
                    checked={selectedDifficulties.includes("Medium")}
                    onCheckedChange={() => toggleDifficulty("Medium")}
                  />
                  <label
                    htmlFor="medium"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Medium
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hard"
                    checked={selectedDifficulties.includes("Hard")}
                    onCheckedChange={() => toggleDifficulty("Hard")}
                  />
                  <label
                    htmlFor="hard"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hard
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead className="text-right">Solved</TableHead>
                  <TableHead className="text-right">Acceptance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProblems.map((problem) => (
                  <TableRow key={problem.id}>
                    <TableCell className="font-medium">{problem.id}</TableCell>
                    <TableCell>
                      <Link href={`/problemset/${problem.id}`} className="text-primary hover:underline">
                        {problem.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {problem.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{problem.solvedCount.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{problem.acceptance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

