import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Redux Cart</h1>
        <ProductList />
        <CartPage />
      </main>
    </div>
  );
}

export default App;
