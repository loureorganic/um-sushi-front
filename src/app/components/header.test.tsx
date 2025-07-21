import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./header";

describe("Header", () => {
  it('deve renderizar o nome da marca "UmSushi"', () => {
    render(<Header />);
    expect(screen.getByText(/Um/i)).toBeInTheDocument();
    expect(screen.getByText(/Sushi/i)).toBeInTheDocument();
  });

  it("deve renderizar o campo de busca com placeholder correto", () => {
    render(<Header />);
    const input = screen.getByPlaceholderText("Buscar produto...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("deve renderizar dois botões de ícones", () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  it('deve conter ícones de "notifications_unread" e "person"', () => {
    render(<Header />);
    expect(screen.getByText("notifications_unread")).toBeInTheDocument();
    expect(screen.getByText("person")).toBeInTheDocument();
  });
});
