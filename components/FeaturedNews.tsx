import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, this would come from an API
const featuredNews = [
  {
    id: 1,
    title: "Central High Wins State Championship",
    description: "Central High School's soccer team clinches the state championship in a thrilling final match.",
    date: "May 15, 2023",
    category: "Soccer",
    image: "/placeholder.svg?height=200&width=400",
    slug: "central-high-wins-championship",
  },
  {
    id: 2,
    title: "New Swimming Records Set at Regional Meet",
    description: "Multiple records broken at the Eastern Regional Swimming Championships.",
    date: "May 10, 2023",
    category: "Swimming",
    image: "/placeholder.svg?height=200&width=400",
    slug: "swimming-records-regional-meet",
  },
  {
    id: 3,
    title: "Cricket Season Preview: Teams to Watch",
    description: "Our experts analyze the top contenders for this year's high school cricket season.",
    date: "May 8, 2023",
    category: "Cricket",
    image: "/placeholder.svg?height=200&width=400",
    slug: "cricket-season-preview",
  },
]

export default function FeaturedNews() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredNews.map((news) => (
        <Card key={news.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{news.category}</Badge>
              <span className="text-xs text-muted-foreground">{news.date}</span>
            </div>
            <CardTitle className="line-clamp-2 text-xl">
              <Link href={`/news/${news.slug}`}>{news.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription className="line-clamp-2">{news.description}</CardDescription>
          </CardContent>
          <CardFooter className="p-4">
            <Link href={`/news/${news.slug}`} className="text-sm font-medium text-primary hover:underline">
              Read more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
