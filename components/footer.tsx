import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-muted/30 relative z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/Logo sem fundo.png" 
                  alt="Nexus.ai Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">Nexus.ai</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Construímos automações e agentes de IA para liberar sua equipe e focar no crescimento do seu negócio.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>📧 contato@n8nexus.com.br</p>
            </div>
          </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <a href="/servicos" className="hover:text-foreground transition-colors">
                        Agentes de IA
                      </a>
                    </li>
                    <li>
                      <a href="/automacao-processos" className="hover:text-foreground transition-colors">
                        Automação de Processos
                      </a>
                    </li>
                    <li>
                      <a href="/integracao-aws" className="hover:text-foreground transition-colors">
                        Integração AWS
                      </a>
                    </li>
                    <li>
                      <a href="/infraestrutura-n8n" className="hover:text-foreground transition-colors">
                        Infraestrutura n8n
                      </a>
                    </li>
                  </ul>
                </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/sobre" className="hover:text-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Nexus.ai. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacidade/" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="/termos/" className="hover:text-foreground transition-colors">
              Termos
            </a>
            <a href="/sobre/" className="hover:text-foreground transition-colors">
              Sobre
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
