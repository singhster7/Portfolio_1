import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "JOBSITE",
      description:
        "Full-stack job application platform designed to streamline interactions between job applicants and recruiters. ",
      image: "/image1.png?height=300&width=600&text=E-commerce+Platform",
      tags: ["NodeJS", "ExpressJS", "PassportJS","React.js","Redux","Nodemailer","JWT"],
      github: "https://github.com/singhster7/jobsite",
      category: "web",
    },
    {
      id: 6,
      title: "RIDLIN",
      description: "Ridlin is a pet services web platform that connects pet owners with local service providers. ",
      image: "/image3.png?height=300&width=600&text=E-commerce+Platform",
      tags: ["Next JS", "React", "Node.js", "PostgresQL","AWS"],
      demo: "https://ridlin.com/",
      category: "web",
    },
   
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website template for developers and designers.",
      image: "/image2.png?height=200&width=500&text=Portfolio+Website",
      tags: ["NextJS", "Typescript","Tailwind CSS", "Vercel"],
      github: "https://github.com/singhster7/Portfolio_1",
      demo: "https://sanilsingh.vercel.app/",
      category: "web",
    }, 
    {
      id: 4,
      title: "Weather Air",
      description: "Airport information lookup tool built with React, designed to fetch and display real-time airport data using ICAO codes.",
      image: "/image.png?height=300&width=600&text=Weather+Dashboard",
      tags: ["React", "AirportDB API", "JavaScript","HTML/CSS"],
      github: "https://github.com/singhster7/WeatherAir",
      
      category: "web",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A basic and minimal task management interface made using only jQuery(differentiating factor) for the backend",
      image: "/image4.png?height=300&width=600&text=Task+Management+App",
      tags: ["React", "jQuery","Material UI"],
      github: "https://github.com/singhster7/BasicToDo",
      demo: "https://665de93821f2e6074ba07540--aquamarine-moxie-5434e7.netlify.app/",
      category: "web",
    },
    
    {
      id: 5,
      title: "FORCast",
      description: " Fetches the user’s current geographic location using the Geolocation API and retrieves real-time weather conditions ",
      image: "/image5.png?height=300&width=600&text=Recipe+Finder+App",
      tags: ["JavaScript", "HTML/CSS", "API Integration"],
      github: "https://github.com/singhster7/FORcast",
      
      category: "mobile",
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

          <div className="p-6 relative z-10 ">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-black/30 hover:bg-black/40">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
            {project.showGithub !== false && project.github && (
            <Button variant="outline" size="sm" asChild className="border-white/10 bg-black/20 hover:bg-black/30 ">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
              )}
              {project.showDemo !== false && project.demo && (
                    <Button size="sm" asChild className="bg-primary/80 hover:bg-primary">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Live Demo
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

