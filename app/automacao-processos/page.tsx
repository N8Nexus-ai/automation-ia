"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Settings, BarChart3, Clock, Target, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useContact } from "@/contexts/contact-context"

export default function AutomacaoProcessosPage() {
  const { openContactModal } = useContact()
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-0">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-6">
              Nossos Serviços
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Automação de Processos
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
              Transformamos processos manuais e repetitivos em automações inteligentes que trabalham 24/7, 
              eliminando erros humanos e liberando sua equipe para atividades estratégicas.
            </p>
          </div>
        </div>
      </section>

      {/* Process Types */}
      <section className="pt-8 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Tipos de Processos Que Automatizamos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Identificamos e automatizamos qualquer processo repetitivo da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Processos Administrativos</CardTitle>
                <CardDescription className="text-lg">
                  Automação de tarefas burocráticas e operacionais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Emissão de relatórios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Controle de estoque</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Gestão de documentos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Controle de prazos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Processos de Vendas</CardTitle>
                <CardDescription className="text-lg">
                  Automação do funil de vendas e relacionamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Qualificação de leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Follow-up automático</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Propostas personalizadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Pós-venda automatizado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Processos Financeiros</CardTitle>
                <CardDescription className="text-lg">
                  Automação de controles e análises financeiras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Conciliação bancária</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Controle de inadimplência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Análise de fluxo de caixa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Relatórios fiscais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Por Que Automatizar Seus Processos?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Veja os benefícios reais que a automação traz para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Economia de Tempo</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Reduza em até <strong>99%</strong> o tempo gasto em tarefas repetitivas. 
                <br />Economia média: <strong>40h/semana</strong>
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Eliminação de Erros</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                <strong>Zero erros</strong> em processos automatizados
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Escalabilidade</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Processe <strong>milhares</strong> de operações simultaneamente
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">ROI Comprovado</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Retorno do investimento em <strong>menos de 3 meses</strong>
                <br />ROI médio: <strong>300% no primeiro ano</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Como Automatizamos Seus Processos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodologia comprovada para transformar processos manuais em automações eficientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Mapeamento</h3>
              <p className="text-muted-foreground">
                Analisamos cada etapa do processo atual para identificar pontos de melhoria
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Desenvolvimento</h3>
              <p className="text-muted-foreground">
                Criamos a automação personalizada usando as melhores ferramentas do mercado
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Testes</h3>
              <p className="text-muted-foreground">
                Validamos a automação em ambiente controlado antes da implementação
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Implementação</h3>
              <p className="text-muted-foreground">
                Colocamos a automação em produção com monitoramento contínuo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Casos de Uso Reais
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Veja como outras empresas transformaram seus processos com nossa automação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">E-commerce</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Automação de pedidos</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  <strong>Problema:</strong> Processamento manual de 500+ pedidos/dia
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  <strong>Solução:</strong> Automação completa do fluxo de pedidos
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">99% redução</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">2h → 2min</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">Consultoria</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Gestão de leads</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  <strong>Problema:</strong> Qualificação manual de 200+ leads/semana
                </p>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  <strong>Solução:</strong> Sistema inteligente de qualificação
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">85% eficiência</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">24/7 ativo</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Pronto para Automatizar Seus Processos?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed px-4">
            Agende uma conversa gratuita e descubra quais processos da sua empresa 
            podem ser automatizados para gerar mais eficiência e economia.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 mx-4">
            <p className="text-base md:text-lg font-semibold text-primary mb-2">🚀 Oferta Especial</p>
            <p className="text-sm md:text-base text-muted-foreground">
              Consultoria gratuita de 15 minutos + Análise completa dos seus processos
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button onClick={openContactModal} size="lg" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              <Link href="/servicos">
                Ver Todos os Serviços
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
