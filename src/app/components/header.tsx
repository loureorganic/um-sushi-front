'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-6 fixed left-20 top-0 z-40">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <span className="text-red-500">Um</span>Sushi
      </div>

      {/* Barra de busca */}
      <div className="flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Buscar produto..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-800"
        />
      </div>

      {/* Ícones do Figma vão aqui */}
      <div className="flex gap-4">
        <button>
          {/* ícone de notificação */}
          🔔
        </button>
        <button>
          {/* ícone de usuário ou configurações */}
          👤
        </button>
      </div>
    </header>
  )
}
