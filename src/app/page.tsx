'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/app/components/sidebar'
import Header from '@/app/components/header'
import ProductList from '@/app/components/productList'
import Cart from '@/app/components/cart'
import { Product } from '@/app/models/product'
import { fetchMenu } from '@/app/services/api'

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([])
  const [isCartOpen, setIsCartOpen] = useState(true)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchMenu()
      .then(setProducts)
      .catch((error: unknown) => {
        console.error('Erro ao buscar produtos:', error)
        setProducts([])
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    console.log('Carrinho:', cartItems)
  }, [cartItems])


  const handleAdd = (productId: number) => {
    const product = products.find((p) => p.id === productId)
    if (!product) return

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === productId)
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }


  const handleIncrement = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const handleDecrement = (productId: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemove = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  // 🔍 Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="bg-gray-50 min-h-screen dark:bg-black">
      <Sidebar onCartClick={() => setIsCartOpen(true)} />
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {loading ? (
        <p className="p-4">Carregando produtos...</p>
      ) : (
        <ProductList products={filteredProducts} onAdd={handleAdd} />
      )}
      <Cart
        items={cartItems}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </main>
  )
}
