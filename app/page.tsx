import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedNews from "@/components/FeaturedNews"
import UpcomingEvents from "@/components/UpcomingEvents"
import SportsList from "@/components/SportsList"
import SearchBar from "@/components/SearchBar"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Your High School Sports Hub</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Stay updated with the latest fixtures, results, and news from high school sports across the country.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/sports">Explore Sports</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/schools">Find Schools</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px] bg-muted rounded-xl overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="High school sports"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <SearchBar />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured News</h2>
        <FeaturedNews />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <UpcomingEvents />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Popular Sports</h2>
        <SportsList />
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Join Sports Network</CardTitle>
            <CardDescription>Register your school to manage profiles and provide updates</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Are you a school administrator? Register your school to manage your sports profiles, post updates, and
              connect with the community.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/register">Register School</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
