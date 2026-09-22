import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <a
        href="https://api.whatsapp.com/send/?phone=5511951144137&text=Ola+vim+pelo+site+e+gostaria+de+saber+mais+sobre+o+trabalho+da+Clever&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          width: isHovered ? '200px' : '60px',
          height: '60px',
        }}
      >
        <div className="flex items-center w-full h-full px-4">
          <FaWhatsapp 
            className="flex-shrink-0" 
            size={28}
            style={{
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
            }}
          />
          <span
            className="ml-3 font-semibold whitespace-nowrap"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out 0.1s',
            }}
          >
            Fale Conosco
          </span>
        </div>
        
        {/* Efeito de pulso */}
        <div
          className="absolute inset-0 bg-green-400 rounded-full"
          style={{
            opacity: isHovered ? 0 : 0.3,
            transform: isHovered ? 'scale(1.5)' : 'scale(1)',
            transition: 'all 0.6s ease-out',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      </a>

      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}