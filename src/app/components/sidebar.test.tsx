import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Sidebar from "./sidebar";

describe("Sidebar", () => {
  it("deve renderizar os botões de navegação com ícones corretos", () => {
    render(<Sidebar onCartClick={() => {}} />);

    expect(screen.getByTitle("Início")).toBeInTheDocument();
    expect(screen.getByTitle("Produtos")).toBeInTheDocument();
    expect(screen.getByTitle("Carrinho")).toBeInTheDocument();
    expect(screen.getByTitle("Configurações")).toBeInTheDocument();

    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("inventory_2")).toBeInTheDocument();
    expect(screen.getByText("shopping_cart")).toBeInTheDocument();
    expect(screen.getByText("settings")).toBeInTheDocument();
  });

  it("deve chamar onCartClick ao clicar no botão do carrinho", () => {
    const mockOnCartClick = vi.fn();
    render(<Sidebar onCartClick={mockOnCartClick} />);

    const cartButton = screen.getByTitle("Carrinho");
    fireEvent.click(cartButton);

    expect(mockOnCartClick).toHaveBeenCalledOnce();
  });

  it('deve conter o ícone de logo "ramen_dining"', () => {
    render(<Sidebar onCartClick={() => {}} />);

    expect(screen.getByText("ramen_dining")).toBeInTheDocument();
  });

  it("deve renderizar exatamente 4 botões de navegação", () => {
    render(<Sidebar onCartClick={() => {}} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });
});
