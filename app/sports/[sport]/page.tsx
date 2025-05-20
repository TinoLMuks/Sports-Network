import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, Clock, Users } from "lucide-react"

// Mock data - in a real app, this would come from an API
const sportsData = {
  cricket: {
    name: "Cricket",
    description: "High school cricket competitions and events across the country.",
    icon: "🏏",
    activeSchools: 24,
    upcomingEvents: 8,
    fixtures: [
      {
        id: 1,
        title: "Riverside Prep vs Central High",
        date: "June 12, 2023",
        time: "1:00 PM",
        location: "Memorial Cricket Ground",
        teams: ["Riverside Prep", "Central High"],
        slug: "cricket-riverside-central",
      },
      {
        id: 2,
        title: "Eastside Academy vs Westside High",
        date: "June 19, 2023",
        time: "2:00 PM",
        location: "City Sports Complex",
        teams: ["Eastside Academy", "Westside High"],
        slug: "cricket-eastside-westside",
      },
    ],
    results: [
      {
        id: 1,
        title: "North County vs South Valley",
        date: "May 28, 2023",
        teams: ["North County", "South Valley"],
        score: "North County won by 5 wickets",
        slug: "cricket-north-south",
      },
      {
        id: 2,
        title: "Mountain View vs Lakeside",
        date: "May 21, 2023",
        teams: ["Mountain View", "Lakeside"],
        score: "Lakeside won by 25 runs",
        slug: "cricket-mountain-lakeside",
      },
    ],
    topSchools: [
      { id: 1, name: "Central High", wins: 8, losses: 2 },
      { id: 2, name: "Riverside Prep", wins: 7, losses: 3 },
      { id: 3, name: "Lakeside", wins: 6, losses: 4 },
      { id: 4, name: "Eastside Academy", wins: 5, losses: 5 },
    ],
  },
  soccer: {
    name: "Soccer",
    description: "High school soccer competitions and events across the country.",
    icon: "⚽",
    activeSchools: 32,
    upcomingEvents: 12,
    fixtures: [
      {
        id: 1,
        title: "Regional Soccer Tournament",
        date: "June 10, 2023",
        time: "2:00 PM",
        location: "City Sports Complex",
        teams: ["Westside High", "Eastside Academy", "North County", "South Valley"],
        slug: "regional-soccer-tournament",
      },
      {
        id: 2,
        title: "Central High vs Mountain View",
        date: "June 14, 2023",
        time: "4:00 PM",
        location: "Central Stadium",
        teams: ["Central High", "Mountain View"],
        slug: "soccer-central-mountain",
      },
    ],
    results: [
      {
        id: 1,
        title: "Riverside Prep vs Lakeside",
        date: "May 30, 2023",
        teams: ["Riverside Prep", "Lakeside"],
        score: "Riverside Prep 3 - 1 Lakeside",
        slug: "soccer-riverside-lakeside",
      },
      {
        id: 2,
        title: "Westside High vs Eastside Academy",
        date: "May 23, 2023",
        teams: ["Westside High", "Eastside Academy"],
        score: "Westside High 2 - 2 Eastside Academy",
        slug: "soccer-westside-eastside",
      },
    ],
    topSchools: [
      { id: 1, name: "Westside High", wins: 9, losses: 1 },
      { id: 2, name: "Central High", wins: 8, losses: 2 },
      { id: 3, name: "Riverside Prep", wins: 7, losses: 3 },
      { id: 4, name: "North County", wins: 6, losses: 4 },
    ],
  },
  // Add more sports as needed
}

export default function SportPage({ params }: { params: { sport: string } }) {
  const sportId = params.sport
  const sport = sportsData[sportId as keyof typeof sportsData]

  if (!sport) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{sport.icon}</span>
            <h1 className="text-4xl font-bold">{sport.name}</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">{sport.description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{sport.activeSchools} active schools</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              <span>{sport.upcomingEvents} upcoming events</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/sports/${sportId}/fixtures`}>View All Fixtures</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/sports/${sportId}/schools`}>Participating Schools</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="fixtures" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="fixtures">Upcoming Fixtures</TabsTrigger>
          <TabsTrigger value="results">Recent Results</TabsTrigger>
          <TabsTrigger value="standings">Top Schools</TabsTrigger>
        </TabsList>

        <TabsContent value="fixtures" className="space-y-4">
          {sport.fixtures.map((fixture) => (
            <Card key={fixture.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{fixture.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{fixture.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{fixture.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{fixture.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="sm">
                    <Link href={`/events/${fixture.slug}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="text-center mt-6">
            <Button variant="outline" asChild>
              <Link href={`/sports/${sportId}/fixtures`}>View All Fixtures</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          {sport.results.map((result) => (
            <Card key={result.id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{result.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{result.date}</span>
                      </div>
                      <div className="flex items-center font-medium">
                        <span>{result.score}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/events/${result.slug}`}>Match Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="text-center mt-6">
            <Button variant="outline" asChild>
              <Link href={`/sports/${sportId}/results`}>View All Results</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="standings">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Schools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Rank</th>
                      <th className="text-left py-3 px-4">School</th>
                      <th className="text-center py-3 px-4">Wins</th>
                      <th className="text-center py-3 px-4">Losses</th>
                      <th className="text-center py-3 px-4">Win %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sport.topSchools.map((school, index) => (
                      <tr key={school.id} className="border-b">
                        <td className="py-3 px-4">{index + 1}</td>
                        <td className="py-3 px-4">
                          <Link href={`/schools/${school.id}`} className="hover:underline font-medium">
                            {school.name}
                          </Link>
                        </td>
                        <td className="text-center py-3 px-4">{school.wins}</td>
                        <td className="text-center py-3 px-4">{school.losses}</td>
                        <td className="text-center py-3 px-4">
                          {((school.wins / (school.wins + school.losses)) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Mock news items - in a real app, these would be filtered by sport */}
          <Card>
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News title"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{sport.name}</Badge>
                <span className="text-xs text-muted-foreground">May 15, 2023</span>
              </div>
              <CardTitle className="line-clamp-2 text-xl">
                <Link href="/news/example-news">Major Upset in Regional Tournament</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="line-clamp-2 text-muted-foreground">
                Underdog team surprises everyone with an unexpected victory against the reigning champions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <div className="aspect-video w-full overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="News title"
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{sport.name}</Badge>
                <span className="text-xs text-muted-foreground">May 10, 2023</span>
              </div>
              <CardTitle className="line-clamp-2 text-xl">
                <Link href="/news/example-news-2">New Record Set by Central High Star</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="line-clamp-2 text-muted-foreground">
                Central High's star player breaks a decade-old record during last week's match.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
