"use client";

import React from "react";
import QuantityControl from "./quantityControl";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Props = {
  items: CartItem[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function Cart({
  items,
  onIncrement,
  onDecrement,
  onRemove,
}: Props) {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <aside className="w-80 h-screen bg-white fixed right-0 top-0 shadow-lg p-6 flex flex-col justify-between z-50">
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Seu pedido</h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-sm">O carrinho está vazio.</p>
        ) : (
          <ul className="space-y-4 overflow-y-auto max-h-[70vh]">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <QuantityControl
                    quantity={item.quantity}
                    onIncrement={() => onIncrement(item.id)}
                    onDecrement={() => onDecrement(item.id)}
                  />
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t mt-6">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span className="text-red-500">R$ {total.toFixed(2)}</span>
        </div>
        <button className="mt-4 bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 text-sm font-medium">
          Finalizar Pedido
        </button>
      </div>
    </aside>
  );
}
