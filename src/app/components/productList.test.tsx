import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductList from "./productList";

const mockProducts = [
  {
    id: 1,
    name: "Produto A",
    description: "Descrição A",
    price: 10,
    rating: 4,
    image: "https://example.com/image-a.jpg",
  },
  {
    id: 2,
    name: "Produto B",
    description: "Descrição B",
    price: 20,
    rating: 5,
    image: "https://example.com/image-b.jpg",
  },
];

describe("ProductList", () => {
  it("deve renderizar o título corretamente", () => {
    render(<ProductList products={mockProducts} onAdd={() => {}} />);

    expect(screen.getByText("Cardápio Especial")).toBeInTheDocument();
  });

  it("deve renderizar todos os produtos fornecidos", () => {
    render(<ProductList products={mockProducts} onAdd={() => {}} />);

    expect(screen.getByText("Produto A")).toBeInTheDocument();
    expect(screen.getByText("Produto B")).toBeInTheDocument();
  });

  it('deve chamar a função onAdd ao clicar em "Adicionar"', () => {
    const onAddMock = vi.fn();
    render(<ProductList products={mockProducts} onAdd={onAddMock} />);

    const botoes = screen.getAllByRole("button", { name: /adicionar/i });
    fireEvent.click(botoes[0]);
    fireEvent.click(botoes[1]);

    expect(onAddMock).toHaveBeenCalledTimes(2);
    expect(onAddMock).toHaveBeenCalledWith(1);
    expect(onAddMock).toHaveBeenCalledWith(2);
  });

  it("deve renderizar corretamente mesmo com lista vazia", () => {
    render(<ProductList products={[]} onAdd={() => {}} />);

    expect(screen.getByText("Cardápio Especial")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /adicionar/i })
    ).not.toBeInTheDocument();
  });
});
