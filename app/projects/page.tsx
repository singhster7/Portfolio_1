import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=600&text=E-commerce+Platform",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "web",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "/placeholder.svg?height=300&width=600&text=Task+Management+App",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      github: "#",
      demo: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website template for developers and designers.",
      image: "/placeholder.svg?height=300&width=600&text=Portfolio+Website",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "#",
      demo: "#",
      category: "web",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=300&width=600&text=Weather+Dashboard",
      tags: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#",
      category: "web",
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description: "A mobile app that helps users find recipes based on ingredients they have.",
      image: "/placeholder.svg?height=300&width=600&text=Recipe+Finder+App",
      tags: ["React Native", "Expo", "API Integration"],
      github: "#",
      demo: "#",
      category: "mobile",
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with filtering capabilities.",
      image: "/placeholder.svg?height=300&width=600&text=Data+Visualization",
      tags: ["D3.js", "React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      category: "data",
    },
  ]

  return (
    <div className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative inline-block mb-2">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <div className="absolute -bottom-2 left-0 h-1 w-16 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
        <p className="text-xl text-muted-foreground mb-8">A collection of my recent work and personal projects</p>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-black/20 border border-white/10">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Web Apps
            </TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Mobile Apps
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Data Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ProjectGrid projects={projects} />
          </TabsContent>

          <TabsContent value="web" className="mt-6">
            <ProjectGrid projects={projects.filter((p) => p.category === "web")} />
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <ProjectGrid projects={projects.filter((p) => p.category === "mobile")} />
          </TabsContent>

          <TabsContent value="data" className="mt-6">
            <ProjectGrid projects={projects.filter((p) => p.category === "data")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

          <div className="aspect-video relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="p-6 relative z-10">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-black/30 hover:bg-black/40">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild className="border-white/10 bg-black/20 hover:bg-black/30">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
              <Button size="sm" asChild className="bg-primary/80 hover:bg-primary">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Live Demo
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

