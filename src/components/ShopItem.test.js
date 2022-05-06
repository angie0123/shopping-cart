import React from 'react';
import ShopItem from './ShopItem';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockAddHandler = jest.fn();

const mockItem = {
  img: '/images/aloe.jpg',
  name: 'Aloe',
  price: '$34.99',
  id: 0,
};

describe('Shop item', () => {
  it('calls the event handler when clicked', () => {
    render(<ShopItem item={mockItem} handleAddToCart={mockAddHandler} />);
    const button = screen.getByText(/add to cart/i);
    userEvent.click(button);
    expect(mockAddHandler).toBeCalled();
  });
  it('passes the item id to the event handler when called', () => {
    render(<ShopItem item={mockItem} handleAddToCart={mockAddHandler} />);
    const button = screen.getByText(/add to cart/i);
    userEvent.click(button);
    expect(mockAddHandler).toBeCalledWith(mockItem.id);
  });
  it('renders item name, price, and image', () => {
    render(<ShopItem item={mockItem} handleAddToCart={mockAddHandler} />);
    expect(screen.getByText(/Aloe/i)).toBeInTheDocument();
    expect(screen.getByText(/34.99/i)).toBeInTheDocument();
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', window.location.origin + mockItem.img);
    expect(img).toHaveAttribute('alt', mockItem.name);
  });
});
