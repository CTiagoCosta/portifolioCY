import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, pagamentos e gestão de produtos.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "Dashboard para visualização e análise de dados financeiros com gráficos interativos.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Rede social com recursos de postagens, comentários, likes e mensagens privadas.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "GraphQL", "Apollo", "MongoDB"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Real Estate App",
      description: "Aplicativo para busca e listagem de imóveis com filtros avançados e mapa interativo.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Weather Application",
      description: "Aplicativo de previsão do tempo com dados em tempo real e visualizações detalhadas.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Redux", "OpenWeather API", "Chart.js"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e relevantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                <Button asChild variant="default" size="sm" className="gap-2 flex-1">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2 flex-1">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Código
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver mais projetos no GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

