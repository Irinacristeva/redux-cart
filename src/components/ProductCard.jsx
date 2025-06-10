import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart/slice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{
  border: '1px solid #ddd',
  padding: 16,
  width: 220,
  borderRadius: 8,
  background: '#fff',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  textAlign: 'center'
}}>
  <img
    src={product.image}
    alt={product.title}
    style={{
      width: '100%',
      height: '160px',
      objectFit: 'cover',
      borderRadius: 4,
      marginBottom: 10
    }}
  />
  <h3 style={{ fontSize: 16 }}>{product.title}</h3>
  <p style={{ fontWeight: 'bold' }}>{product.price} ₽</p>
  <button style={{
    background: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: 4,
    cursor: 'pointer'
  }}
  onClick={handleAdd}>
    Добавить в корзину
  </button>
</div>

  );
}

export default ProductCard;
