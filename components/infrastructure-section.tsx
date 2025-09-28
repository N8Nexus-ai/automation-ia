"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Cloud, Shield, Zap, CheckCircle } from "lucide-react"
import { useContact } from "@/contexts/contact-context"

export function InfrastructureSection() {
  const { openContactModal } = useContact()
  const options = [
    {
      icon: Server,
      title: "Sua Própria Instância n8n",
      description: "Tenha controle total sobre sua infraestrutura de automação.",
      features: [
        "Instância n8n dedicada",
        "Acesso completo ao painel",
        "Customização total",
        "Backup personalizado",
        "Integração com sua AWS"
      ],
      pros: [
        "Controle total",
        "Customização avançada",
        "Dados em sua infraestrutura"
      ],
      cons: [
        "Requer conhecimento técnico",
        "Manutenção própria",
        "Responsabilidade de segurança"
      ],
      buttonText: "Escolher Instância Própria",
      variant: "outline" as const
    },
    {
      icon: Cloud,
      title: "Infraestrutura Gerenciada",
      description: "Deixe que cuidemos de tudo para você focar no seu negócio.",
      features: [
        "Infraestrutura AWS gerenciada",
        "Monitoramento 24/7",
        "Backup automático",
        "Atualizações automáticas",
        "Suporte técnico dedicado"
      ],
      pros: [
        "Zero preocupação técnica",
        "Suporte especializado",
        "Escalabilidade automática",
        "Segurança garantida"
      ],
      cons: [
        "Menos customização",
        "Dependência do provedor"
      ],
      buttonText: "Escolher Gerenciada",
      variant: "default" as const
    }
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Escolha sua <span className="text-primary">infraestrutura</span> ideal
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Oferecemos flexibilidade total: você pode ter sua própria instância n8n ou deixar que cuidemos de toda a infraestrutura na AWS para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                option.variant === "default" 
                  ? "border-primary/50 bg-primary/5" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {option.variant === "default" && (
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <option.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">{option.title}</CardTitle>
                <CardDescription className="text-lg">{option.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Zap className="text-primary mr-2" size={16} />
                    O que está incluído:
                  </h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-600 mb-2 flex items-center">
                      <CheckCircle className="mr-1" size={14} />
                      Vantagens
                    </h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {option.pros.map((pro, proIndex) => (
                        <li key={proIndex}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-orange-600 mb-2 flex items-center">
                      <Shield className="mr-1" size={14} />
                      Considerações
                    </h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {option.cons.map((con, conIndex) => (
                        <li key={conIndex}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  variant={option.variant}
                  size="lg"
                  onClick={openContactModal}
                >
                  {option.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não tem certeza qual opção escolher?
          </p>
          <Button variant="outline" size="lg" onClick={openContactModal}>
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
