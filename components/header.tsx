"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">Nexus.ai</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#processo" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#resultados" className="text-muted-foreground hover:text-foreground transition-colors">
              Resultados
            </a>
            <Button>Agendar Conversa</Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>
              <a href="#processo" className="text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#resultados" className="text-muted-foreground hover:text-foreground transition-colors">
                Resultados
              </a>
              <Button className="w-full">Agendar Conversa</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
