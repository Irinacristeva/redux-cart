import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
} from '../store/cart/slice';
import { selectCart } from '../store/cart/actions';

function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);

  const handleChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} style={{
  background: '#fff',
  padding: 12,
  marginBottom: 8,
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
}}>
  <span>{item.title} — {item.quantity} шт.</span>
  <input
    type="number"
    value={item.quantity}
    onChange={(e) => handleChange(item.id, e.target.value)}
    min="1"
    style={{ width: 60, margin: '0 10px' }}
  />
  <button onClick={() => handleRemove(item.id)} style={{
    background: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    borderRadius: 4,
    cursor: 'pointer'
  }}>Удалить</button>
</li>

          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
