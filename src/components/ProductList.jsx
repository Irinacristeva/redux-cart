import React from 'react';
import { useGetProductsQuery } from '../api/productsApi';
import ProductCard from './ProductCard';

function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Загрузка товаров...</p>;
  if (error) return <p>Ошибка при загрузке данных</p>;

  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
