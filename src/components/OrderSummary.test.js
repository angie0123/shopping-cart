import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import OrderSummary from "./OrderSummary";

const mockCartItems = [
  { amount: 2, price: "$4.99" },
  { amount: 1, price: "$2.31" },
];
const subtotal = (4.99 * 2 + 2.31).toFixed(2);

describe("order summary", () => {
  it("renders the correct subtotal", () => {
    render(<OrderSummary cartItems={mockCartItems} />);
    expect(screen.getByText(`$${subtotal}`)).toBeInTheDocument();
  });
  it("renders the correct total", () => {
    render(<OrderSummary cartItems={mockCartItems} />);
    expect(screen.getByText(`$${+subtotal + 5}`)).toBeInTheDocument();
  });
});
