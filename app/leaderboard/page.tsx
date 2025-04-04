"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Trophy, ArrowUpDown } from "lucide-react"

// Mock data for the leaderboard
const mockUsers = [
  { id: 1, rank: 1, username: "codeMaster", rating: 2845, country: "United States", contests: 124, maxRating: 2900 },
  { id: 2, rank: 2, username: "algorithmGuru", rating: 2789, country: "China", contests: 98, maxRating: 2850 },
  { id: 3, rank: 3, username: "byteBender", rating: 2756, country: "Russia", contests: 112, maxRating: 2800 },
  { id: 4, rank: 4, username: "logicWizard", rating: 2701, country: "India", contests: 87, maxRating: 2750 },
  { id: 5, rank: 5, username: "codeNinja", rating: 2698, country: "Japan", contests: 103, maxRating: 2720 },
  { id: 6, rank: 6, username: "pythonPro", rating: 2645, country: "Germany", contests: 92, maxRating: 2700 },
  { id: 7, rank: 7, username: "devDragon", rating: 2612, country: "South Korea", contests: 76, maxRating: 2650 },
  { id: 8, rank: 8, username: "hackHero", rating: 2589, country: "Canada", contests: 81, maxRating: 2620 },
  { id: 9, rank: 9, username: "bitBaron", rating: 2567, country: "Brazil", contests: 68, maxRating: 2590 },
  { id: 10, rank: 10, username: "syntaxSage", rating: 2534, country: "France", contests: 73, maxRating: 2580 },
]

export default function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] = useState<"rank" | "rating" | "contests">("rank")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const handleSort = (field: "rank" | "rating" | "contests") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const filteredUsers = mockUsers.filter((user) => user.username.toLowerCase().includes(searchQuery.toLowerCase()))

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const factor = sortDirection === "asc" ? 1 : -1
    return (a[sortField] - b[sortField]) * factor
  })

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Global Leaderboard</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Top Competitive Programmers</CardTitle>
          <CardDescription>Rankings based on performance in contests and problem-solving</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by username"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">
                    <Button variant="ghost" size="sm" onClick={() => handleSort("rank")}>
                      Rank
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleSort("rating")}>
                      Rating
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleSort("contests")}>
                      Contests
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Max Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.rank <= 3 ? (
                        <div className="flex items-center">
                          <Trophy
                            className={`h-4 w-4 mr-1 ${
                              user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-amber-700"
                            }`}
                          />
                          {user.rank}
                        </div>
                      ) : (
                        user.rank
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{user.username}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell className="text-right">{user.rating}</TableCell>
                    <TableCell className="text-right">{user.contests}</TableCell>
                    <TableCell className="text-right">{user.maxRating}</TableCell>
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

