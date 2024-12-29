import React from 'react';
import { Link } from 'react-router-dom';

export const SingleProduct = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-xs mx-auto text-center shadow-md">
      {/* Product Image */}
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-auto rounded-lg mb-4"
      />
      
      {/* Price and Discount */}
      <div className="mb-2">
        <p className="text-lg font-semibold text-gray-800">{product.title}</p>
      
      </div>
      <div className="mb-2">
        <p className="text-lg font-semibold text-gray-800">${product.price.toFixed(2)}</p>
        <p className="text-sm text-green-600">{product.discountPercentage}% Off</p>
      </div>

      {/* Stock and Quantity */}
      <p className={`mb-2 ${product.stock > 0 ? "text-blue-500" : "text-red-500"}`}>
        Stock: {product.stock > 0 ? `${product.stock} available` : "Out of Stock"}
      </p>
      <p className="text-sm text-gray-600">Minimum Order Quantity: {product.minimumOrderQuantity}</p>

      {/* Buttons */}
      <div className="mt-4 space-x-2">
        <button 
          className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition duration-200"
          onClick={() => alert("Added to Cart!")}
        >
          Add to Cart
        </button>
        <Link to={`/products/${product?.id}`}>
          <button 
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition duration-200"
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};
