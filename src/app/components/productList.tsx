'use client'

import React from 'react'
import ProductCard from './productCard'

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  rating?: number
}

type Props = {
  products: Product[]
  onAdd: (productId: number) => void
}

export default function ProductList({ products, onAdd }: Props) {
  return (
    <section className="p-4 pt-24 md:ml-20 md:pt-24 sm: pb-20">

      <h1 className="text-2xl font-bold mb-6 text-gray-800">Cardápio Especial</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}
