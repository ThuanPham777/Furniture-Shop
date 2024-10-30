// ProductDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product; // Access passed product data

  if (!product) {
    return <p>Product not found.</p>;
  }

  //console.log('product: ', window.location.href);
  return (
    <div className='p-6 max-w-lg mx-auto'>
      <img
        src={product.images[0]}
        alt={product.name}
        className='w-full h-64 object-cover'
      />
      <h2 className='text-2xl font-bold text-gray-800 mt-4'>{product.name}</h2>
      <p className='text-lg text-gray-600 mt-2'>{product.description}</p>
      <p className='text-2xl font-bold text-green-600 mt-4'>${product.price}</p>
      <button className='bg-green-500 text-white mt-4 py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
