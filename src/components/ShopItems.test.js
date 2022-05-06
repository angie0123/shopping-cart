import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ShopItems from './ShopItems';

const mockShopItems = [
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

const mockAdd = jest.fn();

jest.mock('./ShopItem', () => ({ item, addToCartHandler }) => (
  <>
    <div data-testid="itemName">{item.name}</div>
    <div onClick={mockAdd}>Add To Cart</div>
  </>
));

describe('ShopItems', () => {
  it('renders all shop items', () => {
    render(<ShopItems items={mockShopItems} addToCartHandler={mockAdd} />);
    const itemNodes = screen.getAllByTestId('itemName');
    expect(itemNodes.length).toBe(3);
  });
});
