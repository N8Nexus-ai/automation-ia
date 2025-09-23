"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { ContactModal } from "@/components/contact-modal"

interface ContactContextType {
  isContactModalOpen: boolean
  openContactModal: () => void
  closeContactModal: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <ContactContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
      {children}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}
