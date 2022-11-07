import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import './Shop.css';
import { useLoaderData } from 'react-router-dom';

const Shop = ({hiddenCart, toggleCart}) => {
  const [cart, setCart] = useState([]);
  const products = useLoaderData();

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className={`cart-container ${hiddenCart}`}>
        <Cart hiddenCart={hiddenCart} toggleCart={toggleCart} cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop;
