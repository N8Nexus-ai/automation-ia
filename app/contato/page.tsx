import { Header } from "@/components/header"
import { FooterLight } from "@/components/footer-light"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pronto para transformar seu negócio? Entre em contato conosco através dos canais abaixo.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">contato@n8nexus.com.br</p>
                  <p className="text-sm text-gray-500 mb-4">Resposta em até 24 horas</p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-indigo-400 hover:from-primary/90 hover:to-indigo-400/90"
                  >
                    <a 
                      href="mailto:contato@n8nexus.com.br?subject=Contato via Site Nexus.ai&body=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Email
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">+55 (11) 99009-9690</p>
                  <p className="text-sm text-gray-500 mb-4">Resposta rápida via WhatsApp</p>
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a 
                      href="https://wa.me/5511990099690?text=Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Conversar no WhatsApp
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">São Paulo, SP - Brasil</p>
                  <p className="text-sm text-gray-500 mt-1">Atendimento remoto em todo o Brasil</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-gray-700">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Rápido */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
              Perguntas Frequentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardTitle className="text-lg mb-3">Quanto tempo leva para implementar uma automação?</CardTitle>
                <p className="text-gray-700">
                  Depende da complexidade do projeto. Automações simples podem ser implementadas em 1-2 semanas, 
                  enquanto projetos mais complexos podem levar 1-2 meses.
                </p>
              </Card>

              <Card className="p-6">
                <CardTitle className="text-lg mb-3">Vocês oferecem suporte pós-implementação?</CardTitle>
                <p className="text-gray-700">
                  Sim! Oferecemos suporte completo por 3 meses após a implementação, incluindo ajustes e 
                  otimizações sem custo adicional.
                </p>
              </Card>

              <Card className="p-6">
                <CardTitle className="text-lg mb-3">Posso cancelar o projeto a qualquer momento?</CardTitle>
                <p className="text-gray-700">
                  Sim, você pode cancelar o projeto a qualquer momento. Cobramos apenas pelo trabalho já realizado 
                  e entregamos todo o código desenvolvido.
                </p>
              </Card>

              <Card className="p-6">
                <CardTitle className="text-lg mb-3">Trabalham com empresas de qualquer tamanho?</CardTitle>
                <p className="text-gray-700">
                  Sim! Atendemos desde startups até grandes corporações. Nossas soluções são escaláveis e 
                  adaptadas para cada tipo de negócio.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
      
      <FooterLight />
    </main>
  )
}
