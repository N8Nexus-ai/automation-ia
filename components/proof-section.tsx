import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock3, DatabaseZap, MessageSquareText } from "lucide-react"

export function ProofSection() {
  const cases = [
    {
      icon: Clock3,
      title: "Atendimento e triagem",
      outcome: "99,3% menos tempo operacional",
      description:
        "Fluxos que recebem solicitações, classificam prioridade, acionam responsáveis e registram tudo sem repasse manual.",
    },
    {
      icon: DatabaseZap,
      title: "Integração entre sistemas",
      outcome: "142x mais velocidade na atualização",
      description:
        "Rotinas que sincronizam CRM, ERP, planilhas e painéis para reduzir divergência de dados e retrabalho.",
    },
    {
      icon: MessageSquareText,
      title: "Consolidação e envio de informações",
      outcome: "De 8 horas para 3 minutos",
      description:
        "Processos de consolidacao, validacao e disparo de dados que antes dependiam de planilhas e acompanhamento manual.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Casos tipicos de <span className="text-primary">ganho operacional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nao sao promessas vagas. Sao cenarios recorrentes em que automacao, integracao e infraestrutura bem montada geram resultado visivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <Card key={item.title} className="bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-primary font-semibold mb-3">{item.outcome}</div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
