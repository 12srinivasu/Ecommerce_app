import React from 'react';
import CartItem from './CartItem';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <center>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <ol className="list-decimal pl-8 list-none">
          {cart.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex justify-between max-w-md rounded overflow-hidden shadow-lg bg-white p-4">
                <CartItem item={item} />
                <div className="flex items-center pt-8">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-red-500 text-white p-2 rounded-md mr-2"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-red-500 text-white p-2 rounded-md"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <p className="text-lg font-semibold">Total Price: &#x20B9;{totalAmount}</p>
          <Link to="/checkout">
            <button className="bg-red-500 text-white p-2 rounded-md mt-2">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default Cart;
