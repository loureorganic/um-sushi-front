'use client'

import React from 'react'

export default function Header() {
  return (
    <header className="w-full h-20 bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-between px-6 fixed top-0 z-40 lg:left-20">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        <span className="text-red-500">Um</span>Sushi
      </div>

      {/* Barra de busca */}
      <div className="flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Buscar produto..."
          className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      {/* Ícones */}
      <div className="flex gap-4">
        <button type="button" aria-label="Notificações" title="Notificações">
          🔔
        </button>
        <button type="button" aria-label="Perfil do usuário" title="Perfil do usuário">
          👤
        </button>
      </div>
    </header>
  )
}
