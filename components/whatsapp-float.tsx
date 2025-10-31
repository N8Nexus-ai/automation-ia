"use client"

import { MessageCircle, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { useContact } from "@/contexts/contact-context"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isNearBottom, setIsNearBottom] = useState(false)
  const { openContactModal } = useContact()

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Mostra o botão após 300px de scroll
      if (scrollTop > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      // Detecta se está próximo do final da página (últimos 200px)
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight)
      setIsNearBottom(distanceFromBottom < 200)
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

  // Link do Calendly
  const calendlyLink = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1HGUchFoPVeHUZH3bCBT8HsbGy1DP78DYOKmrtWTLP5SS4dVGvcmVJ8T4IYrUZshKy8Jd7Hml-"

  if (!isVisible) return null

  return (
    <>
      <div className={`fixed right-6 z-30 transition-all duration-300 flex flex-col gap-3 ${isNearBottom ? 'bottom-32' : 'bottom-6'}`}>
        {/* Botão Agendar Reunião */}
        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Agendar Reunião"
        >
          <Calendar className="text-white" size={28} />
          
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Agendar Reunião
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </a>

        {/* Botão WhatsApp */}
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
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
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
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Entrar em Contato
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </button>
        )}
      </div>
    </>
  )
}
