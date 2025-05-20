import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

// Mock data - in a real app, this would come from an API
const schools = [
  {
    id: 1,
    name: "Central High School",
    location: "Central City",
    sports: ["Cricket", "Soccer", "Rugby", "Swimming"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Riverside Preparatory",
    location: "Riverside",
    sports: ["Cricket", "Tennis", "Athletics", "Hockey"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: 3,
    name: "Westside High School",
    location: "West County",
    sports: ["Soccer", "Rugby", "Cross Country", "Squash"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    reviewCount: 112,
  },
  {
    id: 4,
    name: "Eastside Academy",
    location: "East Town",
    sports: ["Cricket", "Soccer", "Swimming", "Tennis"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    reviewCount: 87,
  },
  {
    id: 5,
    name: "North County High",
    location: "North County",
    sports: ["Rugby", "Hockey", "Athletics", "Cricket"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.4,
    reviewCount: 76,
  },
  {
    id: 6,
    name: "South Valley School",
    location: "South Valley",
    sports: ["Soccer", "Tennis", "Swimming", "Cross Country"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.3,
    reviewCount: 65,
  },
  {
    id: 7,
    name: "Mountain View High",
    location: "Mountain District",
    sports: ["Cross Country", "Athletics", "Rugby", "Soccer"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    reviewCount: 92,
  },
  {
    id: 8,
    name: "Lakeside School",
    location: "Lake City",
    sports: ["Swimming", "Cricket", "Hockey", "Tennis"],
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    reviewCount: 103,
  },
]

export default function SchoolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Schools Directory</h1>
          <p className="text-xl text-muted-foreground">
            Browse and discover schools participating in high school sports
          </p>
        </div>
        <Button asChild>
          <Link href="/schools/register">Register Your School</Link>
        </Button>
      </div>

      <div className="mb-8 p-4 bg-muted rounded-lg">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search schools by name or location..." className="pl-10" />
          </div>
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
              <SelectItem value="hockey">Hockey</SelectItem>
              <SelectItem value="cross-country">Cross Country</SelectItem>
              <SelectItem value="squash">Squash</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="rating">
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Rating (High to Low)</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {schools.map((school) => (
          <Card key={school.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={school.image || "/placeholder.svg"}
                  alt={school.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">
                <Link href={`/schools/${school.id}`}>{school.name}</Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground mb-3">{school.location}</p>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(school.rating) ? "text-yellow-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">{school.rating}</span>
                <span className="ml-2 text-xs text-muted-foreground">({school.reviewCount} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {school.sports.map((sport) => (
                  <Badge key={sport} variant="secondary">
                    {sport}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/schools/${school.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="sr-only">Previous</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            1
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            2
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8">
            3
          </Button>
          <span>...</span>
          <Button variant="outline" size="sm" className="h-8 w-8">
            8
          </Button>
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
