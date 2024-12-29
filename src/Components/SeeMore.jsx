import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const SeeMore = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product with ID: ${id}`);
        }
        const data = await response.json();
        setProduct(data); // Set the product data
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProduct();
  }, [id]); // Add `id` as a dependency

  if (loading) {
    return <p>Loading...</p>; // Show loading state
  }

  if (!product) {
    return <p>Product not found.</p>; // Show error if product data is unavailable
  }

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-md max-w-4xl mx-auto bg-white flex flex-col md:flex-row gap-6">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1">
        {/* Product Title */}
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {product.description}
        </p>

        {/* Brand, Category, and Tags */}
        <p className="text-gray-600 mb-2">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Tags:</strong>{' '}
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded mr-2"
            >
              {tag}
            </span>
          ))}
        </p>

        {/* Pricing and Stock */}
        <p className="text-gray-700 mb-2">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>
        <p className="text-green-600 mb-2">
          <strong>Discount:</strong> {product.discountPercentage}% Off
        </p>
        <p
          className={`mb-4 ${
            product.stock > 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <strong>Stock:</strong>{' '}
          {product.stock > 0 ? `${product.stock} available` : 'Out of Stock'}
        </p>

        {/* Additional Information */}
        <p className="text-gray-600 mb-2">
          <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Shipping Information:</strong> {product.shippingInformation}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Return Policy:</strong> {product.returnPolicy}
        </p>
        <p className="text-gray-600">
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
      </div>
    </div>
  );
};
