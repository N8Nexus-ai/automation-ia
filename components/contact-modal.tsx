"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Video, Calendar, ArrowRight, Copy, Check } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useContact } from "@/contexts/contact-context"

export function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useContact()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedMeet, setCopiedMeet] = useState(false)

  const email = "contato@n8nexus.com.br"
  const calendlyLink = "https://calendly.com/marco-florencio100/30min"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmail(true)
      toast({
        title: "Email copiado!",
        description: "O endereço de email foi copiado para a área de transferência.",
      })
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o email. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  const handleCopyCalendly = async () => {
    try {
      await navigator.clipboard.writeText(calendlyLink)
      setCopiedMeet(true)
      toast({
        title: "Link copiado!",
        description: "O link do Calendly foi copiado para a área de transferência.",
      })
      setTimeout(() => setCopiedMeet(false), 2000)
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o link. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  const handleEmailClick = () => {
    console.log('handleEmailClick chamado')
    
    const subject = encodeURIComponent('Interesse em Automação')
    const body = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai.')
    
    // Abre Gmail no navegador
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    window.open(gmailLink, '_blank')
    
    // Também copia o email como backup
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: "Gmail aberto!",
        description: "O Gmail foi aberto no navegador e o email foi copiado como backup.",
      })
    }).catch(() => {
      toast({
        title: "Gmail aberto!",
        description: "O Gmail foi aberto no navegador.",
      })
    })
  }

  const handleCalendlyClick = () => {
    window.open(calendlyLink, "_blank")
  }

  if (!isContactModalOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-20">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={closeContactModal}
      />
      <div className="relative bg-background rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto border border-border">
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">
              Vamos conversar!
            </h2>
            <p className="text-center text-base text-muted-foreground">
              Escolha a forma que preferir para entrarmos em contato
            </p>
          </div>

        <div className="space-y-4 mt-6">
          {/* Opção Email */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer group" onClick={handleEmailClick}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Enviar Email</CardTitle>
                    <CardDescription className="text-sm">
                      Abre o Gmail no navegador com tudo preenchido
                    </CardDescription>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors" size={20} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                <span className="text-sm font-mono text-muted-foreground">{email}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyEmail()
                  }}
                  className="h-8 w-8 p-0"
                >
                  {copiedEmail ? (
                    <Check className="text-green-600" size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Opção Calendly */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer group" onClick={handleCalendlyClick}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Calendar className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Agendar Call</CardTitle>
                    <CardDescription className="text-sm">
                      Marque uma reunião de 30 minutos
                    </CardDescription>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors" size={20} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                <span className="text-sm font-mono text-muted-foreground truncate flex-1 mr-2">
                  calendly.com/marco-florencio100/30min
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyCalendly()
                  }}
                  className="h-8 w-8 p-0 flex-shrink-0"
                >
                  {copiedMeet ? (
                    <Check className="text-green-600" size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline" onClick={closeContactModal}>
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
