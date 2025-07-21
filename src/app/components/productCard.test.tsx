import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from "./productCard";

describe("ProductCard", () => {
  const defaultProps = {
    id: 1,
    name: "Produto Teste",
    description: "Descrição do produto",
    price: 99.9,
    image: "https://via.placeholder.com/150",
    rating: 4,
    onAdd: vi.fn(),
  };

  it("deve renderizar o nome, descrição e preço corretamente", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
    expect(screen.getByText("Descrição do produto")).toBeInTheDocument();
    expect(screen.getByText("R$ 99.90")).toBeInTheDocument();
  });

  it("deve renderizar a imagem quando fornecida", () => {
    render(<ProductCard {...defaultProps} />);

    const img = screen.getByRole("img") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(defaultProps.image);
    expect(img.alt).toBe(defaultProps.name);
  });

  it("não deve renderizar a imagem se não for fornecida", () => {
    const propsWithoutImage = { ...defaultProps, image: undefined };
    render(<ProductCard {...propsWithoutImage} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("deve exibir as estrelas com base na avaliação (rating)", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText("★★★★☆")).toBeInTheDocument();
  });

  it("deve usar avaliação padrão de 5 estrelas se nenhuma for passada", () => {
    const propsWithoutRating = { ...defaultProps, rating: undefined };
    render(<ProductCard {...propsWithoutRating} />);

    expect(screen.getByText("★★★★★")).toBeInTheDocument();
  });

  it("deve chamar onAdd com o ID correto ao clicar no botão", () => {
    render(<ProductCard {...defaultProps} />);

    const button = screen.getByRole("button", { name: /adicionar/i });
    fireEvent.click(button);

    expect(defaultProps.onAdd).toHaveBeenCalledOnce();
    expect(defaultProps.onAdd).toHaveBeenCalledWith(1);
  });
});
