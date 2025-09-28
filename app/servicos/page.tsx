"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Brain, Target, BarChart3, Users, Clock, Shield } from "lucide-react"
import { useContact } from "@/contexts/contact-context"
import Link from "next/link"

export default function ServicosPage() {
  const { openContactModal } = useContact()
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-4 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              Nossos Serviços
            </Badge>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              A Realidade dos Custos: Humanos vs IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja quanto você está gastando com atendimento humano e como a IA pode revolucionar seus custos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Human Cost */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-red-800">Atendimento Humano</CardTitle>
                    <CardDescription className="text-red-600">Custos reais para 24h de atendimento</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <h3 className="font-bold text-lg mb-4 text-red-800">Funcionários Necessários:</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span><strong>3 funcionários</strong> (8h cada para cobrir 24h)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span><strong>+ 1 supervisor</strong> para coordenação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span><strong>+ 1 gerente</strong> para gestão</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <h3 className="font-bold text-lg mb-4 text-red-800">Custos Mensais:</h3>
                  <div className="space-y-2 text-red-700">
                    <div className="flex justify-between">
                      <span>Salários (5 pessoas):</span>
                      <span className="font-bold">R$ 13.500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Encargos (40%):</span>
                      <span className="font-bold">R$ 5.400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Benefícios:</span>
                      <span className="font-bold">R$ 2.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Treinamento:</span>
                      <span className="font-bold">R$ 1.500</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold text-lg">
                      <span>Total Mensal:</span>
                      <span className="text-red-600">R$ 22.400</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 rounded-xl p-4 border border-red-300">
                  <h4 className="font-bold text-red-800 mb-2">Limitações:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Apenas 1 cliente por vez</li>
                    <li>• Faltas e licenças médicas</li>
                    <li>• Rotatividade alta</li>
                    <li>• Qualidade inconsistente</li>
                    <li>• Horário comercial limitado</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI Cost */}
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-800">Agente de IA</CardTitle>
                    <CardDescription className="text-green-600">Custo real para 24h de atendimento</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-lg mb-4 text-green-800">Recursos Necessários:</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span><strong>1 Agente de IA</strong> (atende 24h sem parar)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span><strong>Infraestrutura AWS</strong> (escalável)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span><strong>Monitoramento</strong> (automatizado)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <h3 className="font-bold text-lg mb-4 text-green-800">Custos Mensais:</h3>
                  <div className="space-y-2 text-green-700">
                    <div className="flex justify-between">
                      <span>Desenvolvimento (1x):</span>
                      <span className="font-bold">R$ 5.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Infraestrutura AWS:</span>
                      <span className="font-bold">R$ 100 - 400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manutenção:</span>
                      <span className="font-bold">R$ 250</span>
                    </div>
                    {/* <div className="flex justify-between">
                      <span>Implementações futuras:</span>
                      <span className="font-bold">R$ 200 - 1000</span>
                    </div> */}
                    <div className="flex justify-between border-t pt-2 font-bold text-lg">
                      <span>Total Mensal:</span>
                      <span className="text-green-600">R$ 1.100</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 rounded-xl p-4 border border-green-300">
                  <h4 className="font-bold text-green-800 mb-2">Vantagens:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Atende 100+ clientes simultaneamente</li>
                    <li>• Nunca falta ou tira férias</li>
                    <li>• Qualidade consistente 24/7</li>
                    <li>• Aprende e melhora continuamente</li>
                    <li>• Escalável instantaneamente</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Savings Calculation */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Economia Real com IA
              </h3>
              <p className="text-xl text-muted-foreground">
                Veja o impacto financeiro real na sua empresa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-2xl p-6 border border-primary/20">
                <div className="text-4xl font-bold text-red-600 mb-2">R$ 22.400</div>
                <div className="text-muted-foreground mb-4">Custo Mensal Humano</div>
                <div className="text-sm text-muted-foreground">5 funcionários + encargos</div>
              </div>

              <div className="text-center bg-white rounded-2xl p-6 border border-primary/20">
                <div className="text-4xl font-bold text-green-600 mb-2">R$ 2.500</div>
                <div className="text-muted-foreground mb-4">Custo Mensal IA</div>
                <div className="text-sm text-muted-foreground">1 agente + infraestrutura</div>
              </div>

              <div className="text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">R$ 19.900</div>
                <div className="text-white/90 mb-4">Economia Mensal</div>
                <div className="text-sm text-white/80">89% de redução de custos</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 border border-primary/20">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-bold text-lg">
                  <span className="text-primary">R$ 238.800</span> economizados por ano
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Tipos de Agentes de IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos diferentes tipos de agentes para atender suas necessidades específicas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Chatbots Inteligentes</CardTitle>
                <CardDescription className="text-lg">
                  Atendimento automatizado 24/7 com IA conversacional avançada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Processamento de linguagem natural</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Integração com sistemas existentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Análise de sentimento em tempo real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Agentes de Vendas</CardTitle>
                <CardDescription className="text-lg">
                  IA que qualifica leads e acelera o processo de vendas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Qualificação automática de leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Agendamento inteligente de reuniões</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Follow-up personalizado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Agentes Analíticos</CardTitle>
                <CardDescription className="text-lg">
                  IA que analisa dados e gera insights acionáveis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Análise preditiva de dados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Relatórios automáticos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Alertas inteligentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Como Desenvolvemos Seus Agentes de IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo estruturado para criar agentes de IA que realmente funcionam para o seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Análise de Necessidades</h3>
              <p className="text-muted-foreground">
                Entendemos seus processos e identificamos onde a IA pode gerar mais valor
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Desenvolvimento</h3>
              <p className="text-muted-foreground">
                Criamos o agente de IA personalizado com as funcionalidades específicas do seu negócio
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Integração</h3>
              <p className="text-muted-foreground">
                Conectamos o agente aos seus sistemas existentes de forma segura e eficiente
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">4. Monitoramento</h3>
              <p className="text-muted-foreground">
                Acompanhamos performance e otimizamos continuamente o agente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Resultados Que Transformam Seu Negócio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Além da economia, veja os benefícios operacionais que seus concorrentes ainda não têm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Atendimento Instantâneo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Resposta em <strong>milissegundos</strong> vs minutos de espera humana
                </p>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">0.3s</div>
                  <div className="text-sm text-muted-foreground">Tempo médio de resposta</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Capacidade Ilimitada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Atenda <strong>milhares simultaneamente</strong> sem degradação
                </p>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">∞</div>
                  <div className="text-sm text-muted-foreground">Clientes simultâneos</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Dados em Tempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Analytics automáticos</strong> de cada interação
                </p>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Conversas analisadas</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Qualidade Consistente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Mesmo padrão</strong> em todas as interações
                </p>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Consistência</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Personalização Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Adapta-se</strong> ao perfil de cada cliente
                </p>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">1:1</div>
                  <div className="text-sm text-muted-foreground">Experiência personalizada</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">ROI Comprovado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Retorno</strong> em menos de 30 dias
                </p>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-1">1.500%</div>
                  <div className="text-sm text-muted-foreground">ROI anual médio</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Pronto para Transformar Seu Negócio com IA?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Agende uma conversa gratuita e descubra como nossos agentes de IA podem 
            revolucionar seus processos e acelerar seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openContactModal} size="lg" className="px-8 py-4 text-lg">
              Agendar Reunião
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Link href="/sobre">
                Conhecer Nossa Equipe
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
