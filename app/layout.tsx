import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Carina Yanaze | Desenvolvedora Full Stack",
  description:
    "Portfolio de Carina Yanaze, desenvolvedora full stack especializada em React, TypeScript, Node.js e outras tecnologias modernas.",
    generator: 'v0.dev'
}

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'