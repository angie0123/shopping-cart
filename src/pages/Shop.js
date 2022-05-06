const Shop = () => {
  const storeItems = [
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

  const list = storeItems.map((item, index) => {
    return (
      <li key={index}>
        <div>
          <img
            style={{ width: '300px', height: '300px' }}
            src={window.location.origin + item.img}
            alt={item.name}
          />
          <div>
            {item.name} {item.price}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <h1>Shop our items</h1>
      <ul>{list}</ul>
    </div>
  );
};

export default Shop;
