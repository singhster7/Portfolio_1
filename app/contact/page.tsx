"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import  toast,{Toaster}  from "react-hot-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
console.log("promise chala")
toast('Thanks . Sanil will contact you soon.');

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative inline-block mb-2">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <div className="absolute -bottom-2 left-0 h-1 w-16 bg-gradient-to-r from-primary to-transparent"></div>
        </div>
        <p className="text-xl text-muted-foreground mb-12">Have a question or want to work together? Get in touch!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
              <div className="relative bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Send a Message or <a href="mailto:sanilsingh3008@gmail.com" className="text-purple-600 underline">Mail Me</a>
                  <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/30 border-white/10 focus:border-primary/50 focus:ring-primary/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/30 border-white/10 focus:border-primary/50 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-white/10 focus:border-primary/50 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-black/30 border-white/10 focus:border-primary/50 focus:ring-primary/50"
                    />
                  </div>
                  <Button
                    type="submit"
                  
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4"
                           /> Send Message
                            <Toaster />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6 h-full">
              <h2 className="text-2xl font-bold mb-6 relative inline-block">
                Contact Info
                <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-to-r from-primary to-transparent"></div>
              </h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                     <a href="mailto:sanilsingh3008@gmail.com"> <p className="text-muted-foreground">sanilsingh3008@gmail.com</p>
                     </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">+91 9939332348</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Current Location</h3>
                      <p className="text-muted-foreground">Bangalore,IND</p>
                      <p className="font-medium">Open to - Hyderabad,Pune,Noida</p>
                    </div>
                  </div>
                </div>

                

                <div className="pt-4 border-t border-white/10">
                  <h3 className="font-medium mb-3">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and full-time positions. My typical response time is
                    within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

