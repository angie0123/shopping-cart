import React from 'react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('app', () => {
  it('updates cart items in Nav when user adds an item to cart in Shop', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    const addBtn = screen.getAllByText(/add to cart/i)[0];
    userEvent.click(addBtn);
    const cartLink = screen.getByRole('link', { name: 'Cart: 1' });
    expect(cartLink).toBeInTheDocument();
  });
  it('updates cart items in Nav when user adds multiple items to cart', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    const addBtn1 = screen.getAllByText(/add to cart/i)[0];
    const addBtn2 = screen.getAllByText(/add to cart/i)[1];
    userEvent.click(addBtn1);
    userEvent.click(addBtn2);
    const cartLink = screen.getByRole('link', { name: 'Cart: 2' });
    expect(cartLink).toBeInTheDocument();
  });
});
