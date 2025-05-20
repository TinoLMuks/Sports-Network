import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in a real app, this would come from an API
const sports = [
  {
    id: "cricket",
    name: "Cricket",
    icon: "🏏",
    activeSchools: 24,
    upcomingEvents: 8,
  },
  {
    id: "soccer",
    name: "Soccer",
    icon: "⚽",
    activeSchools: 32,
    upcomingEvents: 12,
  },
  {
    id: "rugby",
    name: "Rugby",
    icon: "🏉",
    activeSchools: 18,
    upcomingEvents: 6,
  },
  {
    id: "swimming",
    name: "Swimming",
    icon: "🏊‍♂️",
    activeSchools: 20,
    upcomingEvents: 5,
  },
  {
    id: "athletics",
    name: "Athletics",
    icon: "🏃‍♂️",
    activeSchools: 28,
    upcomingEvents: 7,
  },
  {
    id: "tennis",
    name: "Tennis",
    icon: "🎾",
    activeSchools: 22,
    upcomingEvents: 9,
  },
  {
    id: "hockey",
    name: "Hockey",
    icon: "🏑",
    activeSchools: 16,
    upcomingEvents: 4,
  },
  {
    id: "cross-country",
    name: "Cross Country",
    icon: "🏞️",
    activeSchools: 15,
    upcomingEvents: 3,
  },
  {
    id: "squash",
    name: "Squash",
    icon: "🎯",
    activeSchools: 12,
    upcomingEvents: 4,
  },
]

export default function SportsList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {sports.map((sport) => (
        <Link key={sport.id} href={`/sports/${sport.id}`}>
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl mb-2">{sport.icon}</span>
              <h3 className="font-medium mb-1">{sport.name}</h3>
              <div className="text-xs text-muted-foreground">
                <p>{sport.activeSchools} schools</p>
                <p>{sport.upcomingEvents} upcoming events</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
