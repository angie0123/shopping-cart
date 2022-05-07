import React from 'react';
import userEvent from '@testing-library/user-event';
import Shop from './Shop';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const shopItems = [
  {
    img: '/images/aloe.jpg',
    name: 'Aloe',
    price: '$34.99',
    id: 0,
  },
  {
    img: '/images/cactus.jpg',
    name: 'Cactus',
    price: '$29.99',
    id: 1,
  },
  {
    img: '/images/leafy.jpg',
    name: 'Lauri Fern',
    price: '$24.99',
    id: 2,
  },
];

jest.mock('../components/ShopItems', () => ({ items, handleAddToCart }) => (
  <div>
    <ul data-testid="itemsDisplayed">
      {shopItems.map((item) => {
        return (
          <li key={item.id}>
            <div
              onClick={() => handleAddToCart(item.id)}
              data-testid="addToCart"
            >
              {' '}
              Add To Cart
            </div>
          </li>
        );
      })}
    </ul>
  </div>
));

describe('shop', () => {
  it('updates cart items when user adds an item to cart', () => {
    render(<Shop />);
    const addBtn = screen.getAllByTestId('addToCart')[0];
    userEvent.click(addBtn);
    expect(screen.getByText('Cart: 1')).toBeInTheDocument();
  });
  it('updates cart items when user adds multiple items to cart', () => {
    render(<Shop />);
    const addBtn1 = screen.getAllByTestId('addToCart')[0];
    const addBtn2 = screen.getAllByTestId('addToCart')[1];
    userEvent.click(addBtn1);
    userEvent.click(addBtn2);
    expect(screen.getByText('Cart: 2')).toBeInTheDocument();
  });
});
