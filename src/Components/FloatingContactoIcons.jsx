import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingContactoIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
    <a
      href="tel:+919998048275"
      className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaPhoneAlt className="text-xl" />
    </a>

    <a
      href="https://wa.me/919998048275"
      className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-xl" />
    </a>
  </div>
  )
}

export default FloatingContactoIcons
