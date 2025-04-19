import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Description } from "@radix-ui/react-toast"


export default function Home() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React & Next.js", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "Database Design", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "UI/UX Design", level: 75 },
    ,
  ]

  const experiences = [
    {
      title: "Technology and Transformation Intern",
      company: "KPMG India",
      period: "August 2024-September 2024",
      description:
        "Developed automation scripts and web-based tools using Python and Selenium to streamline tax-related processes, reducing manual input by 40%. Built a document sorter and bulk mailer tool with error logging for efficient data management and communication.",
    },
    {
      title: "Sotware Developer Intern",
      company: "OPM Corporation",
      period: "May 2024 - July 2024",
      description:
        " Optimized frontend and backend components, ensuring seamless user experienceand efficient data handling.Integrated and optimized RESTful APIs, ensuring smooth data exchange between frontend and backend systems",
        
    
      },
    
  ]

  const education = [
    {
      degree: "Bachelors of Technology",
      institution: "Kalinga Institute Of Industrial Technology, Bhubaneshwar",
      period: "2021 - 2025",
      description:"Course-Computer Science and Communication Engineering"
     
    },
    {
      degree: "AISSCE (Class 12th)",
      institution: "Delhi Public School Patna",
      period: "2019 - 2021",
      description: "Course-Physics,Chemistry,Mathematics,English",
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
            Full Stack Developer | Aspiring Software Engineer
            <div className="absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r from-primary to-transparent"></div>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I build exceptional digital experiences with modern technologies.
            Focused on creating intuitive, accessible, and performant solutions.
          </p>
          <h2 className="text-xl md:text-3xl font-medium text-muted-foreground mb-6 relative">
            Tech Stack
            <div className="absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r from-primary to-transparent"></div>
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge
              variant="outline"
              className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10"
            >
              React
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10"
            >
              Next.js
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10"
            >
              PostgreSQL
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10"
            >
              Node.js
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-xl bg-primary/5 border-primary/20 hover:bg-primary/10"
            >
              Python
            </Badge>
          </div>


          {/* links on front page */}
          <div className="pt-4 border-t border-white/10">
            <h2 className="text-xl md:text-3xl font-medium text-muted-foreground mb-6 relative">Connect with me</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/singhster7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-black/30 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Github className="h-9 w-9" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanil-singh-3b7b0a225/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-black/30 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Linkedin className="h-9 w-9" />
              </a>
              
              <a
                href="mailto:sanilsingh3008@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full bg-black/30 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Mail className="h-9 w-9" />
              </a>
            </div>
          </div>

          

          <div className="flex flex-col sm:flex-row gap-4 mx-2">
            <a href="/contact" className="flex items-center">
              <Button className="relative group overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0">
                Contacts
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1g5Spe10dpMV4jHWzVAEoz_AVdCnwhgva
"
                download
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured About */}
      <section className="mx-1">
        <div className="relative inline-block mb-6">
          <h2 className="text-2xl font-bold">Experience & Education</h2>
          <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
        <Tabs defaultValue="experience" className="relative">
          <TabsList  className=" grid w-full grid-cols-2 mb-6 bg-black rounded-md overflow-hidden h-12 border border-white/10">
            <TabsTrigger
              value="experience"
              className=" data-[state=active]:bg-primary/20 data-[state=active]:text-primary text-lg"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className=" text-lg data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
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
      <section className="py-4 px-4">
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
                I'm a passionate developer with over 5 years of experience
                building web applications. I specialize in JavaScript
                technologies and love creating beautiful, functional interfaces.
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
          <div className="relative bg-gradient-to-br from-primary/20 to-yellow-500/20 backdrop-blur-sm border border-white/10 rounded-xl p-8 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
                Have a project in mind or want to discuss potential
                opportunities? I'm always open to new challenges.
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
  );
}

