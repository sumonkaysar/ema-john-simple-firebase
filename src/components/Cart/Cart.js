import React from 'react';
import './Cart.css';

const Cart = ({hiddenCart, toggleCart, cart}) => {
  
  const quantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  const price = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shipping = cart.reduce((acc, product) => acc + product.shipping, 0);
  const tax = (price * 0.1).toFixed(2);
  const grandTotal = (price + shipping + parseFloat(tax)).toFixed(2);

  return (
    <div className='cart'>
      <button className='btn-close' onClick={() => toggleCart(hiddenCart)}>&times;</button>
      <h4>
        <span>Order Summary</span>
      </h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {price}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h5>Grand Total: {grandTotal}</h5>
      <p className='cart-close'>
        <button className='cart-close-btn' onClick={() => toggleCart(hiddenCart)}>Close</button>
      </p>
    </div>
  );
}

export default Cart;
