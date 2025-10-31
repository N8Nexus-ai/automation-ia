"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, ArrowRight, Copy, Check } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useContact } from "@/contexts/contact-context"

export function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useContact()
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false)
  const [copiedMeet, setCopiedMeet] = useState(false)

  const whatsappNumber = "5511990099690"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  const calendlyLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1HGUchFoPVeHUZH3bCBT8HsbGy1DP78DYOKmrtWTLP5SS4dVGvcmVJ8T4IYrUZshKy8Jd7Hml-"

  const handleCopyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(whatsappUrl)
      setCopiedWhatsApp(true)
      toast({
        title: "Link copiado!",
        description: "O link do WhatsApp foi copiado para a área de transferência.",
      })
      setTimeout(() => setCopiedWhatsApp(false), 2000)
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o link. Tente novamente.",
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
        description: "O link de agendamento foi copiado para a área de transferência.",
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

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
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
                      Marque uma reunião de 15 minutos
                    </CardDescription>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors" size={20} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                <span className="text-sm font-mono text-muted-foreground truncate flex-1 mr-2">
                  calendar.google.com/appointments
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

          {/* Opção WhatsApp */}
          <Card className="hover:shadow-md transition-shadow cursor-pointer group" onClick={handleWhatsAppClick}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Enviar Mensagem no WhatsApp</CardTitle>
                    <CardDescription className="text-sm">
                      Abre o WhatsApp com mensagem pré-preenchida
                    </CardDescription>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-colors" size={20} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                <span className="text-sm font-mono text-muted-foreground truncate flex-1 mr-2">
                  {whatsappNumber}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyWhatsApp()
                  }}
                  className="h-8 w-8 p-0 flex-shrink-0"
                >
                  {copiedWhatsApp ? (
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
