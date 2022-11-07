import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import {removeFromDb} from '../../utilities/fakedb';

const Orders = () => {
  const {storedCart} = useLoaderData();
  const [cart, setCart] = useState(storedCart);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  return (
    <div className='orders-container'>
      <div className="orders">
        {
          cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>)
        }
      </div>
      <Cart hiddenCart={false} toggleCart={() => {}} cart={cart}></Cart>
    </div>
  );
}

export default Orders;
