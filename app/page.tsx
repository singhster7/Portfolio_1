import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8 inline-block">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Sanil Singh
              </span>
            </h1>
            <div className="absolute -bottom-3 left-0 h-3 w-1/2 bg-gradient-to-r from-primary/40 to-purple-500/40 blur-xl"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 relative">
            Full Stack Developer
            <div className="absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r from-primary to-transparent"></div>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I build exceptional digital experiences with modern technologies. Focused on creating intuitive, accessible,
            and performant web applications.
          </p>
          <h2 className="text-xl md:text-3xl font-medium text-muted-foreground mb-6 relative">
            Tech Stack
            <div className="absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r from-primary to-transparent"></div>
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            <Badge variant="outline" className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10">
              React
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10">
              Next.js
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10">
              TypeScript
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10">
              Node.js
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10">
              Tailwind CSS
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="relative group overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0">
              <Link href="/contact" className="flex items-center">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Button>
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
              <a href="#" download>
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="relative">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <Button variant="ghost" asChild className="group">
              <Link href="/projects" className="flex items-center">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="aspect-video bg-muted/30 relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                    alt={`Project ${project}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Project Title {project}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary" className="bg-black/30 hover:bg-black/40">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-black/30 hover:bg-black/40">
                      Node.js
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-white/10 bg-black/20 hover:bg-black/30"
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-primary/80 hover:bg-primary">
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Live Demo
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="relative inline-block mb-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                I'm a passionate developer with over 5 years of experience building web applications. I specialize in
                JavaScript technologies and love creating beautiful, functional interfaces.
              </p>

              <Button
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0"
              >
                <Link href="/about" className="flex items-center">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges.
              </p>
              <Button
                asChild
                className="group relative overflow-hidden bg-white/10 hover:bg-white/20 border border-white/20"
              >
                <Link href="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

