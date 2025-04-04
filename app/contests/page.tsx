"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Trophy, ArrowRight } from "lucide-react"

// Mock data for contests
const upcomingContests = [
  {
    id: "c1",
    title: "Weekly Contest 345",
    startTime: "2025-04-05T13:00:00Z",
    duration: "2 hours",
    registeredCount: 1245,
    status: "registration",
  },
  {
    id: "c2",
    title: "Biweekly Contest 123",
    startTime: "2025-04-12T13:00:00Z",
    duration: "1.5 hours",
    registeredCount: 987,
    status: "registration",
  },
  {
    id: "c3",
    title: "CodeArena Spring Challenge",
    startTime: "2025-04-20T09:00:00Z",
    duration: "3 hours",
    registeredCount: 2456,
    status: "registration",
  },
]

const ongoingContests = [
  {
    id: "c4",
    title: "Daily Coding Challenge",
    startTime: "2025-03-31T00:00:00Z",
    endTime: "2025-03-31T23:59:59Z",
    duration: "24 hours",
    registeredCount: 876,
    status: "ongoing",
  },
]

const pastContests = [
  {
    id: "c5",
    title: "Weekly Contest 344",
    startTime: "2025-03-29T13:00:00Z",
    duration: "2 hours",
    participants: 1876,
    winner: "codeMaster",
    status: "finished",
  },
  {
    id: "c6",
    title: "Biweekly Contest 122",
    startTime: "2025-03-22T13:00:00Z",
    duration: "1.5 hours",
    participants: 1543,
    winner: "algorithmGuru",
    status: "finished",
  },
  {
    id: "c7",
    title: "CodeArena Winter Challenge",
    startTime: "2025-02-15T09:00:00Z",
    duration: "3 hours",
    participants: 3210,
    winner: "byteBender",
    status: "finished",
  },
]

export default function ContestsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Contests</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6 py-4">
          {upcomingContests.map((contest) => (
            <Card key={contest.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{contest.title}</CardTitle>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                    Registration Open
                  </Badge>
                </div>
                <CardDescription>Improve your skills and compete with others</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Start Time</div>
                      <div className="text-sm text-muted-foreground">{formatDate(contest.startTime)}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">{contest.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Registered</div>
                      <div className="text-sm text-muted-foreground">{contest.registeredCount} participants</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/contests/${contest.id}`}>
                  <Button variant="outline">View Details</Button>
                </Link>
                <Button>Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="ongoing" className="space-y-6 py-4">
          {ongoingContests.length > 0 ? (
            ongoingContests.map((contest) => (
              <Card key={contest.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{contest.title}</CardTitle>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500">
                      In Progress
                    </Badge>
                  </div>
                  <CardDescription>Contest is currently running</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">Start Time</div>
                        <div className="text-sm text-muted-foreground">{formatDate(contest.startTime)}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">End Time</div>
                        <div className="text-sm text-muted-foreground">{formatDate(contest.endTime)}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">Participants</div>
                        <div className="text-sm text-muted-foreground">{contest.registeredCount} participants</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/contests/${contest.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Link href={`/contests/${contest.id}/participate`}>
                    <Button>
                      Enter Contest
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="p-12 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <h3 className="text-lg font-medium mb-2">No Ongoing Contests</h3>
              <p className="text-muted-foreground">
                There are no contests running at the moment. Check the upcoming tab for future contests.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-6 py-4">
          {pastContests.map((contest) => (
            <Card key={contest.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{contest.title}</CardTitle>
                  <Badge variant="outline" className="bg-gray-500/10 text-gray-500">
                    Completed
                  </Badge>
                </div>
                <CardDescription>View results and rankings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Date</div>
                      <div className="text-sm text-muted-foreground">{formatDate(contest.startTime)}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">{contest.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Winner</div>
                      <div className="text-sm text-muted-foreground">{contest.winner}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/contests/${contest.id}/results`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Results
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

