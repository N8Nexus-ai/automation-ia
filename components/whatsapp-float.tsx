"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useContact } from "@/contexts/contact-context"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const { openContactModal } = useContact()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Número do WhatsApp
  const whatsappNumber = "5511990099690" // Número real: 11 99009-9690
  const message = "Olá! Gostaria de saber mais sobre os serviços de automação da Nexus.ai."
  
  // WhatsApp ativado
  const hasWhatsApp = true
  
  const whatsappUrl = hasWhatsApp 
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : "#" // Fallback para modal de contato

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-30">
        {hasWhatsApp ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Conversar no WhatsApp"
          >
            <MessageCircle className="text-white" size={28} />
            
            {/* Tooltip */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Conversar no WhatsApp
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </a>
        ) : (
          <button
            onClick={openContactModal}
            className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Entrar em contato"
          >
            <MessageCircle className="text-white" size={28} />
            
            {/* Tooltip */}
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Entrar em Contato
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </button>
        )}
      </div>
    </>
  )
}
