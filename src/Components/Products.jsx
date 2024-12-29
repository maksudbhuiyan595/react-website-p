import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleProduct } from './SingleProduct';

export const Products = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="font-bold text-2xl text-center py-4">
        <h1>All Products</h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {products.products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
