import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js App Router",
      excerpt: "Learn how to build modern web applications with Next.js App Router and server components.",
      date: "March 15, 2023",
      readTime: "5 min read",
      author: "John Doe",
      image: "/placeholder.svg?height=250&width=500&text=Next.js+App+Router",
      slug: "getting-started-with-nextjs-app-router",
    },
    {
      id: 2,
      title: "Building Accessible Web Applications",
      excerpt:
        "Accessibility is not just a nice-to-have feature. Learn how to make your web apps accessible to everyone.",
      date: "April 22, 2023",
      readTime: "8 min read",
      author: "John Doe",
      image: "/placeholder.svg?height=250&width=500&text=Accessible+Web+Apps",
      slug: "building-accessible-web-applications",
    },
    {
      id: 3,
      title: "State Management in React: A Comprehensive Guide",
      excerpt: "Explore different state management solutions in React and when to use each one.",
      date: "May 10, 2023",
      readTime: "10 min read",
      author: "John Doe",
      image: "/placeholder.svg?height=250&width=500&text=React+State+Management",
      slug: "state-management-in-react",
    },
    {
      id: 4,
      title: "Optimizing Performance in Web Applications",
      excerpt: "Learn techniques and best practices to improve the performance of your web applications.",
      date: "June 5, 2023",
      readTime: "7 min read",
      author: "John Doe",
      image: "/placeholder.svg?height=250&width=500&text=Web+Performance",
      slug: "optimizing-performance-in-web-applications",
    },
  ]

  return (
    <div className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative inline-block mb-2">
          <h1 className="text-4xl font-bold">Blog</h1>
          <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
        <p className="text-xl text-muted-foreground mb-8">Thoughts, tutorials, and insights on web development</p>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img
                  src="/placeholder.svg?height=400&width=800&text=Featured+Post"
                  alt="Featured blog post"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    <Link href="/blog/featured-post-slug" className="hover:text-primary transition-colors">
                      The Future of Web Development: Trends to Watch in 2023
                    </Link>
                  </h2>
                  <p className="mb-4 text-white/80">
                    Explore the emerging technologies and methodologies that are shaping the future of web development.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      July 1, 2023
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      12 min read
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      John Doe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Search
                <div className="absolute -bottom-1 left-0 h-px w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </h3>
              <div className="relative mb-6">
                <Input type="search" placeholder="Search articles..." className="w-full bg-black/30 border-white/10" />
              </div>

              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Categories
                <div className="absolute -bottom-1 left-0 h-px w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </h3>
              <div className="space-y-1 mb-6">
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  All Posts
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  React
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  Next.js
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  JavaScript
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  Web Design
                </Button>
              </div>

              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Subscribe
                <div className="absolute -bottom-1 left-0 h-px w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </h3>
              <p className="text-muted-foreground mb-4">Get the latest posts delivered right to your inbox.</p>
              <div className="space-y-2">
                <Input type="email" placeholder="Your email address" className="w-full bg-black/30 border-white/10" />
                <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative inline-block mb-6">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <Button variant="ghost" asChild className="group hover:bg-primary/10 hover:text-primary p-0">
                  <Link href={`/blog/${post.slug}`} className="flex items-center">
                    Read More
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="border-white/10 bg-black/20 hover:bg-black/30">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  )
}

