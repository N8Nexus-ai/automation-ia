"use client"

import Link from "next/link"
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
            Automacao de processos para empresas com operacoes manuais e sistemas desconectados
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
            Automacao com <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">n8n, IA e AWS</span> para reduzir trabalho manual
          </h1>

          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Projetamos fluxos, integracoes e agentes de IA para conectar sistemas, ganhar velocidade operacional e dar mais controle a sua equipe em infraestrutura propria ou gerenciada.
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
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/servicos">
                Ver serviços
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 text-sm text-muted-foreground">
            <span>Explore por solução:</span>
            <Link href="/automacao-processos" className="text-primary hover:underline">
              Automação de Processos
            </Link>
            <span className="text-border">•</span>
            <Link href="/integracao-aws" className="text-primary hover:underline">
              Integração AWS
            </Link>
            <span className="text-border">•</span>
            <Link href="/infraestrutura-n8n" className="text-primary hover:underline">
              Infraestrutura n8n
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border animate-float">
              <Clock className="text-accent mb-4" size={32} />
              <div className="text-2xl font-bold text-foreground mb-2">99,3%</div>
              <div className="text-foreground text-center font-medium mb-1">Triagem e encaminhamento de solicitações</div>
              <div className="text-muted-foreground text-center text-sm">Exemplo de redução de tempo em rotina operacional repetitiva</div>
            </div>

            <div
              className="flex flex-col items-center p-6 bg-card rounded-xl border border-border animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <TrendingUp className="text-primary mb-4" size={32} />
              <div className="text-2xl font-bold text-foreground mb-2">142x</div>
              <div className="text-foreground text-center font-medium mb-1">Atualização e sincronização entre sistemas</div>
              <div className="text-muted-foreground text-center text-sm">Ganho observado quando o fluxo deixa de depender de lançamento manual</div>
            </div>

            <div
              className="flex flex-col items-center p-6 bg-card rounded-xl border border-border animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Zap className="text-accent mb-4" size={32} />
              <div className="text-2xl font-bold text-foreground mb-2">8h → 3min</div>
              <div className="text-foreground text-center font-medium mb-1">Consolidação e envio de informações</div>
              <div className="text-muted-foreground text-center text-sm">Exemplo de rotina que saiu de planilhas e passou a rodar em fluxo automatizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
