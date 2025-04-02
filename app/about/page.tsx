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
                <div className="relative aspect-square rounded-full overflow-hidden mb-6 bg-black/50 backdrop-blur-sm border border-white/10">
                  <img
                    src="/placeholder1.jpeg?height=400&width=400"
                    alt="John Doe"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Sanil Singh</h2>
              <p className="text-muted-foreground mb-4">Software Developer</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground">(Open to all)</span>
                  <span className="text-muted-foreground">Preferred - Bengaluru,Hyderabad,Pune</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <span className="text-muted-foreground">sanilsingh3008@gmail.com</span>
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
                <h1 className="text-xl font-bold">Professional Career</h1>

                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </div>
              <div className="space-y-4 text-muted-foreground">
              <p> I'm a dedicated software developer with experience in full-stack development, AI, and web automation. My journey started with hands-on projects, including a web automation tool during my internship at KPMG. </p> <p> I've worked with various technologies, from building AI-based applications like a virtual mouse to practical solutions like a kitchen inventory management app. I enjoy solving real-world problems with software, leveraging my expertise in data management, automation, and backend systems. </p> <p> Currently, I’m exploring opportunities in tech consulting at EY GDS while working on mapping houses in tier-2 cities for better identification. When I’m not coding, I enjoy keeping up with the latest tech trends and optimizing solutions for efficiency. </p>
              <h1 className="text-xl font-bold">Apart from Coding</h1>
                            <p className="font-bold">I know alot about cars, so hit me up if you or someone you know is planning to buy a car.😉 </p>
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

            
          </div>
        </div>
      </div>
    </div>
  )
}

