import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./cart";
import { describe, it, vi, expect } from "vitest";

const mockItems = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 25.0,
    quantity: 2,
    image: "pizza.jpg",
  },
  {
    id: 2,
    name: "Coca-Cola",
    price: 5.0,
    quantity: 1,
    image: "coca.jpg",
  },
];

describe("Cart Component", () => {
  it("exibe a mensagem de carrinho vazio", () => {
    render(
      <Cart
        items={[]}
        onIncrement={vi.fn()}
        onDecrement={vi.fn()}
        onRemove={vi.fn()}
        onClose={vi.fn()}
        isOpen={false}
      />
    );

    expect(screen.getByText(/O carrinho está vazio/i)).toBeInTheDocument();
  });

  it.todo(
    "oculta botão de finalizar pedido caso o carrinho esteja vazio",
    () => {
      render(
        <Cart
          items={[]}
          onIncrement={vi.fn()}
          onDecrement={vi.fn()}
          onRemove={vi.fn()}
          onClose={vi.fn()}
          isOpen
        />
      );

      expect(screen.getByText(/O carrinho está vazio/i)).toBeInTheDocument();
    }
  );

  it("renderiza os itens corretamente e mostra o total", () => {
    render(
      <Cart
        items={mockItems}
        onIncrement={vi.fn()}
        onDecrement={vi.fn()}
        onRemove={vi.fn()}
        onClose={vi.fn()}
        isOpen
      />
    );

    expect(screen.getByText("Pizza Margherita")).toBeInTheDocument();
    expect(screen.getByText("Coca-Cola")).toBeInTheDocument();
    expect(screen.getByText("R$ 25.00")).toBeInTheDocument();
    expect(screen.getByText("R$ 5.00")).toBeInTheDocument();
    expect(screen.getByText("R$ 55.00")).toBeInTheDocument();
    expect(screen.getByText(/Finalizar Pedido/i)).toBeInTheDocument();
  });

  it("chama onIncrement, onDecrement e onRemove corretamente", () => {
    const onIncrement = vi.fn();
    const onDecrement = vi.fn();
    const onRemove = vi.fn();

    render(
      <Cart
        items={mockItems}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
        onClose={vi.fn()}
        isOpen
      />
    );

    const incrementButtons = screen.getAllByTestId(
      "quantity-control-increment-button"
    );
    const decrementButtons = screen.getAllByTestId(
      "quantity-control-decrement-button"
    );
    const removeButtons = screen.getAllByTestId("delete-button");

    fireEvent.click(incrementButtons[0]);
    fireEvent.click(decrementButtons[0]);
    fireEvent.click(removeButtons[0]);

    expect(onIncrement).toHaveBeenCalledWith(1);
    expect(onDecrement).toHaveBeenCalledWith(1);
    expect(onRemove).toHaveBeenCalledWith(1);
  });
});
