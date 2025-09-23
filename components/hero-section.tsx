"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react"
import { useContact } from "@/contexts/contact-context"

export function HeroSection() {
  const { openContactModal } = useContact()

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse-glow">
            <Zap size={16} />
            Sua equipe gasta horas em tarefas repetitivas?
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
            Transformamos <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">automação</span> em{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">resultados</span>
          </h1>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Construímos automações e agentes de IA que liberam sua equipe para focar no crescimento. Com integração AWS e flexibilidade total de infraestrutura n8n - você escolhe como quer trabalhar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={openContactModal}
            >
              Agendar Reunião
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border animate-float">
              <Clock className="text-accent mb-4" size={32} />
              <div className="text-2xl font-bold text-foreground mb-2">99,3%</div>
              <div className="text-muted-foreground text-center">Redução no tempo de processos</div>
            </div>

            <div
              className="flex flex-col items-center p-6 bg-card rounded-xl border border-border animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <TrendingUp className="text-primary mb-4" size={32} />
              <div className="text-2xl font-bold text-foreground mb-2">142x</div>
              <div className="text-muted-foreground text-center">Aumento na eficiência</div>
            </div>

            <div
              className="flex flex-col items-center p-6 bg-card rounded-xl border border-border animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Zap className="text-accent mb-4" size={32} />
              <div className="text-2xl font-bold text-foreground mb-2">8h → 3min</div>
              <div className="text-muted-foreground text-center">Transformação real</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
