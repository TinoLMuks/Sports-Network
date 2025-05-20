import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, MapPinIcon, Clock } from "lucide-react"

// Mock data - in a real app, this would come from an API
const fixtures = [
  {
    id: 1,
    title: "Regional Soccer Tournament",
    date: "June 10, 2023",
    time: "2:00 PM",
    location: "City Sports Complex",
    sport: "Soccer",
    teams: ["Westside High", "Eastside Academy", "North County", "South Valley"],
    slug: "regional-soccer-tournament",
  },
  {
    id: 2,
    title: "Swimming Championship",
    date: "June 15, 2023",
    time: "10:00 AM",
    location: "Olympic Pool Center",
    sport: "Swimming",
    teams: ["Central High", "Riverside Prep", "Mountain View", "Lakeside"],
    slug: "swimming-championship",
  },
  {
    id: 3,
    title: "Cricket Match: Riverside vs Central",
    date: "June 12, 2023",
    time: "1:00 PM",
    location: "Memorial Cricket Ground",
    sport: "Cricket",
    teams: ["Riverside Prep", "Central High"],
    slug: "cricket-riverside-central",
  },
  {
    id: 4,
    title: "Track and Field Invitational",
    date: "June 18, 2023",
    time: "9:00 AM",
    location: "University Stadium",
    sport: "Athletics",
    teams: ["Multiple Schools"],
    slug: "track-field-invitational",
  },
  {
    id: 5,
    title: "Rugby Tournament",
    date: "June 20, 2023",
    time: "3:00 PM",
    location: "Central Stadium",
    sport: "Rugby",
    teams: ["Westside High", "North County", "Mountain View"],
    slug: "rugby-tournament",
  },
  {
    id: 6,
    title: "Tennis Championship",
    date: "June 22, 2023",
    time: "11:00 AM",
    location: "City Tennis Courts",
    sport: "Tennis",
    teams: ["Eastside Academy", "Riverside Prep", "Lakeside"],
    slug: "tennis-championship",
  },
]

const pastFixtures = [
  {
    id: 1,
    title: "Cricket: North County vs South Valley",
    date: "May 28, 2023",
    sport: "Cricket",
    teams: ["North County", "South Valley"],
    result: "North County won by 5 wickets",
    slug: "cricket-north-south",
  },
  {
    id: 2,
    title: "Swimming: Regional Qualifiers",
    date: "May 25, 2023",
    sport: "Swimming",
    teams: ["Multiple Schools"],
    result: "Central High qualified 8 swimmers",
    slug: "swimming-qualifiers",
  },
  {
    id: 3,
    title: "Soccer: Westside vs Eastside",
    date: "May 23, 2023",
    sport: "Soccer",
    teams: ["Westside High", "Eastside Academy"],
    result: "Westside High 2 - 2 Eastside Academy",
    slug: "soccer-westside-eastside",
  },
  {
    id: 4,
    title: "Rugby: Central vs Mountain View",
    date: "May 20, 2023",
    sport: "Rugby",
    teams: ["Central High", "Mountain View"],
    result: "Central High won 28-14",
    slug: "rugby-central-mountain",
  },
]

export default function FixturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Fixtures & Results</h1>
          <p className="text-xl text-muted-foreground">Stay updated with upcoming matches and past results</p>
        </div>
        <Button asChild>
          <Link href="/calendar">View Calendar</Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Fixtures</TabsTrigger>
          <TabsTrigger value="past">Past Results</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="mb-6 p-4 bg-muted rounded-lg">
            <div className="grid gap-4 md:grid-cols-3">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="soccer">Soccer</SelectItem>
                  <SelectItem value="rugby">Rugby</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by school" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Schools</SelectItem>
                  <SelectItem value="central">Central High</SelectItem>
                  <SelectItem value="riverside">Riverside Prep</SelectItem>
                  <SelectItem value="westside">Westside High</SelectItem>
                  <SelectItem value="eastside">Eastside Academy</SelectItem>
                  <SelectItem value="north">North County</SelectItem>
                  <SelectItem value="south">South Valley</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="date-asc">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-asc">Date (Soonest First)</SelectItem>
                  <SelectItem value="date-desc">Date (Latest First)</SelectItem>
                  <SelectItem value="sport">Sport</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {fixtures.map((fixture) => (
              <Card key={fixture.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{fixture.sport}</Badge>
                        <h3 className="text-xl font-medium">{fixture.title}</h3>
                      </div>
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
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Teams: </span>
                        {fixture.teams.join(", ")}
                      </div>
                    </div>
                    <div className="flex gap-2 self-end md:self-center">
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/events/${fixture.slug}`}>Details</Link>
                      </Button>
                      <Button asChild size="sm">
                        <Link href={`/events/${fixture.slug}/register`}>Register</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="mb-6 p-4 bg-muted rounded-lg">
            <div className="grid gap-4 md:grid-cols-3">
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="soccer">Soccer</SelectItem>
                  <SelectItem value="rugby">Rugby</SelectItem>
                  <SelectItem value="swimming">Swimming</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by school" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Schools</SelectItem>
                  <SelectItem value="central">Central High</SelectItem>
                  <SelectItem value="riverside">Riverside Prep</SelectItem>
                  <SelectItem value="westside">Westside High</SelectItem>
                  <SelectItem value="eastside">Eastside Academy</SelectItem>
                  <SelectItem value="north">North County</SelectItem>
                  <SelectItem value="south">South Valley</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="date-desc">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Date (Most Recent)</SelectItem>
                  <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
                  <SelectItem value="sport">Sport</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {pastFixtures.map((fixture) => (
              <Card key={fixture.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{fixture.sport}</Badge>
                        <h3 className="text-xl font-medium">{fixture.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{fixture.date}</span>
                        </div>
                        <div className="flex items-center font-medium">
                          <span>{fixture.result}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Teams: </span>
                        {fixture.teams.join(", ")}
                      </div>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/events/${fixture.slug}`}>Match Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
