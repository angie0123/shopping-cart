import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";

const inputChangeHandler = jest.fn();

describe("cart", () => {
  it("renders a message when cart is empty", () => {
    render(<Cart cartItems={[]} inputChangeHandler={inputChangeHandler} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
