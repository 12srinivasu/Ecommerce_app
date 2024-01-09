// components/Checkout/Checkout.js
import React from 'react';
import { useCart } from '../../context/CartContext';
import { useLocation } from 'react-router-dom';


const Checkout = () => {
  const { cart } = useCart();
  const location = useLocation();
  const { cart: cartFromLocation } = location.state || {};


  const currentCart = cartFromLocation || cart;

  const calculateTotalAmount = () => {
    return currentCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    
    alert('Order Complete!');

  };

  return (
    <div>
      <center>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleCheckout}>
        {/* Shipping Information */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input type="text" id="name" name="name" required className="mt-1 p-2 rounded-md border border-gray-300" />
        </div>
  {/* Payment Information */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Card Number:
          </label>
          <input type="text" id="cardNumber" name="cardNumber" required className="mt-1 p-2 rounded-md border border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
            Expiry Date:
          </label>
          <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required className="mt-1 p-2 rounded-md border border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
            CVC:
          </label>
          <input type="text" id="cvc" name="cvc" required className="mt-1 p-2 rounded-md border border-gray-300" />
        </div>
        {/* Add more payment fields as needed */}

        {/* Order Summary */}
        <div>
          <h3 className="text-xl font-bold mb-2">Order Summary</h3>
          {currentCart.map((item) => (
            <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 p-4">
              <p className="text-lg font-semibold">
                {item.name} - &#x20B9;{item.price} x {item.quantity}
              </p>
            </div>
          ))}
          {/* Display total price */}
          <p className="text-lg font-semibold mb-2">Total Price: &#x20B9;{calculateTotalAmount()}</p>
        </div>

        <button type="submit" className="bg-red-500 text-white p-2 rounded-md mt-4">
          Complete Purchase
        </button>
      </form>
      </center>
    </div>
  );
};

export default Checkout;
