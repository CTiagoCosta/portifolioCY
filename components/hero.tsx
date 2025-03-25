"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Desenvolvedora Full Stack"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <p className="text-primary font-medium mb-2">Olá, eu sou</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Carina Yanaze</h1>
          <div className="h-8 mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-2xl mb-8">
            Especializada em criar aplicações web modernas e responsivas utilizando React, TypeScript, Node.js e outras
            tecnologias atuais.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button asChild>
              <Link href="#contact">Entre em contato</Link>
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Baixar CV
            </Button>
          </div>

          <div className="flex space-x-4 mb-16">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="mailto:carina.yanaze@exemplo.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" asChild className="animate-bounce">
            <Link href="#about">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Rolar para baixo</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

