import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import CartItems from './CartItems';
import { BrowserRouter } from 'react-router-dom';

const mockCartItems = [
  { amount: 1, id: 0, img: '/images/aloe.jpg', name: 'Aloe', price: '$39.99' },
  {
    amount: 2,
    id: 1,
    img: '/images/cactus.jpg',
    name: 'Cactus',
    price: '$24.99',
  },
];

const mockHandler = jest.fn();

jest.mock('./CartItem', () => ({ item, inputChangeHandler }) => (
  <div data-testid="cartItem">{item.name}</div>
));

describe('CartItems', () => {
  it('renders all items passed in props', () => {
    render(
      <CartItems cartItems={mockCartItems} inputChangeHandler={mockHandler} />
    );
    const items = screen.getAllByTestId('cartItem');
    expect(items.length).toBe(2);
  });
  it('renders a message and link to Shop when the cart is empty', () => {
    render(<CartItems cartItems={[]} inputChangeHandler={mockHandler} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Continue shopping' })
    ).toBeInTheDocument();
  });
});
