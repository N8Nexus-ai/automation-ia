import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function FooterLight() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-white relative z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/Logo sem fundo.png" 
                  alt="Nexus.ai Logo" 
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Nexus.ai</span>
            </div>
            <p className="text-gray-700 mb-4 max-w-md">
              Construímos automações e agentes de IA para liberar sua equipe e focar no crescimento do seu negócio.
            </p>
            <div className="text-sm text-gray-600">
              <p>📧 contato@n8nexus.com.br</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Conteúdo</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/blog" className="hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/servicos/plataformas-sob-medida" className="hover:text-gray-900 transition-colors">
                  Plataformas Sob Medida
                </a>
              </li>
              <li>
                <a href="/servicos/orquestracao-integracao" className="hover:text-gray-900 transition-colors">
                  Orquestração & Integração
                </a>
              </li>
              <li>
                <a href="/servicos/infraestrutura-flexivel" className="hover:text-gray-900 transition-colors">
                  Infraestrutura Flexível
                </a>
              </li>
              <li>
                <a href="/servicos/agentes-de-ia" className="hover:text-gray-900 transition-colors">
                  Agentes de IA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/servicos" className="hover:text-gray-900 transition-colors">
                  Agentes de IA
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-gray-900 transition-colors">
                  Automação de Processos
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-gray-900 transition-colors">
                  Integração AWS
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-gray-900 transition-colors">
                  Infraestrutura n8n
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/sobre" className="hover:text-gray-900 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-gray-900 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {currentYear} Nexus.ai. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacidade/" className="hover:text-gray-900 transition-colors">
              Privacidade
            </Link>
            <Link href="/termos/" className="hover:text-gray-900 transition-colors">
              Termos
            </Link>
            <Link href="/sobre/" className="hover:text-gray-900 transition-colors">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
