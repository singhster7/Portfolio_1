import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function Home() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "UI/UX Design", level: 75 },
    { name: "Database Design", level: 80 },
  ]

  const experiences = [
    {
      title: "Tax Technology and Transfomration Intern",
      company: "KPMG India",
      period: "August 2024-September 2024",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    },
    {
      title: "Sotware Developer Intern",
      company: "OPM Corporation",
      period: "May 2024 - July 2024",
      description:
        "Developed and maintained multiple client websites. Collaborated with designers to implement pixel-perfect UI. Worked with REST APIs and state management libraries.",
    },
    
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and Human-Computer Interaction.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Participated in multiple hackathons and coding competitions.",
    },
  ]
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

      {/* Featured About */}
      <section className="mx-2">
              <div className="relative inline-block mb-6">
                <h2 className="text-2xl font-bold">Experience & Education</h2>
                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <Tabs defaultValue="experience" className="relative">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/20 border border-white/10">
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-lg"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="text-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                  >
                    Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="space-y-6">
                  {experiences.map((exp, index) => (
                    <Card
                      key={index}
                      className="bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <CardHeader className="flex flex-row items-start gap-4 pb-2">
                        <Briefcase className="h-5 w-5 mt-1 text-primary" />
                        <div>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription>
                            {exp.company} | {exp.period}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="education" className="space-y-6">
                  {education.map((edu, index) => (
                    <Card
                      key={index}
                      className="bg-black/20 backdrop-blur-sm border border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <CardHeader className="flex flex-row items-start gap-4 pb-2">
                        <GraduationCap className="h-5 w-5 mt-1 text-primary" />
                        <div>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription>
                            {edu.institution} | {edu.period}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </section>
            {/* {skills section} */}
            <section className="mb-12 mx-2">
              <div className="relative inline-block mb-6">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 w-full bg-black/30 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                      <div
                        className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* {skills section} */}


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

