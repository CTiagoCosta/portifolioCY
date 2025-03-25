import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Code2, Globe, Laptop } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e experiência profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg border border-border">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Foto da desenvolvedora"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Carina Yanaze</h3>
            <p className="text-muted-foreground mb-6">
              Sou uma desenvolvedora full stack apaixonada por criar soluções web inovadoras e eficientes. Com mais de 5
              anos de experiência no desenvolvimento de aplicações web, tenho trabalhado com as tecnologias mais
              recentes e melhores práticas do mercado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Experiência</p>
                    <p className="text-sm text-muted-foreground">5+ anos</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Projetos</p>
                    <p className="text-sm text-muted-foreground">30+ concluídos</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Laptop className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Especialidade</p>
                    <p className="text-sm text-muted-foreground">React & Node.js</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Disponibilidade</p>
                    <p className="text-sm text-muted-foreground">Remoto / Híbrido</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button>Baixar Currículo Completo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

