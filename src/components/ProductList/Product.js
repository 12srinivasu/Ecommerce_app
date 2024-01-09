import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Product = ({ product, index }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert("Item added to cart")
  };

  return (
    <li className="bg-white rounded-md p-4 shadow-md text-center mb-4">
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-gray-700">&#x20B9;{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-red-500 text-white p-2 rounded-md mt-2"
        x
      >
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`} className="bg-red-500 text-white p-2 rounded-md mt-2 block">
        View Details
      </Link>
    </li>
  );
};

export default Product;

