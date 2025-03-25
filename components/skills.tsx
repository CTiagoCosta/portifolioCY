import { Card, CardContent } from "@/components/ui/card"
import { Braces, Database, FileCode2, Globe, LayoutGrid, Server, Smartphone, Workflow } from "lucide-react"

export default function Skills() {
  const frontendSkills = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "NestJS", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 70 },
  ]

  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutGrid className="h-10 w-10 text-primary" />,
      description: "Desenvolvimento de interfaces modernas e responsivas com React e Next.js",
    },
    {
      title: "Backend",
      icon: <Server className="h-10 w-10 text-primary" />,
      description: "Criação de APIs RESTful e GraphQL com Node.js e Express",
    },
    {
      title: "Banco de Dados",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Modelagem e otimização de bancos de dados SQL e NoSQL",
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      description: "Desenvolvimento de aplicativos móveis com React Native",
    },
    {
      title: "DevOps",
      icon: <Workflow className="h-10 w-10 text-primary" />,
      description: "CI/CD, Docker, AWS e implantação automatizada",
    },
    {
      title: "Web",
      icon: <Globe className="h-10 w-10 text-primary" />,
      description: "SEO, performance e otimização de aplicações web",
    },
    {
      title: "Linguagens",
      icon: <Braces className="h-10 w-10 text-primary" />,
      description: "JavaScript, TypeScript, Python e conhecimentos em Rust",
    },
    {
      title: "Ferramentas",
      icon: <FileCode2 className="h-10 w-10 text-primary" />,
      description: "Git, VS Code, Figma, Jira e metodologias ágeis",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Minhas Habilidades</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas com as quais trabalho no dia a dia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Frontend</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Backend</h3>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border border-border">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

