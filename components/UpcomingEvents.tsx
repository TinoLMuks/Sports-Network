import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, Clock } from "lucide-react"

// Mock data - in a real app, this would come from an API
const upcomingEvents = [
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
]

export default function UpcomingEvents() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {upcomingEvents.map((event) => (
        <Card key={event.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">
                <Link href={`/events/${event.slug}`}>{event.title}</Link>
              </CardTitle>
              <Badge>{event.sport}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{event.date}</span>
                <Clock className="ml-4 mr-2 h-4 w-4 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
              <div className="text-sm mt-2">
                <span className="font-medium">Teams: </span>
                {event.teams.join(", ")}
              </div>
              <div className="mt-2">
                <Link href={`/events/${event.slug}`} className="text-sm font-medium text-primary hover:underline">
                  View details
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
