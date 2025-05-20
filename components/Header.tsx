"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./ModeToggle"

const sports = [
  { name: "Cricket", href: "/sports/cricket" },
  { name: "Athletics", href: "/sports/athletics" },
  { name: "Tennis", href: "/sports/tennis" },
  { name: "Swimming", href: "/sports/swimming" },
  { name: "Cross Country", href: "/sports/cross-country" },
  { name: "Squash", href: "/sports/squash" },
  { name: "Rugby", href: "/sports/rugby" },
  { name: "Soccer", href: "/sports/soccer" },
  { name: "Hockey", href: "/sports/hockey" },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 z-40 bg-background">
      <div className="container flex h-16 items-center px-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="items-center space-x-2 flex">
            <span className="font-bold text-xl md:text-2xl">Sports Network</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sports</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {sports.map((sport) => (
                      <li key={sport.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={sport.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{sport.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/schools" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Schools</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/fixtures" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Fixtures</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/news" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>News</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <div className={cn("search-container relative", isSearchOpen ? "flex" : "hidden md:flex")}>
            <Input type="search" placeholder="Search..." className="w-[200px] lg:w-[300px]" />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <ModeToggle />

          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/sports" className="text-lg font-medium">
                  Sports
                </Link>
                <Link href="/schools" className="text-lg font-medium">
                  Schools
                </Link>
                <Link href="/fixtures" className="text-lg font-medium">
                  Fixtures
                </Link>
                <Link href="/news" className="text-lg font-medium">
                  News
                </Link>
                <Link href="/login" className="text-lg font-medium">
                  Login
                </Link>
                <Link href="/register" className="text-lg font-medium">
                  Register
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
