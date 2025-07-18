'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="md:w-[calc(100vw-80px)] sm:w-full h-20 bg-white shadow-sm flex items-center justify-between px-6 fixed top-0 z-40 md:left-20 left-0">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <span className="text-red-500">Um</span>Sushi
      </div>

      {/* Barra de busca */}
      <div className="flex-1 max-w-xl mx-6 flex-shrink-0">
        <input
          type="text"
          placeholder="Buscar produto..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-800"
        />
      </div>

      {/* Ícones do Figma vão aqui */}
      <div className="flex gap-4 text-gray-600">
        <button>
          {/* ícone de notificação */}
          <span className="material-symbols-outlined">notifications_unread</span>
        </button>
        <button>
          {/* ícone de usuário ou configurações */}
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  )
}
