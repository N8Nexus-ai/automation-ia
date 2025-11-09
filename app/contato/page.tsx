"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock, MessageCircle, ExternalLink, ArrowRight, Sparkles, Calendar, CheckCircle2, Globe } from "lucide-react"
import { useContact } from "@/contexts/contact-context"

export default function ContatoPage() {
  const { openContactModal } = useContact()

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "contato@n8nexus.com.br",
      subtitle: "Resposta em até 24 horas",
      href: "mailto:contato@n8nexus.com.br?subject=Contato via Site Nexus.ai&body=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai.",
      buttonText: "Enviar Email",
      gradient: "from-primary/20 to-primary/5",
      buttonClass: "bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "+55 (11) 99009-9690",
      subtitle: "Resposta rápida via WhatsApp",
      href: "https://wa.me/5511990099690?text=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai.",
      buttonText: "Conversar no WhatsApp",
      gradient: "from-green-500/20 to-green-500/5",
      buttonClass: "bg-green-600 hover:bg-green-700 text-white"
    },
    {
      icon: Calendar,
      title: "Agendar Reunião",
      description: "Marque uma call de 15 minutos",
      subtitle: "Escolha o melhor horário para você",
      onClick: openContactModal,
      buttonText: "Abrir Agendamento",
      gradient: "from-accent/20 to-accent/5",
      buttonClass: "bg-gradient-to-r from-accent to-purple-400 hover:from-accent/90 hover:to-purple-400/90"
    },
    {
      icon: Globe,
      title: "Atendimento Remoto",
      description: "Todo o Brasil",
      subtitle: "Atendemos empresas de qualquer lugar",
      gradient: "from-primary/20 to-accent/5"
    }
  ]

  const infoCards = [
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      subtitle: "Atendimento remoto em todo o Brasil",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: (
        <div className="space-y-2">
          <p>Segunda a Sexta: <strong>9h às 18h</strong></p>
          <p>Sábado: <strong>9h às 12h</strong></p>
          <p className="text-muted-foreground">Domingo: Fechado</p>
        </div>
      ),
      gradient: "from-accent/20 to-accent/5"
    }
  ]

  const faqs = [
    {
      question: "Quanto tempo leva para implementar uma automação?",
      answer: "Depende da complexidade do projeto. Automações simples podem ser implementadas em 1-2 semanas, enquanto projetos mais complexos podem levar 1-2 meses."
    },
    {
      question: "Vocês oferecem suporte pós-implementação?",
      answer: "Sim! Oferecemos suporte completo por 3 meses após a implementação, incluindo ajustes e otimizações sem custo adicional."
    },
    {
      question: "Posso cancelar o projeto a qualquer momento?",
      answer: "Sim, você pode cancelar o projeto a qualquer momento. Cobramos apenas pelo trabalho já realizado e entregamos todo o código desenvolvido."
    },
    {
      question: "Trabalham com empresas de qualquer tamanho?",
      answer: "Sim! Atendemos desde startups até grandes corporações. Nossas soluções são escaláveis e adaptadas para cada tipo de negócio."
    }
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Hero Section */}
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles size={16} />
                Vamos conversar sobre seu projeto
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Entre em <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contato</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Pronto para transformar seu negócio? Escolha a forma que preferir para entrarmos em contato.
              </p>
            </div>

            {/* Contact Methods */}
            <section className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <method.icon className="text-primary" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {method.description}
                      </CardDescription>
                      {method.subtitle && (
                        <CardDescription className="text-sm mt-1">
                          {method.subtitle}
                        </CardDescription>
                      )}
                    </CardHeader>
                    {method.href && (
                      <CardContent className="relative z-10">
                        <Button 
                          asChild
                          className={`w-full ${method.buttonClass} group/btn`}
                        >
                          <a 
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {method.buttonText}
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </CardContent>
                    )}
                    {method.onClick && (
                      <CardContent className="relative z-10">
                        <Button 
                          onClick={method.onClick}
                          className={`w-full ${method.buttonClass} group/btn`}
                        >
                          {method.buttonText}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    )}
                    {!method.href && !method.onClick && (
                      <CardContent className="relative z-10">
                        <div className="text-center py-2">
                          <p className="text-sm text-muted-foreground italic">
                            Disponível em todo o território nacional
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infoCards.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-foreground text-lg">
                        {info.content}
                      </div>
                      {info.subtitle && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {info.subtitle}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Perguntas <span className="text-primary">Frequentes</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Tire suas dúvidas sobre nossos serviços e processos
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                          <CheckCircle2 className="text-primary" size={18} />
                        </div>
                        <CardTitle className="text-lg leading-tight">{faq.question}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed pl-11">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <CardContent className="p-12 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                    <MessageCircle className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para começar?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                    Agende uma reunião gratuita de 15 minutos e descubra como podemos automatizar seus processos.
                  </p>
                  <Button 
                    onClick={openContactModal} 
                    size="lg" 
                    className="px-8 py-6 text-lg group"
                  >
                    Agendar Reunião Gratuita
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}
