'use client'

import React from 'react'
import { ProductCardProps } from '@/app/models/productCard'

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  rating = 5,
  onAdd
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm dark:bg-zinc-900 overflow-hidden flex flex-col justify-between">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover"
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h2>
        {description && (
          <p className="text-sm text-gray-500 leading-tight dark:text-white">{description}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          {/* Estrelas */}
          <div className="text-yellow-500 text-md">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
          {/* Preço */}
          <span className="text-red-500 font-bold">R$ {price.toFixed(2)}</span>
        </div>
        {/* Botão */}
        <button
          onClick={() => onAdd(id)}
          className="mt-3 bg-red-500 hover:bg-red-600 text-white text-lg py-2 rounded-md flex justify-between p-5"
        >
          Adicionar<span className="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  )
}
