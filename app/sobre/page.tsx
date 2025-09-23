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
      description: "Democratizar a automação de processos através de soluções de IA acessíveis e eficientes, liberando o potencial humano para atividades estratégicas."
    },
    {
      icon: Zap,
      title: "Visão",
      description: "Ser a referência em automação inteligente no Brasil, transformando a forma como empresas operam e crescem através da tecnologia."
    },
    {
      icon: Award,
      title: "Valores",
      description: "Inovação, transparência, excelência técnica e foco no cliente. Acreditamos que a tecnologia deve servir ao ser humano, não o contrário."
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
              Somos especialistas em automação inteligente, transformando processos complexos em soluções simples e eficientes através da IA.
            </p>
          </div>

          {/* Nossa História */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Nossa História</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    A Nexus.ai nasceu da visão de que a automação não deveria ser um privilégio de grandes corporações. 
                    Fundada em 2024, nossa missão é democratizar o acesso a soluções de IA e automação.
                  </p>
                  <p>
                    Com expertise em n8n, AWS e tecnologias de ponta, desenvolvemos soluções personalizadas que 
                    transformam a forma como empresas operam, liberando tempo e recursos para o que realmente importa.
                  </p>
                  <p>
                    Acreditamos que a tecnologia deve servir ao ser humano, não o contrário. Por isso, 
                    criamos automações que são intuitivas, eficientes e verdadeiramente úteis.
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
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Tecnologias que Dominamos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "n8n Workflow Automation",
                "AWS Cloud Services",
                "OpenAI & IA Generativa",
                "Node.js & JavaScript",
                "Python & Machine Learning",
                "Docker & Containers",
                "APIs & Integrações",
                "Bancos de Dados"
              ].map((tech, index) => (
                <div key={index} className="bg-card border rounded-lg p-4 text-center">
                  <div className="text-sm font-medium text-gray-700">
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Pronto para transformar seu negócio?
                </h3>
                <p className="text-gray-700 mb-6">
                  Vamos conversar sobre como podemos automatizar seus processos e acelerar seu crescimento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={openContactModal} size="lg" className="px-8 py-4 text-lg">
                    Agendar Conversa Gratuita
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
