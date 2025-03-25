import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Carina<span className="text-primary">Yanaze</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} Carina Yanaze. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <Link href="#home">
                <ArrowUp className="h-5 w-5" />
                <span className="sr-only">Voltar ao topo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

