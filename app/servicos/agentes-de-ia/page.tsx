"use client"

import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Bot, Brain, MessageSquare, Target, Zap, Users, ArrowLeft } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function AgentesIAPage() {
  const { openContactModal } = useContact()

  const useCases = [
    {
      icon: MessageSquare,
      title: "Atendimento ao Cliente 24/7",
      description: "Chatbots inteligentes que respondem dúvidas, resolvem problemas e entregam informações instantaneamente.",
      benefits: [
        "Resposta imediata a perguntas",
        "Escala para milhares de conversas simultâneas",
        "Disponibilidade total sem parar"
      ],
      color: "primary",
      bgColor: "bg-primary/5",
      iconBg: "bg-primary/10"
    },
    {
      icon: Target,
      title: "Qualificação de Leads",
      description: "Agentes de IA que identificam, qualificam e priorizam leads qualificados automaticamente.",
      benefits: [
        "Identificação de intenção de compra",
        "Coleta automática de informações",
        "Nutrição personalizada de leads"
      ],
      color: "accent",
      bgColor: "bg-accent/5",
      iconBg: "bg-accent/10"
    },
    {
      icon: Brain,
      title: "Suporte Técnico Inteligente",
      description: "Assistentes virtuais que resolvem problemas técnicos com base em bases de conhecimento.",
      benefits: [
        "Solução de problemas comuns",
        "Guia passo a passo automatizado",
        "Escalação inteligente quando necessário"
      ],
      color: "primary",
      bgColor: "bg-primary/5",
      iconBg: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Gestão de Relacionamento",
      description: "IA que gerencia relacionamento com clientes e prospects de forma personalizada.",
      benefits: [
        "Follow-up automatizado",
        "Histórico completo de interações",
        "Segmentação dinâmica"
      ],
      color: "accent",
      bgColor: "bg-accent/5",
      iconBg: "bg-accent/10"
    }
  ]

  const features = [
    "Processamento de linguagem natural (NLP)",
    "Integração com WhatsApp, Telegram, Messenger",
    "Personalização baseada em perfil do cliente",
    "Análise de sentimento em tempo real",
    "Escalabilidade automática na AWS",
    "Múltiplos idiomas suportados"
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <article className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/servicos"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Voltar aos Serviços</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge className="bg-gray-900 text-white px-4 py-1.5">
                Serviços
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-gray-900">
              Agentes de IA
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Chatbots inteligentes e assistentes virtuais que atendem seus clientes 24/7 com precisão humana, 
              reduzindo custos em até 89% comparado a equipes humanas.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">89%</div>
              <div className="text-sm text-gray-600">Economia de Custos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">0.3s</div>
              <div className="text-sm text-gray-600">Tempo de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm text-gray-600">Conversas Simultâneas</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que são Agentes de IA?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Agentes de IA são sistemas inteligentes que utilizam processamento de linguagem natural (NLP) 
              e machine learning para interagir com clientes de forma natural e contextualizada. Diferente 
              de chatbots tradicionais, nossos agentes aprendem com cada interação e se adaptam ao perfil 
              de cada cliente.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Soluções Personalizadas</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Criamos agentes de IA sob medida para diferentes necessidades do seu negócio:
            </p>
          </div>

          {/* Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {useCases.map((useCase, index) => {
              const iconColor = useCase.color === "primary" ? "text-primary" : "text-accent"
              const checkColor = useCase.color === "primary" ? "text-primary" : "text-accent"
              return (
                <Card key={index} className={`border-2 border-transparent hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden ${useCase.bgColor}`}>
                  <CardHeader>
                    <div className={`w-14 h-14 ${useCase.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <useCase.icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-gray-900 mb-2 font-bold">{useCase.title}</CardTitle>
                    <CardDescription className="text-gray-700">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${checkColor}`} />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tecnologia de Ponta</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Utilizamos as mais avançadas tecnologias de IA para garantir resultados excepcionais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const isPrimary = index % 2 === 0
                const bgColor = isPrimary ? "bg-primary/5" : "bg-accent/5"
                const iconColor = isPrimary ? "text-primary" : "text-accent"
                return (
                  <div key={index} className={`flex items-start gap-3 p-4 ${bgColor} rounded-lg border-2 border-transparent hover:border-primary/30 transition-all`}>
                    <CheckCircle className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para Revolucionar Seu Atendimento?
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                Agende uma conversa gratuita e descubra como nossos agentes de IA podem 
                transformar seu relacionamento com clientes.
              </p>
              <Button 
                onClick={openContactModal} 
                size="lg" 
                className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90 text-white shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Reunião Gratuita
              </Button>
            </div>
          </div>
        </div>
      </article>
      
      <FooterLight />
    </main>
  )
}
