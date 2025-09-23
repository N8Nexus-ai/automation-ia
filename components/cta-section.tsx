"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"
import { useContact } from "@/contexts/contact-context"

export function CTASection() {
  const { openContactModal } = useContact()
  
  const benefits = [
    "Análise gratuita dos seus processos",
    "Identificação de oportunidades de automação",
    "Estimativa de economia de tempo e custos",
    "Roadmap personalizado para sua empresa",
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-primary" size={32} />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-balance mb-4">
                Pronto para <span className="text-primary">automatizar</span> seu negócio?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground text-balance">
                Agende uma conversa gratuita e descubra como podemos economizar horas da sua equipe com automações
                inteligentes.
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={openContactModal}
                >
                  Agendar Conversa Gratuita
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                💡 Sem compromisso • Análise gratuita • Resultados garantidos
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
