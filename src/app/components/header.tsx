'use client'

import React from 'react'

type HeaderProps = {
  searchTerm: string
  onSearchChange: (term: string) => void
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="md:w-[calc(100vw-80px)] sm:w-full h-20 bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-between px-6 fixed top-0 z-40 md:left-20 left-0">

      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        <span className="text-red-500">Um</span>Sushi
      </div>

      {/* Barra de busca */}
      <div className="flex-1 max-w-xl mx-6 flex-shrink-0 dark:text-white">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-800"
        />
      </div>

      {/* Ícones do Figma vão aqui */}
      <div className="flex gap-4 text-gray-600 dark:text-white">
        <button>
          <span className="material-symbols-outlined">notifications_unread</span>
        </button>
        <button>
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  )
}
