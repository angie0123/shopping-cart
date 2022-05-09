import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from './CartItem';

const mockCartItem = {
  amount: 1,
  id: 0,
  img: '/images/aloe.jpg',
  name: 'Aloe',
  price: '$39.99',
};

const mockInputHandler = jest.fn();

describe('CartItem', () => {
  render(
    <CartItem item={mockCartItem} inputChangeHandler={mockInputHandler} />
  );
  it('renders image, name, and price of the item', () => {
    const name = screen.getByText(mockCartItem.name);
    const price = screen.getByText(mockCartItem.price);
    const image = screen.getByRole('img');
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image.getAttribute('src')).toEqual(
      window.location.origin + mockCartItem.img
    );
  });
  it('renders input text, and increment/decrement buttons', () => {
    render(
      <CartItem item={mockCartItem} inputChangeHandler={mockInputHandler} />
    );
    const input = screen.getByRole('spinbutton');
    const increment = screen.getByText('+');
    const decrement = screen.getByText('-');
    expect(input).toBeInTheDocument();
    expect(increment).toBeInTheDocument();
    expect(decrement).toBeInTheDocument();
  });
  it('calls inputChangeHandler with the correct parameters passed in', () => {
    render(
      <CartItem item={mockCartItem} inputChangeHandler={mockInputHandler} />
    );
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('+'));
    expect(mockInputHandler).toBeCalledTimes(2);
    expect(mockInputHandler.mock.calls[0][1]).toBe(mockCartItem.id);
    expect(mockInputHandler.mock.calls[0][2]).toBe('increment');

    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('-'));
    userEvent.click(screen.getByText('-'));
    expect(mockInputHandler).toBeCalledTimes(5);
    expect(mockInputHandler.mock.calls[4][1]).toBe(mockCartItem.id);
    expect(mockInputHandler.mock.calls[4][2]).toBe('decrement');

    userEvent.type(screen.getByRole('spinbutton'), '2');
    expect(mockInputHandler.mock.calls[5][1]).toBe(mockCartItem.id);
    expect(mockInputHandler.mock.calls[5][2]).toBe('input');
  });
});
