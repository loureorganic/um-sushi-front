'use client'
import React from "react";

type SidebarProps = {
  onCartClick: () => void
}

export default function Sidebar({ onCartClick }: SidebarProps) {
  return (
    <aside
      className="fixed z-50 bg-white shadow-md
                 flex justify-around items-center
                 md:flex-col md:justify-start
                 md:w-20 md:h-screen md:top-0 md:left-0
                 w-full h-16 bottom-0
                 py-2 md:py-6"
    >
      {/* Logo (só aparece no desktop) */}
      <div className="hidden md:flex md:mb-10">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
          <span className="material-symbols-outlined">ramen_dining</span>
        </div>
      </div>

      {/* Menu de navegação */}
      <nav className="flex md:flex-col gap-4 text-gray-500 text-2xl">
        <button className="hover:text-red-500" title="Início">
          <span className="material-symbols-outlined">home</span>
        </button>
        <button className="hover:text-red-500" title="Produtos">
          <span className="material-symbols-outlined">inventory_2</span>
        </button>
        <button className="hover:text-red-500" onClick={onCartClick} title="Carrinho">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <button className="hover:text-red-500" title="Configurações">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </nav>
    </aside>
  )
}
