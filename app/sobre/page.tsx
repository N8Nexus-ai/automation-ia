"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Zap, Award } from "lucide-react"
import { useContact } from "@/contexts/contact-context"

export default function SobrePage() {
  const { openContactModal } = useContact()
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Desenhar e construir a solução exata que o cliente precisa para automatizar processos, eliminando erros manuais e otimizando custos e tempo."
    },
    {
      icon: Zap,
      title: "Visão",
      description: "Ser reconhecido como parceiro estratégico que oferece desde automações simples até plataformas completas, resolvendo desafios de negócio com tecnologia adequada ao que cada cliente precisa."
    },
    {
      icon: Award,
      title: "Valores",
      description: "Arquitetura primeiro, flexibilidade total, impacto mensurável. Resolvemos o problema de negócio — a tecnologia é o meio, não o fim."
    }
  ]


  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Sobre a <span className="text-primary">Nexus.ai</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Lideramos a Arquitetura e o desenvolvimento de Automações. Nossa missão é desenhar e construir 
              a solução exata que o cliente precisa — desde automações simples até plataformas completas ponta-a-ponta. 
              Você escolhe o escopo; nós entregamos o resultado.
            </p>
          </div>

          {/* Nossa História */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Do Simples ao Completo</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    A Nexus.ai oferece <strong>flexibilidade total</strong>. Você pode escolher apenas uma automação 
                    simples para conectar sistemas, ou uma solução completa ponta-a-ponta com API, Banco de Dados e 
                    Painel de Controle visual. O importante é resolver seu desafio de negócio.
                  </p>
                  <p>
                    <strong>Automação Simples:</strong> Workflows n8n que conectam seus sistemas e eliminam trabalho manual. 
                    Ideal para quem precisa de automação rápida e direta.
                  </p>
                  <p>
                    <strong>Plataforma Completa:</strong> Para empresas que precisam de mais, construímos a solução completa 
                    ponta-a-ponta: Back-end (APIs e Banco de Dados), orquestrador (n8n) e Painel de Controle visual. 
                    Permite que equipes não-técnicas gerenciem processos complexos com um clique.
                  </p>
                  <p>
                    Você escolhe: apenas automação ou plataforma completa. Integramos à sua infraestrutura interna ou 
                    cuidamos de toda a hospedagem e gerenciamento. Flexibilidade total, resultado garantido.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-gray-700">Projetos Concluídos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">99.3%</div>
                    <div className="text-gray-700">Redução de Tempo</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-700">Suporte Disponível</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-700">Ponta-a-Ponta</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Valores */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>


          {/* Tecnologias */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Nossa Stack Tecnológica</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Arquitetura de Soluções",
                "APIs Personalizadas",
                "Banco de Dados",
                "Painéis de Controle",
                "n8n Workflow Automation",
                "AWS Cloud Services",
                "OpenAI & IA Generativa",
                "Docker & Containers"
              ].map((tech, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-sm font-semibold">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Pronto para transformar seu negócio?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Vamos conversar sobre como podemos automatizar seus processos e acelerar seu crescimento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={openContactModal} size="lg" className="px-8 py-4 text-lg">
                    Agendar Reunião
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      
      <FooterLight />
    </main>
  )
}
