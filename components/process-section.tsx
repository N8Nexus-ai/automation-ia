import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Search, Cog, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Conversa Inicial",
      description: "Entendemos sua dor, processos manuais e resultados esperados em uma reunião gratuita.",
      duration: "15 min",
    },
    {
      icon: Search,
      title: "Análise Detalhada",
      description: "Mapeamos seus fluxos atuais e identificamos oportunidades de automação com maior impacto.",
      duration: "2-3 dias",
    },
    {
      icon: Cog,
      title: "Desenvolvimento",
      description: "Construímos a automação ou agente de IA personalizado para suas necessidades específicas.",
      duration: "1-3 semanas",
    },
    {
      icon: Rocket,
      title: "Implementação",
      description: "Colocamos a solução em produção e treinamos sua equipe para máximo aproveitamento.",
      duration: "1 semana",
    },
  ]

  return (
    <section id="processo" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Como <span className="text-primary">transformamos</span> seu negócio
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Um processo simples e transparente que garante resultados mensuráveis em poucas semanas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-primary" size={28} />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <div className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <Rocket size={16} />
            Resultados visíveis em até 4 semanas
          </div>
        </div>
      </div>
    </section>
  )
}
