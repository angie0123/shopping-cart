import ShopItems from '../components/ShopItems';

const Shop = () => {
  const shopItems = [
    {
      img: '/images/aloe.jpg',
      name: 'Aloe',
      price: '$34.99',
    },
    {
      img: '/images/cactus.jpg',
      name: 'Cactus',
      price: '$29.99',
    },
    {
      img: '/images/leafy.jpg',
      name: 'Lauri Fern',
      price: '$24.99',
    },
  ];

  return (
    <div>
      <h1>Shop our items</h1>
      <ShopItems items={shopItems} />
    </div>
  );
};

export default Shop;
