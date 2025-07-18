'use client'

import { useState } from 'react'
import Sidebar from '@/app/components/sidebar'
import Header from '@/app/components/header'
import ProductList from '@/app/components/productList'
import Cart from '@/app/components/cart'
import { products } from '@/app/data/products'

export default function HomePage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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

  return (
    <main className="bg-gray-50 min-h-screen">
      <Sidebar onCartClick={() => setIsCartOpen(true)} />
      <Header />
      <ProductList products={products} onAdd={handleAdd} />
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
