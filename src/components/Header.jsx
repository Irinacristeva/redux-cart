import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../store/cart/actions';

function Header() {
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <header style={{ padding: '10px', background: '#f5f5f5' }}>
      <h2>Redux Cart</h2>
      <div>Корзина ({itemCount})</div>
    </header>
  );
}

export default Header;
