import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Globe, Calendar, Trophy } from "lucide-react"

// Mock data - in a real app, this would come from an API
const schoolsData = {
  "1": {
    id: 1,
    name: "Central High School",
    description:
      "Central High School has a rich tradition of excellence in academics and athletics. Our sports programs are designed to develop student-athletes who excel both on the field and in the classroom.",
    location: "123 Main Street, Central City",
    email: "info@centralhigh.edu",
    phone: "(555) 123-4567",
    website: "www.centralhigh.edu",
    founded: "1965",
    image: "/placeholder.svg?height=300&width=800",
    logo: "/placeholder.svg?height=150&width=150",
    sports: [
      { name: "Cricket", achievements: "State Champions 2022, 2020" },
      { name: "Soccer", achievements: "Regional Champions 2023" },
      { name: "Rugby", achievements: "State Finalists 2021, 2022" },
      { name: "Swimming", achievements: "3 National Records" },
    ],
    upcomingEvents: [
      {
        id: 1,
        title: "Central High vs Mountain View - Soccer",
        date: "June 14, 2023",
        time: "4:00 PM",
        location: "Central Stadium",
        sport: "Soccer",
      },
      {
        id: 2,
        title: "Swimming Championship",
        date: "June 15, 2023",
        time: "10:00 AM",
        location: "Olympic Pool Center",
        sport: "Swimming",
      },
    ],
    recentResults: [
      {
        id: 1,
        title: "Cricket: Central High vs Riverside Prep",
        date: "May 28, 2023",
        result: "Central High won by 5 wickets",
        sport: "Cricket",
      },
      {
        id: 2,
        title: "Rugby: Central High vs Westside High",
        date: "May 21, 2023",
        result: "Westside High won 24-21",
        sport: "Rugby",
      },
    ],
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        comment: "Excellent sports facilities and coaching staff. My child has thrived in the soccer program.",
        date: "April 15, 2023",
      },
      {
        id: 2,
        user: "Sarah M.",
        rating: 4,
        comment: "Great cricket program with dedicated coaches. Could use some improvements in the facilities.",
        date: "March 22, 2023",
      },
      {
        id: 3,
        user: "Michael T.",
        rating: 5,
        comment: "The swimming program is top-notch. Coaches are professional and supportive.",
        date: "February 10, 2023",
      },
    ],
  },
  // Add more schools as needed
}

export default function SchoolPage({ params }: { params: { id: string } }) {
  const schoolId = params.id
  const school = schoolsData[schoolId as keyof typeof schoolsData]

  if (!school) {
    notFound()
  }

  // Calculate average rating
  const avgRating = school.reviews.reduce((acc, review) => acc + review.rating, 0) / school.reviews.length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative mb-8 rounded-xl overflow-hidden">
        <div className="aspect-[21/9] w-full">
          <img src={school.image || "/placeholder.svg"} alt={school.name} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 flex items-end">
          <div className="mr-6 bg-background rounded-lg p-2 border">
            <img
              src={school.logo || "/placeholder.svg"}
              alt={`${school.name} logo`}
              className="w-24 h-24 object-contain"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{school.name}</h1>
            <div className="flex items-center text-white">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{school.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About {school.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{school.description}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{school.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{school.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{school.website}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>Founded: {school.founded}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="sports" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="sports">Sports Programs</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
              <TabsTrigger value="results">Recent Results</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="sports">
              <div className="grid gap-4 sm:grid-cols-2">
                {school.sports.map((sport, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-medium mb-2">{sport.name}</h3>
                          <div className="flex items-center text-sm">
                            <Trophy className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{sport.achievements}</span>
                          </div>
                        </div>
                        <Badge>{sport.name}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-4">
                {school.upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h3 className="text-xl font-medium mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>
                                {event.date}, {event.time}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge>{event.sport}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results">
              <div className="space-y-4">
                {school.recentResults.map((result) => (
                  <Card key={result.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h3 className="text-xl font-medium mb-2">{result.title}</h3>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{result.date}</span>
                            </div>
                            <div className="flex items-center font-medium">
                              <span>{result.result}</span>
                            </div>
                          </div>
                        </div>
                        <Badge>{result.sport}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {school.gallery.map((image, index) => (
                  <div key={index} className="aspect-square rounded-md overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${school.name} gallery image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Reviews & Ratings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(avgRating) ? "text-yellow-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xl font-bold">{avgRating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground ml-2">({school.reviews.length} reviews)</span>
              </div>

              <div className="space-y-4">
                {school.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{review.user}</div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm mb-1">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4">Write a Review</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact {school.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input id="name" className="w-full p-2 border rounded-md" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border rounded-md min-h-[100px]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
