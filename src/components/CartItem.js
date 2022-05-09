const CartItem = ({ item, inputChangeHandler }) => {
  return (
    <>
      <img
        style={{ width: '150px', height: '150px' }}
        src={window.location.origin + item.img}
        alt={item.name}
      />
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div onClick={(event) => inputChangeHandler(event, item.id, 'increment')}>
        {' '}
        +{' '}
      </div>
      <input
        type="number"
        value={item.amount}
        min="0"
        onInput={(event) => inputChangeHandler(event, item.id, 'input')}
      ></input>
      <div onClick={(event) => inputChangeHandler(event, item.id, 'decrement')}>
        {' '}
        -{' '}
      </div>
    </>
  );
};

export default CartItem;
