import React from "react";

export default function KathCNPJ() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Direitos Autorais Padrão */}
        <p className="text-xs text-gray-400 font-light">
          &copy; {new Date().getFullYear()} 63.416.946 KATHERINE STEFANI
          SEVERINO DE OLIVEIRA.
        </p>

        {/* 🔒 Dados Exigidos pela Meta: Visíveis para auditoria, mas discretos para o usuário */}
        <div className="flex flex-wrap justify-center gap-x-3 text-[10px] text-gray-300 font-light tracking-wide md:text-right">
          <span>63.416.946 KATHERINE STEFANI SEVERINO DE OLIVEIRA.</span>
          <span className="hidden sm:inline">|</span>
          <span>63.416.946/0001-53</span>
          <span className="hidden sm:inline">|</span>
          <span>
            RUA PIAUI, 475, VILA MIRANDA, Itaquaquecetuba - SP, 08572-510
          </span>
        </div>
      </div>
    </footer>
  );
}
