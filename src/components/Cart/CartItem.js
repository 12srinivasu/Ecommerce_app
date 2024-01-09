import React from 'react';

const CartItem = ({ item, onRemove }) => {
 
  return (
    <div>
    <h3>{item.name}</h3>
      <p> &#x20B9;{item.price}</p>
      <p>{item.name} -  &#x20B9;{item.price} - Quantity: {item.quantity}</p>
  </div>
  );
};

export default CartItem;
