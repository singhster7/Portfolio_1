import { Briefcase, GraduationCap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
      title: "Software Developer Intern",
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
    <div className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="relative inline-block mb-8">
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="absolute -bottom-2 left-0 h-1 w-16 bg-gradient-to-r from-primary to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-black/50 backdrop-blur-sm border border-white/10">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="John Doe"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground mb-4">Full Stack Developer with 7+ years of experience</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <span className="text-muted-foreground">hello@example.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Available for:</span>
                  <span className="text-muted-foreground">Freelance, Full-time</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <section className="mb-12">
              <div className="relative inline-block mb-4">
                <h2 className="text-2xl font-bold">My Story</h2>
                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate full stack developer with over 7 years of experience in building web applications. My
                  journey in web development started during my university years when I built my first website for a
                  local business.
                </p>
                <p>
                  Since then, I've worked with various technologies and frameworks, always staying up-to-date with the
                  latest trends and best practices. I specialize in creating responsive, accessible, and performant web
                  applications that provide exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new
                  technologies. I'm always eager to learn and take on new challenges.
                </p>
              </div>
            </section>

            <section className="mb-12">
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

            <section>
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
          </div>
        </div>
      </div>
    </div>
  )
}

