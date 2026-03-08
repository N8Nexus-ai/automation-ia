import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Workflow, Server, Database, LayoutDashboard, Zap, Cloud, Bot } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Workflow,
      title: "Automação de Processos",
      description: "Automações simples e diretas para conectar sistemas e eliminar trabalho manual. Você escolhe o escopo.",
      features: ["Workflows n8n", "Integração de sistemas", "Automação ponta-a-ponta", "Escolha seu escopo"],
      link: "/servicos/orquestracao-integracao",
      color: "primary"
    },
    {
      icon: Layers,
      title: "Plataformas Sob Medida",
      description: "Soluções completas opcionais: API, Banco de Dados e Painel de Controle. Para quem precisa de mais.",
      features: ["Arquitetura completa", "API + Banco de Dados", "Painel de controle visual", "Gerenciamento completo"],
      link: "/servicos/plataformas-sob-medida",
      color: "accent"
    },
    {
      icon: Server,
      title: "Infraestrutura Flexível",
      description: "On-premise ou nuvem gerenciada. Suporte contínuo e manutenção para garantir disponibilidade 24/7.",
      features: ["On-premise ou nuvem", "Monitoramento 24/7", "Contratos de sustentação", "Backup automático"],
      link: "/servicos/infraestrutura-flexivel",
      color: "primary"
    },
  ]

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Soluções que <span className="text-primary">automatizam</span> seu negócio
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Comece por uma automacao critica ou evolua para uma arquitetura completa com integracoes, infraestrutura n8n e camadas em AWS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="group">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full group-hover:shadow-xl group-hover:ring-2 group-hover:ring-primary group-hover:ring-offset-2 group-hover:ring-offset-background">
                <CardHeader>
                  <div className={`w-14 h-14 ${service.color === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={service.color === "primary" ? "text-primary" : "text-accent"} size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 ${service.color === "primary" ? "bg-primary" : "bg-accent"} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Secondary Services */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Serviços Complementares</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções especializadas que complementam nossas plataformas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">APIs Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Desenvolvimento de APIs personalizadas para conectar seus sistemas</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LayoutDashboard className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Painéis de Controle</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Criamos painéis visuais para você gerenciar e disparar automações manualmente com um clique</CardDescription>
              </CardContent>
            </Card>

            <Link href="/integracao-aws" className="group">
              <Card className="bg-card border-border hover:border-primary/30 transition-all h-full group-hover:shadow-lg">
                <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="text-accent" size={24} />
                </div>
                <CardTitle className="text-lg">Integração AWS</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Lambda, S3, RDS e outros serviços AWS</CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/infraestrutura-n8n" className="group">
              <Card className="bg-card border-border hover:border-primary/30 transition-all h-full group-hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Server className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">Infraestrutura n8n</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Ambientes proprios ou gerenciados para rodar automacoes com estabilidade</CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Card className="bg-card border-border hover:border-primary/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-accent" size={24} />
                </div>
                <CardTitle className="text-lg">Agentes de IA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Chatbots e assistentes inteligentes para suporte</CardDescription>
              </CardContent>
            </Card>

            <Link href="/blog/openclaw-como-funciona-e-quando-usar-com-n8n" className="group">
              <Card className="bg-card border-border hover:border-primary/30 transition-all h-full group-hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">OpenClaw</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Camada conversacional para agentes pessoais e automacoes ad hoc com IA</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
