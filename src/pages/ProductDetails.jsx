import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addCart, updateCartQuantity } from '../slices/cartSlice';
import Newsletter from '../components/Newsletter';

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state?.product;
  const initialIsInCart = location.state?.isInCart;
  const initialQuantity = location.state?.quantity || 1;

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isInCart, setIsInCart] = useState(initialIsInCart); // Local isInCart state

  useEffect(() => {
    // Set initial quantity if product is already in the cart
    if (initialIsInCart) {
      setQuantity(initialQuantity);
    }
  }, [initialIsInCart, initialQuantity]);

  // Function to add the product to cart
  const handleAddToCart = () => {
    dispatch(addCart({ ...product, quantity }));
    setIsInCart(true); // Update local isInCart state immediately
    console.log('Product added to cart:', product);
  };

  // Function to update cart quantity for a specific item
  const handleUpdateCartItemQuantity = (id, quantity) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  // Increment quantity
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    console.log(quantity);
    if (isInCart) handleUpdateCartItemQuantity(product.id, newQuantity);
  };

  // Decrement quantity, ensuring it doesn’t go below 1
  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (isInCart) handleUpdateCartItemQuantity(product.id, newQuantity);
    }
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-8'>
      <div className='p-6 max-w-lg mx-auto'>
        <img
          src={product.images[0]}
          alt={product.name}
          className='w-full h-64 object-cover'
        />
        <h2 className='text-2xl font-bold text-gray-800 mt-4'>
          {product.name}
        </h2>
        <p className='text-lg text-gray-600 mt-2'>{product.description}</p>
        <p className='text-2xl font-bold text-green-600 mt-4'>
          ${product.price}
        </p>

        {/* Quantity Selector */}
        <div className='flex items-center space-x-4 mt-4'>
          <button
            onClick={decrement}
            className='w-10 h-10 bg-lime-600 text-white rounded-md flex items-center justify-center hover:bg-lime-700'
          >
            -
          </button>
          <span className='text-xl'>{quantity}</span>
          <button
            onClick={increment}
            className='w-10 h-10 bg-lime-600 text-white rounded-md flex items-center justify-center hover:bg-lime-700'
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`${
            isInCart
              ? 'bg-gray-200 hover:bg-gray-400'
              : 'bg-lime-500 hover:bg-lime-600'
          } mt-4 py-2 px-4 rounded-lg text-white transition duration-200`}
          disabled={isInCart}
        >
          {isInCart ? 'Item in Cart' : 'Add to Cart'}
        </button>
      </div>

      <div className='w-11/12 py-5'>
        <Newsletter />
      </div>
    </div>
  );
};

export default ProductDetails;
