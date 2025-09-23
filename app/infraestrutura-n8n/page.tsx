"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Server, Shield, Zap, BarChart3, Clock, Target, ArrowRight, Settings } from "lucide-react"
import Link from "next/link"
import { useContact } from "@/contexts/contact-context"

export default function InfraestruturaN8nPage() {
  const { openContactModal } = useContact()
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mb-6">
              Nossos Serviços
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Infraestrutura n8n
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Oferecemos duas opções flexíveis para sua infraestrutura n8n: sua própria instância 
              ou nossa infraestrutura gerenciada. Escolha o que melhor se adapta ao seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Escolha Sua Infraestrutura n8n
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Duas opções poderosas para implementar automações com n8n
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Own Instance */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Sua Própria Instância n8n</CardTitle>
                <CardDescription className="text-lg">
                  Controle total sobre sua infraestrutura e dados
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-lg mb-4 text-primary">Vantagens:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span><strong>Controle total</strong> sobre dados e configurações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span><strong>Customização completa</strong> da instalação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span><strong>Sem dependências</strong> externas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span><strong>Escalabilidade</strong> conforme sua necessidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span><strong>Integração</strong> com seus sistemas existentes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Ideal para:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Empresas com equipe técnica própria</li>
                    <li>• Necessidades específicas de compliance</li>
                    <li>• Controle total sobre dados sensíveis</li>
                    <li>• Integrações complexas e personalizadas</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">A partir de R$ 2.500/mês</div>
                  <div className="text-sm text-muted-foreground">Inclui instalação, configuração e suporte</div>
                </div>
              </CardContent>
            </Card>

            {/* Managed Infrastructure */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Infraestrutura Gerenciada</CardTitle>
                <CardDescription className="text-lg">
                  Deixe conosco toda a complexidade técnica
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                  <h3 className="font-bold text-lg mb-4 text-accent">Vantagens:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span><strong>Zero preocupação</strong> com infraestrutura</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span><strong>Backup automático</strong> e recuperação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span><strong>Atualizações automáticas</strong> do n8n</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span><strong>Monitoramento 24/7</strong> e suporte</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span><strong>Escalabilidade automática</strong> conforme demanda</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Ideal para:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Empresas que querem focar no negócio</li>
                    <li>• Equipes sem expertise técnica</li>
                    <li>• Necessidade de disponibilidade máxima</li>
                    <li>• Implementação rápida e sem complicações</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">A partir de R$ 1.500/mês</div>
                  <div className="text-sm text-muted-foreground">Inclui infraestrutura, manutenção e suporte</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Comparação Detalhada
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja as diferenças entre as duas opções de infraestrutura
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl border border-border/50">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-6 font-bold text-lg">Recurso</th>
                  <th className="text-center p-6 font-bold text-lg text-primary">Sua Instância</th>
                  <th className="text-center p-6 font-bold text-lg text-accent">Gerenciada</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Controle de Dados</td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                  </td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Customização</td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-muted-foreground">Limitada</span>
                  </td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Manutenção</td>
                  <td className="p-6 text-center">
                    <span className="text-muted-foreground">Sua responsabilidade</span>
                  </td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Backup Automático</td>
                  <td className="p-6 text-center">
                    <span className="text-muted-foreground">Configurável</span>
                  </td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Monitoramento 24/7</td>
                  <td className="p-6 text-center">
                    <span className="text-muted-foreground">Opcional</span>
                  </td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Atualizações</td>
                  <td className="p-6 text-center">
                    <span className="text-muted-foreground">Manuais</span>
                  </td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="p-6 font-medium">Suporte Técnico</td>
                  <td className="p-6 text-center">
                    <span className="text-muted-foreground">Básico</span>
                  </td>
                  <td className="p-6 text-center">
                    <CheckCircle className="w-6 h-6 text-accent mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Custo Inicial</td>
                  <td className="p-6 text-center">
                    <span className="text-primary font-bold">Alto</span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-accent font-bold">Baixo</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Por Que Escolher n8n?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              n8n é a plataforma de automação mais poderosa e flexível do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fácil de Usar</h3>
              <p className="text-muted-foreground">
                Interface visual intuitiva para criar automações complexas
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Open Source</h3>
              <p className="text-muted-foreground">
                Código aberto, sem dependências de fornecedores
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">400+ Integrações</h3>
              <p className="text-muted-foreground">
                Conecte com praticamente qualquer sistema ou API
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Execução Confiável</h3>
              <p className="text-muted-foreground">
                <strong>99.9%</strong> de uptime e execução garantida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Qual Infraestrutura é Ideal para Você?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Agende uma conversa gratuita e nossa equipe ajudará você a escolher 
            a melhor opção de infraestrutura n8n para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openContactModal} size="lg" className="px-8 py-4 text-lg">
              Agendar Conversa Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Link href="/servicos">
                Ver Todos os Serviços
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
