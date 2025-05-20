"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function SearchBar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}&type=${searchType}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for schools, sports, fixtures..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={searchType} onValueChange={setSearchType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Search in" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="schools">Schools</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="fixtures">Fixtures</SelectItem>
            <SelectItem value="news">News</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}
