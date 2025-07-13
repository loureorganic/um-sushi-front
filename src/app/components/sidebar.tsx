'use client'

import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-20 h-screen bg-white shadow-md flex flex-col items-center py-6 fixed left-0 top-0">
      {/* Substitua os emojis pelos ícones exportados do Figma */}
      <div className="mb-10">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          🍣
        </div>
      </div>

      <nav className="flex flex-col gap-6 text-gray-500 text-xl">
        <button className="hover:text-red-500">🏠</button>
        <button className="hover:text-red-500">📦</button>
        <button className="hover:text-red-500">🛒</button>
        <button className="hover:text-red-500">⚙️</button>
      </nav>
    </aside>
  )
}
