"use client";

import React from 'react'
import { QuantityControlProps } from '@/app/models/quantityControl'


export default function QuantityControl({ quantity, onIncrement, onDecrement }: QuantityControlProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <button
        data-testid="quantity-control-decrement-button"
        onClick={onDecrement}
        className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
      >
        –
      </button>
      <span className="text-sm">{quantity}</span>
      <button
        data-testid="quantity-control-increment-button"
        onClick={onIncrement}
        className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
      >
        +
      </button>
    </div>
  );
}
