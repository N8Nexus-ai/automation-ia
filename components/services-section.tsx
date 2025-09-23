import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Database, Workflow, MessageSquare, FileText, Users, Cloud, Server } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "Agentes de IA",
      description: "Chatbots inteligentes e assistentes virtuais que atendem seus clientes 24/7 com precisão humana.",
      features: ["Atendimento automatizado", "Qualificação de leads", "Suporte técnico"],
    },
    {
      icon: Workflow,
      title: "Automação de Processos",
      description: "Transformamos fluxos manuais em processos automatizados que funcionam sem intervenção.",
      features: ["Processamento de dados", "Integração de sistemas", "Fluxos de aprovação"],
    },
    {
      icon: Database,
      title: "Integração de Dados",
      description: "Conectamos seus sistemas e automatizamos a transferência e processamento de informações.",
      features: ["APIs personalizadas", "Sincronização de dados", "Relatórios automáticos"],
    },
    {
      icon: MessageSquare,
      title: "Automação de Marketing",
      description: "Campanhas inteligentes que se adaptam ao comportamento dos seus leads automaticamente.",
      features: ["Email marketing", "Segmentação automática", "Nutrição de leads"],
    },
    {
      icon: FileText,
      title: "Processamento de Documentos",
      description: "IA que lê, processa e organiza documentos automaticamente com precisão superior.",
      features: ["OCR inteligente", "Classificação automática", "Extração de dados"],
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Automatize o relacionamento com clientes desde o primeiro contato até o pós-venda.",
      features: ["CRM automatizado", "Follow-up inteligente", "Relatórios detalhados"],
    },
    {
      icon: Cloud,
      title: "Integração AWS",
      description: "Conectamos suas automações diretamente com a nuvem AWS para máxima escalabilidade e confiabilidade.",
      features: ["S3, Lambda, RDS", "API Gateway", "CloudWatch", "SQS/SNS"],
    },
    {
      icon: Server,
      title: "Infraestrutura n8n",
      description: "Escolha entre ter sua própria instância n8n ou deixar que cuidemos de toda a infraestrutura para você.",
      features: ["Instância própria n8n", "Infraestrutura gerenciada", "Backup automático", "Monitoramento 24/7"],
    },
  ]

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Soluções que <span className="text-primary">automatizam</span> seu negócio
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Oferecemos automações personalizadas para cada área do seu negócio, liberando sua equipe para focar no que
            realmente importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
