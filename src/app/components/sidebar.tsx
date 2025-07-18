'use client'

export default function Sidebar() {
  return (
    <aside className="w-20 h-screen bg-white shadow-md flex flex-col items-center py-6 fixed left-0 top-0">
      {/* Logo com ícone */}
      <div className="mb-10">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
          <span className="material-symbols-outlined">ramen_dining</span>
        </div>
      </div>

      <nav className="flex flex-col gap-6 text-gray-500 text-2xl">
        <button className="hover:text-red-500">
          <span className="material-symbols-outlined">home</span>
        </button>
        <button className="hover:text-red-500">
          <span className="material-symbols-outlined">inventory_2</span>
        </button>
        <button className="hover:text-red-500">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <button className="hover:text-red-500">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </nav>
    </aside>
  )
}