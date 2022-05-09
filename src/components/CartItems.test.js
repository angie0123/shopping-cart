import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import CartItems from './CartItems';

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
});
