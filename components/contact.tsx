"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "carina.yanaze@exemplo.com",
      link: "mailto:carina.yanaze@exemplo.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone",
      value: "+55 (11) 98765-4321",
      link: "tel:+5511987654321",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Localização",
      value: "São Paulo, Brasil",
      link: "https://maps.google.com/?q=São+Paulo",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com",
      label: "Twitter",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar? Envie uma mensagem!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <Link
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={item.title === "Localização" ? "_blank" : undefined}
                        rel={item.title === "Localização" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button key={social.label} variant="outline" size="icon" asChild className="rounded-full">
                      <Link href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>

                  {submitSuccess && (
                    <div className="p-3 bg-green-100 text-green-800 rounded-md text-center">
                      Mensagem enviada com sucesso! Entrarei em contato em breve.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

