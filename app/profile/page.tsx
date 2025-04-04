"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Save, Trophy, Code, Calendar, CheckCircle, XCircle } from "lucide-react"

// Mock user data
const userData = {
  username: "codeMaster",
  fullName: "Alex Johnson",
  email: "alex@example.com",
  country: "United States",
  joinDate: "January 15, 2023",
  rating: 2845,
  rank: 1,
  bio: "Competitive programmer and software engineer. I love solving algorithmic problems and participating in coding contests.",
  contests: 124,
  problemsSolved: 547,
  contributions: 32,
}

// Mock submissions data
const submissionsData = [
  {
    id: 1,
    problemId: "A1",
    problemTitle: "Two Sum",
    status: "Accepted",
    language: "C++",
    runtime: "4ms",
    memory: "7.8MB",
    submittedAt: "2025-03-30T14:23:45Z",
  },
  {
    id: 2,
    problemId: "B2",
    problemTitle: "Longest Substring Without Repeating Characters",
    status: "Wrong Answer",
    language: "Python",
    runtime: "-",
    memory: "-",
    submittedAt: "2025-03-29T10:15:22Z",
  },
  {
    id: 3,
    problemId: "C3",
    problemTitle: "Median of Two Sorted Arrays",
    status: "Time Limit Exceeded",
    language: "Java",
    runtime: "-",
    memory: "-",
    submittedAt: "2025-03-28T18:45:12Z",
  },
  {
    id: 4,
    problemId: "D4",
    problemTitle: "Valid Parentheses",
    status: "Accepted",
    language: "JavaScript",
    runtime: "52ms",
    memory: "42.1MB",
    submittedAt: "2025-03-27T09:30:45Z",
  },
  {
    id: 5,
    problemId: "E5",
    problemTitle: "Merge K Sorted Lists",
    status: "Accepted",
    language: "C++",
    runtime: "8ms",
    memory: "13.2MB",
    submittedAt: "2025-03-26T16:20:33Z",
  },
]

// Mock contest history data
const contestHistoryData = [
  {
    id: 1,
    contestId: "c5",
    contestName: "Weekly Contest 344",
    rank: 5,
    rating: 2845,
    ratingChange: "+15",
    date: "2025-03-29",
  },
  {
    id: 2,
    contestId: "c6",
    contestName: "Biweekly Contest 122",
    rank: 12,
    rating: 2830,
    ratingChange: "+8",
    date: "2025-03-22",
  },
  {
    id: 3,
    contestId: "c7",
    contestName: "CodeArena Winter Challenge",
    rank: 1,
    rating: 2822,
    ratingChange: "+45",
    date: "2025-02-15",
  },
  {
    id: 4,
    contestId: "c8",
    contestName: "Weekly Contest 343",
    rank: 8,
    rating: 2777,
    ratingChange: "+12",
    date: "2025-02-08",
  },
  {
    id: 5,
    contestId: "c9",
    contestName: "Biweekly Contest 121",
    rank: 20,
    rating: 2765,
    ratingChange: "-5",
    date: "2025-02-01",
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: userData.fullName,
    email: userData.email,
    country: userData.country,
    bio: userData.bio,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = () => {
    // In a real app, this would save to a backend
    setIsEditing(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt={userData.username} />
                <AvatarFallback>{userData.username.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <CardTitle>{userData.username}</CardTitle>
              <CardDescription>Joined {userData.joinDate}</CardDescription>
              <div className="mt-2 flex items-center">
                <Trophy className="h-5 w-5 mr-1 text-yellow-500" />
                <span className="font-bold">Rank {userData.rank}</span>
                <span className="mx-2">•</span>
                <span className="font-bold">{userData.rating} points</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Contests</div>
                  <div className="text-2xl font-bold">{userData.contests}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Problems</div>
                  <div className="text-2xl font-bold">{userData.problemsSolved}</div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-2">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                    Contest Winner
                  </Badge>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                    Problem Solver
                  </Badge>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500">
                    Top Contributor
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
              <TabsTrigger value="contests">Contests</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 py-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Your personal information and settings</CardDescription>
                  </div>
                  <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={profileData.fullName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" name="country" value={profileData.country} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" name="bio" rows={4} value={profileData.bio} onChange={handleInputChange} />
                      </div>
                      <Button onClick={handleSaveProfile}>Save Changes</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Full Name</div>
                          <div>{profileData.fullName}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                          <div>{profileData.email}</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Country</div>
                        <div>{profileData.country}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Bio</div>
                        <div className="whitespace-pre-line">{profileData.bio}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent submissions and contest participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {submissionsData.slice(0, 3).map((submission) => (
                      <div key={submission.id} className="flex items-start space-x-3 p-3 border rounded-md">
                        {submission.status === "Accepted" ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        )}
                        <div>
                          <div className="font-medium">{submission.problemTitle}</div>
                          <div className="text-sm text-muted-foreground">
                            {submission.status} • {submission.language} • {formatDate(submission.submittedAt)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="submissions" className="space-y-6 py-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Submission History</CardTitle>
                    <CardDescription>Your recent problem submissions</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{submissionsData.length} submissions</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Problem</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Language</TableHead>
                          <TableHead>Runtime</TableHead>
                          <TableHead>Memory</TableHead>
                          <TableHead className="text-right">Submitted</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {submissionsData.map((submission) => (
                          <TableRow key={submission.id}>
                            <TableCell className="font-medium">{submission.problemTitle}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                {submission.status === "Accepted" ? (
                                  <>
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-green-500">{submission.status}</span>
                                  </>
                                ) : submission.status === "Wrong Answer" ? (
                                  <>
                                    <XCircle className="h-4 w-4 text-red-500 mr-1" />
                                    <span className="text-red-500">{submission.status}</span>
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="h-4 w-4 text-yellow-500 mr-1" />
                                    <span className="text-yellow-500">{submission.status}</span>
                                  </>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>{submission.language}</TableCell>
                            <TableCell>{submission.runtime}</TableCell>
                            <TableCell>{submission.memory}</TableCell>
                            <TableCell className="text-right">{formatDate(submission.submittedAt)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contests" className="space-y-6 py-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Contest History</CardTitle>
                    <CardDescription>Your participation in coding contests</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{contestHistoryData.length} contests</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Contest</TableHead>
                          <TableHead className="text-right">Rank</TableHead>
                          <TableHead className="text-right">Rating</TableHead>
                          <TableHead className="text-right">Change</TableHead>
                          <TableHead className="text-right">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contestHistoryData.map((contest) => (
                          <TableRow key={contest.id}>
                            <TableCell className="font-medium">{contest.contestName}</TableCell>
                            <TableCell className="text-right">
                              {contest.rank === 1 ? (
                                <div className="flex items-center justify-end">
                                  <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span>{contest.rank}</span>
                                </div>
                              ) : (
                                contest.rank
                              )}
                            </TableCell>
                            <TableCell className="text-right">{contest.rating}</TableCell>
                            <TableCell className="text-right">
                              <span
                                className={contest.ratingChange.startsWith("+") ? "text-green-500" : "text-red-500"}
                              >
                                {contest.ratingChange}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">{contest.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

